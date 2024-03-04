import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import {useEffect, useLayoutEffect, useRef} from "react";

export const useHeader = () => {
    const headerRef = useRef(null);
    const meRef = useRef(null);
    const whoIsMe = [
        "a Frontend Developer",
        "a Frontend Engineer",
        "a Fullstack Developer",
        "a Web Developer",
        "a digital nomad",
    ];

    useGSAP(
        () => {
            const masterTl = gsap.timeline({repeat: -1}).play();
            whoIsMe.forEach((word) => {
                const tl = gsap.timeline({
                    repeat: 1,
                    repeatDelay: 2,
                    yoyo: true,
                });
                tl.to(meRef.current, {duration: 1.5, text: word});
                masterTl.add(tl);
            });
            gsap.from(headerRef.current, {
                opacity: 0,
                // y: 100,
                // rotateX: 45,
                // transformOrigin: "bottom",
                duration: 1.2,
            });
        },
        {scope: headerRef},
    );

    return {
        meRef,
        headerRef,
    };
};
