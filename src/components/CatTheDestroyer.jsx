import {useEffect, useLayoutEffect, useRef, useState} from "react";
import cat from "../assets/images/superCat3.png";
import menacing from "../assets/images/menacing.png";
import laser from "../assets/sounds/laser.mp3";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {CatLasers} from "./CatLasers";

export function getAngleBetweenPoints(pointA, pointB) {
    const dX = pointB.x - pointA.x;
    const dY = pointB.y - pointA.y;
    const rad = Math.atan2(dY, dX);
    return radianToDegrees(rad);
}

export function radianToDegrees(rad) {
    return rad * (180 / Math.PI);
}

export function getLengthBetweenPoints(pointA, pointB) {
    // sqrt((x2 - x1)^2 + (y2 - y1)^2))
    return Math.sqrt(
        Math.pow(pointB.x - pointA.x, 2) + Math.pow(pointB.y - pointA.y, 2),
    );
}

// width: `${getLengthBetweenPoints(eyeCenter, targetCenter)}px`,
// height: `${height}px`,
// borderRadius: `4px`,
// background: `linear-gradient(to right, red, orange, yellow, green, cyan, blue, violet)`,
// position: `fixed`,
// left: `${eyeCenter.x - (height / 2)}px`,
// top: `${eyeCenter.y - (height / 2)}px`,
// zIndex: TOP_Z_INDEX,
// pointerEvents: `none`,
// transformOrigin: `0 center`,
// // Set the rotation to be the angle between the eye and the target.
// // For some reason we need to add 0.1deg, look into this magic number in the future.
// transform: `rotate(${getAngleBetweenPoints(eyeCenter, targetCenter) + (0.1)}deg)`,

const DESTROYER_BLACK_LIST = new Set([
    "app",
    "canvas",
    "background",
    "catDestroyer",
    "catDestroyer__pic",
    "catDestroyer__laser1",
    "catDestroyer__laser2",
]);

const play = (target, eyeOne, eyeTwo, laserOne, laserTwo) => {
    const tl1 = gsap.timeline();
    const tl2 = gsap.timeline();
    tl1.to(laserOne.current, {
        scaleX: 0,
        rotate: `${getAngleBetweenPoints(eyeOne, target) + 0.1}deg`,
        duration: 0,
    })
        .to(laserOne.current, {
            visibility: "visible",
            scaleX: getLengthBetweenPoints(eyeOne, target),
            duration: 0.2,
        })
        .to(laserOne.current, {
            visibility: "hidden",
            scaleX: 0,
            rotate: 0,
            duration: 0.4,
        });
    tl2.to(laserTwo.current, {
        scaleX: 0,
        rotate: `${getAngleBetweenPoints(eyeTwo, target) + 0.1}deg`,
        duration: 0,
    })
        .to(laserTwo.current, {
            visibility: "visible",
            scaleX: getLengthBetweenPoints(eyeTwo, target),
            duration: 0.2,
        })
        .to(laserTwo.current, {
            visibility: "hidden",
            scaleX: 0,
            rotate: 0,
            duration: 0.4,
        });
};

export const CatTheDestroyer = ({isCatVisible, setIsCatVisible}) => {
    const ref = useRef();
    const menacingRef = useRef();
    const catRef = useRef();
    const audioRef = useRef();
    const laserOne = useRef();
    const laserTwo = useRef();
    const targetRef = useRef({x: 0, y: 0});
    const shoot = useRef();
    const catTl = useRef();
    const hideCatTl = useRef();
    const hideCat = useRef();
    const laserTl = useRef();
    const eyeOne = useRef({x: 0, y: 0});
    const eyeTwo = useRef({x: 0, y: 0});

    const {contextSafe} = useGSAP(
        () => {
            catTl.current = gsap
                .timeline()
                .from(
                    "#catDestroyer__pic",
                    {
                        opacity: 0,
                        y: 30,
                    },
                    0,
                )
                .from(
                    menacingRef.current,
                    {
                        opacity: 0,
                        y: 40,
                    },
                    0.05,
                )
                .to(
                    menacingRef.current,
                    {
                        x: 2,
                        yoyo: 1,
                        repeat: 8,
                        duration: 0.1,
                    },
                    0,
                )
                .to(
                    "#catDestroyer__menacing",
                    {
                        opacity: 0,
                        onComplete: () => console.log("complete"),
                    },
                    1,
                )
                .pause();

            hideCatTl.current = gsap
                .timeline()
                .to("#catDestroyer__pic", {
                    opacity: 0,
                    y: 30,
                })
                .pause();

            hideCat.current = (e) => {
                console.log(e);
                if (e.key === "Escape") setIsCatVisible(false);
            };

            const createLaserTl = (laser, eye, target) =>
                gsap
                    .timeline()
                    .to(laser, {
                        scaleX: 0,
                        rotate: `${getAngleBetweenPoints(eye, target) + 0.1}deg`,
                        duration: 0,
                    })
                    .to(laser, {
                        visibility: "visible",
                        scaleX: getLengthBetweenPoints(eye, target),
                        duration: 0.2,
                    })
                    .to(laser, {
                        visibility: "hidden",
                        scaleX: 0,
                        rotate: 0,
                        duration: 0.4,
                    })
                    .pause();

            laserTl.current = (eyeOne, eyeTwo, target) => {
                const tl1 = createLaserTl(laserOne.current, eyeOne, target);
                const tl2 = createLaserTl(laserTwo.current, eyeTwo, target);

                tl1.play();
                tl2.play();
            };

            // .pause();
        },
        {scope: document},
    );

    useLayoutEffect(() => {
        shoot.current = (e) => {
            e.preventDefault?.();
            e.stopPropagation?.();

            if (!audioRef.current.paused) return;

            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            eyeOne.current = {
                x: window.innerWidth - 130,
                y: window.innerHeight - 218,
            };
            eyeTwo.current = {
                x: window.innerWidth - 220,
                y: window.innerHeight - 232,
            };
            targetRef.current = {
                x: e.clientX,
                y: e.clientY,
            };
            laserTl.current(eyeOne.current, eyeTwo.current, targetRef.current);

            // contextSafe(() =>
            // play(target, eyeOne, eyeTwo, laserOne, laserTwo);
            // );

            if (
                e.target === document.body ||
                DESTROYER_BLACK_LIST.has(e.target.id)
            )
                return;

            e.target.remove();
        };
        return () => {
            document.removeEventListener("mousedown", shoot.current);
            document.removeEventListener("keydown", hideCat.current);
        };
    }, []);

    useLayoutEffect(() => {
        if (isCatVisible) {
            document.addEventListener("mousedown", shoot.current);
            document.addEventListener("keydown", hideCat.current);
            document.body.classList.add("crosshair");
            catTl.current.restart();
        } else {
            document.removeEventListener("mousedown", shoot.current);
            document.removeEventListener("keydown", hideCat.current);
            document.body.classList.remove("crosshair");
            hideCatTl.current.restart();
        }

        if (audioRef.current) audioRef.current.volume = 0.2;
    }, [isCatVisible]);

    eyeOne.current = {
        x: window.innerWidth - 130,
        y: window.innerHeight - 218,
    };

    eyeTwo.current = {
        x: window.innerWidth - 220,
        y: window.innerHeight - 232,
    };

    return (
        <div
            id="catDestroyer"
            className="fixed bottom-[-10px] right-[-10px]"
            ref={ref}
        >
            <img
                ref={menacingRef}
                id="catDestroyer__menacing"
                className="absolute bottom-[120px] right-[260px] z-50 w-30 rotate-12"
                src={menacing}
            />
            <img
                ref={catRef}
                id="catDestroyer__pic"
                className="z-40 w-96 m-w-96 m-w-96"
                src={cat}
            />
            <audio ref={audioRef}>
                <source src={laser}></source>
            </audio>
            <CatLasers />
            <div
                id="laser1"
                ref={laserOne}
                style={{
                    width: "1px",
                    height: `${12}px`,
                    background: `linear-gradient(to bottom, red,  yellow,  red)`,
                    position: `fixed`,
                    left: `${eyeOne.current.x}px`,
                    top: `${eyeOne.current.y}px`,
                    zIndex: 10000,
                    pointerEvents: `none`,
                    borderRadius: "500px",
                    transformOrigin: "left",
                    transform: "scaleX(0) rotate(0)",
                }}
            />
            <div
                id="laser2"
                ref={laserTwo}
                style={{
                    width: "1px",
                    height: `${12}px`,
                    background: `linear-gradient(to bottom, red,  yellow,  red)`,
                    position: `fixed`,
                    left: `${eyeTwo.current.x}px`,
                    top: `${eyeTwo.current.y}px`,
                    zIndex: 10000,
                    pointerEvents: `none`,
                    borderRadius: "500px",
                    transformOrigin: "left",
                    transform: "scaleX(0) rotate(0)",
                }}
            />
        </div>
    );
};

// const fire = contextSafe((e) => {
//     console.log(e);
//     const target = {
//         x: e.clientX,
//         y: e.clientY,
//     };
//     targetRef.current = target;

//     if (
//         // isFiring ||
//         e.target === document.body ||
//         DESTROYER_BLACK_LIST.has(e.target.id)
//     )
//         return;

//     e.target.remove();
// });
