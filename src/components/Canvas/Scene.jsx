import {Suspense, useEffect, useLayoutEffect, useRef, useState} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {
    CameraControls,
    OrbitControls,
    Sky,
    SoftShadows,
    useFont,
    useScroll,
} from "@react-three/drei";
import {Pc} from "./Models/Pc";
import {Rhetorician} from "./Models/Rhetorician";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {
    Bloom,
    EffectComposer,
    Glitch,
    Scanline,
} from "@react-three/postprocessing";
import {Loader} from "../UI/Loader";
import {scrollById, scrollToSection} from "../../hooks/useApp";
import {Cassette} from "./Models/Cassette";
import {Cassetes} from "./Cassetes";
import {GlitchMode, BlendFunction} from "postprocessing";
import {TweenLite} from "gsap/gsap-core";
import {Triangle} from "./Models/Triangle";
import {Palms} from "./Palms";
import {useLenisStore} from "../../stores/useLenisStore";
import {splitType} from "../../utils/splitType";

const createScrollTrigger = (section) => {
    return {
        trigger: `#section__${section}`,
        start: "top center+=100px",
        end: "+=100%",
        scrub: 1,
        snap: 0.1,
        markers: true,
        ease: "elastic",
        toggleActions: "restart pause resume pause",
        immediateRender: false,
    };
};

export function getScrollOffset(elm = document.body) {
    const p = elm.parentNode;
    return (elm.scrollTop || p.scrollTop) / (p.scrollHeight - p.clientHeight);
}

const createHeaderTl = (id) => {
    const tl = gsap.timeline();
    splitType(`section__header_${id}`, tl, {
        opacity: 0,
        stagger: 0.08,
        x: -5,
    });

    if (id !== 2)
        tl.fromTo(
            `#section__content_${id}`,
            {
                opacity: 0.1,
                y: 20,
                webkitFilter: "blur(" + 2 + "px)",
            },
            {
                opacity: 1,
                y: 0,
                webkitFilter: "none",
            },
        );

    if (id === 1) {
        const subTl = gsap.timeline();
        subTl.from("#thatsMe__arrow", {
            opacity: 0,
            x: -20,
        });

        splitType("thatsMe__text", subTl, {
            opacity: 0,
            stagger: 0.04,
            x: -5,
            duration: 0.1,
        });
        tl.add(subTl);
    }

    if (id === 3) {
        const subTl = gsap.timeline();
        subTl
            .from("#contactMe__cyberspace", {
                opacity: 0,
                x: -50,
                duration: 0.3,
            })
            .from("#contactMe__cat", {
                opacity: 0,
                x: -50,
                duration: 0.3,
            });
        tl.add(subTl);
    }

    return tl;
};

const animateRhet = (rhet) => {
    rhet.rotation.y += delta * 0.3;
};

// export const

export const Scene = () => {
    const rhetRef = useRef();
    const rhetGroupRef = useRef();
    const pcRef = useRef();
    const cassetesRef = useRef();
    const sceneRef = useRef();

    const tl = useRef();
    const planeRef = useRef();
    const scroll = useScroll();
    const {height: h, width: w} = useThree((state) => state.viewport);
    const {camera, controls} = useThree();
    window.camera = camera;
    window.scene = sceneRef;
    window.pc = pcRef;
    // const DEFAULT_RHET_POS = [-w, -h * 1.4, 2.4];
    // const DEFAULT_RHET_POS = [-w, -h * 1.4, 2.4];
    // const DEFAULT_RHET_POS = [-w, -h/2, 2.4];
    // const DEFAULT_RHET_POS = [-w / 3.3, -h / 2, 2.4];
    // const DEFAULT_PC_POS = [w / 6 , -h / 4, 2.4];
    // const DEFAULT_CASSETES_POS = [0, h / 6, 1];

    const DEFAULT_RHET_POS = [-w / 3, -h * 1.35, 2.4];
    const DEFAULT_CASSETES_POS = [0, -h * 2.02, 1];
    const DEFAULT_PC_POS = [w / 6, -h * 4.25, 2.4];
    // const DEFAULT_PC_POS = [-0.2, -h * 4.25, 2.4];

    const cassetePyrusRef = useRef();
    const casseteHostRef = useRef();
    const lenis = useLenisStore((state) => state.lenis);

    const [isGlitchActive, setIsGlitchActive] = useState(false);
    useGSAP(() => {
        const mm = gsap.matchMedia();
        mm.add(
            {
                reduceMotion: "(prefers-reduced-motion: reduce)",
                isPortrait: "(orientation: portrait)",
                isLandscape: "(orientation: landscape)",
            },
            (context) => {
                // const {reduceMotion} = context.conditions;
                const reduceMotion = false;

                tl.current = gsap.timeline({
                    defaults: {
                        duration: reduceMotion ? 1 : 3,
                        ease: reduceMotion ? "expo.out" : "power1.inOut",
                        // toggleActions: "restart pause restart pause",
                    },
                });
                const headerTl1 = !reduceMotion && createHeaderTl(1);
                const headerTl2 = !reduceMotion && createHeaderTl(2);
                const headerTl3 = !reduceMotion && createHeaderTl(3);

                const aboutMeBreak = 0;
                const workBreak = reduceMotion ? 1 : 4;
                const contactsBreak = reduceMotion ? 2 : 8;
                const pcBreak = reduceMotion ? 3 : 11.6;
                const cyberspaceBreak = reduceMotion ? 3.1 : 12;

                // const headerTl = gsap
                //     .timeline()
                //     .to("#navigation", {y: "-100svh"}, 0)
                //     .to("#header", {y: "-100svh"}, 0);

                tl.current
                    .to(sceneRef.current?.position, {y: h * 0.9}, aboutMeBreak)
                    .to("#header", {y: "-100svh"}, aboutMeBreak)
                    .from("#section_1", {y: "100svh"}, aboutMeBreak)
                    .to(
                        rhetGroupRef.current,
                        {
                            animate: true,
                        },
                        aboutMeBreak + 1,
                    );

                if (headerTl1) tl.current.add(headerTl1, aboutMeBreak + 0.7);

                tl.current
                    .to(sceneRef.current?.position, {y: 2.2 * h}, workBreak)
                    .to("#section_1", {y: "-100svh"}, workBreak)
                    .from("#section_2", {y: "100svh"}, workBreak)
                    .to(
                        cassetesRef.current,
                        {
                            animate: true,
                        },
                        workBreak,
                    )
                    .to(
                        rhetGroupRef.current,
                        {
                            animate: false,
                        },
                        workBreak + 1,
                    );

                if (headerTl2) tl.current.add(headerTl2, workBreak + 0.7);

                tl.current
                    .to(sceneRef.current?.position, {y: 4 * h}, contactsBreak)
                    // .to('#section_2', {y: 0 }, 8)
                    .to("#section_2", {y: "-100svh"}, contactsBreak)
                    .from(pcRef.current?.rotation, {y: -Math.PI}, contactsBreak)
                    .to(pcRef.current?.rotation, {y: -0.7}, contactsBreak)
                    .from("#section_3", {y: "100svh"}, contactsBreak)
                    .to(
                        cassetesRef.current,
                        {
                            animate: false,
                        },
                        contactsBreak,
                    );
                // .to('#section_3', {y: 0 }, 8)

                if (headerTl3) tl.current.add(headerTl3, contactsBreak + 0.7);

                tl.current
                    .to(pcRef.current?.rotation, {y: 0}, pcBreak)
                    .to(pcRef.current?.position, {x: -0.2}, pcBreak)
                    .to("#section_3", {x: "-100svw"}, pcBreak);
                // .to(camera.rotation, {x: 0, y: 0, z: 0}, pcBreak)
                // .to(camera.position, {z: 0}, pcBreak);

                // tl.current.to(
                //     camera.position,
                //     {z: DEFAULT_PC_POS[2] - 1},
                //     cyberspaceBreak,
                // );
                // tl.current.to(
                //     pcRef.current?.position,
                //     {z: DEFAULT_PC_POS[2] + 3},
                //     cyberspaceBreak,
                // );
                tl.current.to(
                    sceneRef.current?.position,
                    {z: 3.8},
                    cyberspaceBreak,
                );
                tl.current.from(
                    "#footer",
                    {y: "-100svh", opacity: 0},
                    cyberspaceBreak,
                );
            },
        );

        console.log(rhetGroupRef);
        // .to("#footer", {y: "-100svh", duration: 1}, 12);
    }, []);

    const resizingTimeout = useRef(null);
    useLayoutEffect(() => {
        window.addEventListener("resize", function () {
            if (!tl.current) return;

            setIsGlitchActive(true);
            clearTimeout(resizingTimeout.current);
            resizingTimeout.current = setTimeout(() => {
                setIsGlitchActive(false);
                resizingTimeout.current = null;
            }, 500);
        });

        const escapeCyberSpace = (e) => {
            // console.log(!animate || e.key !== "Escape");
            // if (!animate || e.key !== "Escape") return;
            // scrollToSection(null, "#contacts");
        };

        // document.addEventListener("keydown", escapeCyberSpace);
    }, []);

    useFrame((state, delta) => {
        const offset = lenis.scroll / lenis.limit ?? 0;
        tl.current.seek(offset * tl.current?.duration());

        if (resizingTimeout.current) return;

        if (rhetRef.current && rhetGroupRef.current.animate)
            rhetRef.current.rotation.y += delta * 0.2;
        toggleAnimation(offset > 0.95);
    });

    const DEFAULT_CASSETE_POS = [-w / 4, -h / 4, 0];
    const DEFAULT_CASSETE_POS2 = [w / 4, -h / 4, 0];

    const [selectedCassete, setSelectedCassete] = useState("");
    const [animate, setAnimate] = useState(false);
    const onClick = (e) => {
        // console.log(e.object.name);
        setSelectedCassete(name);
    };

    const toggleGlitch = (e) => {
        if (isGlitchActive) return;

        // console.log(e);
        setIsGlitchActive(true);
        setTimeout(() => setIsGlitchActive(false), 400);
    };

    const toggleAnimation = (toggle) => {
        if (animate === toggle) return;

        setAnimate(toggle);
    };

    return (
        <>
            <Palms />
            <group ref={sceneRef}>
                {/* scale={[3, 2, 4]}
                    position={[0, h * 0.05, 3.4]}
                    rotation={[0, 0, Math.PI / 6]} */}
                {/* <Triangle
                    scale={2.8}
                    position={[0, 0, 3.4]}
                    rotation={[0, 0, Math.PI / 6]}
                    // color="#1F6854"
                    // color="#302493"
                    // animate={true}
                    color="#302493"
                    strokeWidth={0.999999999999999999999999999}
                    wireframeLinewidth={40}
                    emissive={17}
                /> */}
                {/* <Triangle
                    scale={[3.5, 2, 4]}
                    position={[0, h * 0.05, 3.4]}
                    rotation={[0, 0, Math.PI / 7]}
                    // color="#1F6854"
                    // color="#302493"
                    // animate={true}
                    color="#0D1B30"
                    strokeWidth={0}
                    wireframeLinewidth={40}
                    emissive={1}
                /> */}
                {/* <Triangle
                    scale={[3.5, 2, 4]}
                    position={[0, h * 0.05, 3.4]}
                    rotation={[0, 0, Math.PI / 8]}
                    // color="#1F6854"
                    // color="#302493"
                    // animate={true}
                    color="#1F6854"
                    strokeWidth={1}
                    wireframeLinewidth={40}
                    emissive={7}
                />
                <Triangle
                    scale={[3.5, 2, 4]}
                    position={[0, h * 0.05, 3.4]}
                    rotation={[0, 0, Math.PI / 9]}
                    opacity={0.5}
                    // color="#1F6854"
                    // color="#302493"
                    // animate={true}
                    // color="#F21868"
                    color="#0D1B30"
                    strokeWidth={1}
                    wireframeLinewidth={40}
                    // emissive={60}
                /> */}
                {/* <Triangle
                    scale={2.8}
                    position={[0, 0, 1.6]}
                    rotation={[0, 0, Math.PI / 6]}
                    // color="rgba(58, 183, 149, .1)"
                    color="#1F6854"
                    emissive={1}
                    animate={true}
                    // color="#1D779A"
                /> */}
                {/* <Rhetorician modelRef={rhetoricianRef} position={[-w/3.3, -h * 1.5, 2.4]} rotation={[0, .6, 0]}/> */}
                <Rhetorician
                    animate={!animate}
                    groupRef={rhetGroupRef}
                    modelRef={rhetRef}
                    position={DEFAULT_RHET_POS}
                    rotation={[0, 0.6, 0]}
                    scale={0.95}
                    onClick={toggleGlitch}
                />
                <Cassetes
                    animate={!animate}
                    groupRef={cassetesRef}
                    isResizing={false}
                    position={DEFAULT_CASSETES_POS}
                />
                <Pc
                    modelRef={pcRef}
                    position={DEFAULT_PC_POS}
                    // rotation={[0, -0.7, 0]}
                    animate={animate}
                    scale={4.5}
                    isResizing={false}
                    onClick={() => !animate && scrollById(4)}
                />
                <EffectComposer>
                    <Bloom
                        luminanceThreshold={1}
                        mipmapBlur
                        luminanceSmoothing={0.5}
                        intensity={0.8}
                    />
                    <Glitch
                        delay={[1.5, 3.5]}
                        duration={[0.6, 1.0]}
                        strength={[0.3, 1]}
                        mode={GlitchMode.CONSTANT_MILD} // try CONSTANT_MILD
                        active={isGlitchActive} // toggle on/off
                        ratio={0.85}
                    />
                    {animate && (
                        <Scanline
                            density={2}
                            enabled={animate}
                            blendFunction={BlendFunction.OVERLAY}
                        />
                    )}
                </EffectComposer>
            </group>
        </>
    );
};

// tl.current
// .from(rhetGroupRef.current.position, { y: -h * 1.5 },0)
// .to(rhetGroupRef.current.position, {y: h * .8 }, 4)
// .to('#section__0', {y: '-100svh' }, 0)
// .from('#section__1', {y: '100svh' }, 0)
// .to('#section__1', {y: '-100svh'}, 4)
// // .to('#section__1', {y: 0 }, 4)

// tl.current
// .from(cassetesRef.current.position, {y: -h * 1.5 }, 4)
// .to(cassetesRef.current.position, {y: h * 2.5 }, 8)
// .from('#section__2', {y: '100svh' }, 4)
// .to('#section__2', {y: 0 }, 8)

// tl.current
// .to('#section__2', {y: '-100svh'}, 8)
// .from(pcRef.current.position, {y: -h * 1.5 }, 8)
// .from(pcRef.current.rotation, {y: -Math.PI }, 8)
// .from('#section__3', {y: '100svh' }, 8)
// .to('#section__3', {y: 0 }, 8)
// .to(pcRef.current.rotation, {y: 0}, 11.5)
// .to(pcRef.current.position, {x: -.18}, 11.5)
// .to(camera.rotation, {x: 0, y: 0, z:0}, 11.5)
// tl.current.to(camera.position, {z: DEFAULT_PC_POS[2] - 1}, 12)

// useGSAP(() => {
//   const scrollTrigger = {
//       trigger: "#section__0",
//       start: 'top top',
//       end: '+=100%',
//       // end: '+=100%',
//       scrub: 1,
//       // markers: true,
//       toggleActions: "restart pause resume pause",
//       immediateRender: false,
//       // toggleActions: "restart restart restart restart"
//   }
//   const scrollTrigger2 = {
//     trigger: "#section__1",
//     start: 'top top',
//     end: '+=100%',
//     scrub: 1,
//     // markers: true,
//     toggleActions: "restart pause resume pause",
//     immediateRender: false,
//     // toggleActions: "restart pause resume pause"
//   }
//   const scrollTrigger3 = {
//     trigger: "#section__2",
//     start: 'top top',
//     end: '+=100%',
//     scrub: 1,
//     // markers: true,
//     toggleActions: "restart pause resume pause",
//     immediateRender: false,
//     // toggleActions: "restart pause resume pause"
// }

// animateRhet(rhetoricianRef, scroll)

// gsap.to(
//     rhet.current?.rotation, {
//         y: 2.5 * data.offset,
//         duration: 2
//     }
// )

// gsap.to(
//   rhetoricianRef.current.rotation, {
//         y: 2.5,
//         scrollTrigger,
//     }
// )
// gsap.to(
//   scene.position,
//   {
//       x: -10,
//       y: -7.5,
//       z: 2,
//       scrollTrigger
//   }
// )
// gsap.to(
//   scene.position, {
//       x: -20,
//       y: 7.3,
//       scrollTrigger: scrollTrigger2,
//   }
// )
// gsap.to(
//   scene.position, {
//       x: -10,
//       y: 12,
//       scrollTrigger: scrollTrigger3,
//   }
// )

// })

// const animateRhet = (rhet, scroll) => {
//   // const scrollTrigger = createScrollTrigger(1);
//   // const scrollTrigger2 = createScrollTrigger(2);
//   // if (!rhet)
//   //   return;

//   gsap.to(
//     rhet.current?.rotation, {
//         y: 2.5 * scroll.offset,
//     }
//   )
//   return;
//   const scrollTrigger = {
//       trigger: `#section__2`,
//       start: 'top center',
//       end: '+=100%',
//       scrub: 1,
//       markers: true,
//       // ease: "elastic",
//       toggleActions: "restart pause resume pause",
//       immediateRender: false,
//   }
// //   const scrollTrigger2 = {
// //     trigger: `#section__${1}`,
// //     start: 'top bottom',
// //     end: '+=80%',
// //     scrub: 1,
// //     markers: true,
// //     ease: "elastic",
// //     toggleActions: "restart pause resume pause",
// //     immediateRender: false,
// // }
// //   const scrollTrigger2 = {
// //     trigger: `#section__${2}`,
// //     start: 'top center+=100px',
// //     end: '+=100%',
// //     scrub: 1,
// //     markers: true,
// //     ease: "elastic",
// //     toggleActions: "restart pause resume pause",
// //     immediateRender: false,
// // }
//   // gsap.to(
//   //     rhet.current?.rotation, {
//   //         y: 2.5,
//   //         scrollTrigger,
//   //     }
//   // )
//   // gsap.fromTo(
//   //   rhet.position,
//   //   {
//   //     x: 5,
//   //     y: 0,
//   //     scrollTrigger,
//   //   },
//   //   {
//   //       x: -5,
//   //       y: -2,
//   //       z: 1,
//   //       scrollTrigger,
//   //   }
//   // )
//   // gsap.to(
//   //   rhet.current?.position, {
//   //       x: -5,
//   //       y: -2,
//   //       z: 1,
//   //       scrollTrigger
//   //   }
//   // )
//   // gsap.fromTo(
//   //   rhet.position,
//   //   {
//   //     x: -5,
//   //     y: -2,
//   //     z: 1,
//   //     scrollTrigger,
//   //   },
//   //   {
//   //     x: -10,
//   //     y: 4,
//   //     scrollTrigger: scrollTrigger2,
//   //   }
//   // )

//   // gsap.to(
//   //   rhet.current?.position, {
//   //     x: -14,
//   //     y: 4,
//   //     scrollTrigger: scrollTrigger2,
//   //   }
//   // )
// }

// tl.current
// .from(rhetGroupRef.current.position, { y: -h * 1.5 },0)
// .to(rhetGroupRef.current.position, {y: h * .8 }, 4.2)

// tl.current
// .from(cassetesRef.current.position, {y: -h * 1.5 }, 4.6)
// .to(cassetesRef.current.position, {y: h * 2.5 }, 7.8)

// // tl.current.to(pcRef.current.position, {x: DEFAULT_PC_POS[0] - w * .8}, 7)
// // .to(pcRef.current.rotation, {y: -.7}, 7)
// // .to(pcRef.current.position, {x: -.2, y: -h / 4}, 11.5)
// // .to(pcRef.current.rotation, {y: 0}, 11.5)
// tl.current
// .from(pcRef.current.position, {y: -h * 1.5 }, 7.8)
// .from(pcRef.current.rotation, {y: -Math.PI }, 7.8)
// // .to(pcRef.current.position, {x: DEFAULT_PC_POS[0]}, 7)
// // .to(pcRef.current.rotation, {y: -.7}, 7)
// // .to(pcRef.current.position, {y: -h / 4}, 11.5)
// // .to(pcRef.current.rotation, {y: 0}, 11.5)\
// .to(pcRef.current.rotation, {y: 0}, 11.5)
// .to(pcRef.current.position, {x: -.18}, 11.5)
// .to(camera.rotation, {x: 0, y: 0, z:0}, 11.5)
// tl.current.to(camera.position, {z: DEFAULT_PC_POS[2] - 1}, 12)
