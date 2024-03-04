import {Canvas, useThree} from "@react-three/fiber";
import {Scene} from "./Scene";
import {
    AdaptiveDpr,
    AdaptiveEvents,
    Bvh,
    Html,
    PerformanceMonitor,
    Preload,
    Scroll,
    ScrollControls,
    Sparkles,
    Stars,
    Stats,
    useFont,
    useGLTF,
} from "@react-three/drei";
// import { Layout } from './Layout'
import {Suspense, useLayoutEffect, useRef, useState} from "react";
import {GlitchMode} from "postprocessing";
import {BlendFunction} from "postprocessing";
import {Loader} from "../UI/Loader";
import {
    Bloom,
    DepthOfField,
    EffectComposer,
    Glitch,
    Noise,
    Scanline,
    Vignette,
} from "@react-three/postprocessing";
import {Palms} from "./Palms";
import {Layout} from "../Layout";
import {MaskFunction} from "postprocessing";
import {Cassette} from "./Models/Cassette";
import {Color} from "three";

export const CanvasScene = () => {
    // useLayoutEffect(
    //     () => {
    //         if (!ref.current)
    //             return;
    //         // ref.current.scrollTop += .1
    //         window.canvasScroll = ref;
    //     }
    // )
    // const {lenis, scrollOffset} = usePageScroll();
    return (
        <Canvas
            id="canvas"
            // style={{
            //     background: 'background-base'
            // }}
            // className="z-30"
            shadows="basic"
            eventSource={document.getElementById("root")}
            className="size-full"
            // dpr={[1, 2]}
            performance={{min: 0.5}}
            frameloop="always"
            // pixelRatio={window.devicePixelRatio}
            scene={{position: [0, 0, -2]}}
            camera={{position: [0, 0, 5], rotation: [0, 0, 0]}}
        >
            <Suspense fallback={<Loader />}>
                {/* <PerformanceMonitor
                    onIncline={() => setDpr(2)}
                    onDecline={() => setDpr(1)}
                    flipflops={3}
                /> */}
                {/* <ScrollControls pages={5} damping={.25}> */}
                <Stats />
                {/* <Scroll> */}
                <Scene />
                <Preload all />
                <AdaptiveDpr pixelated />
                {/* <AdaptiveEvents /> */}
                {/* <Html className="size-full "> */}
                {/* <Layout /> */}
                {/* </Html> */}
                {/* </Scroll> */}
                {/* <Scroll html className="w-full"> */}
                {/* <Layout/> */}
                {/* </Scroll> */}
                {/* </ScrollControls> */}
                {/* <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} position={[0, 0, -20]} /> */}
                {/* <Scroll> */}
                {/* </Scroll> */}
                {/* <Scroll html className="w-full"> */}
                {/* <Layout/> */}
                {/* </Scroll> */}
                {/* </ScrollControls> */}
                {/* <EffectComposer> */}
                {/* <Scanline density={5} /> */}
                {/* </EffectComposer> */}
            </Suspense>
        </Canvas>
    );
};

useFont.preload("fonts/Tape.ttf");

// <EffectComposer>
// {/* <Glitch
//     delay={[0.5, 1.5]}
//     duration={[0.8, 1.0]}
//     strength={[0.05, 0.1]}
//     mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
//     active // toggle on/off
//     ratio={0.01}
// /> */}
// {/* <Bloom luminanceThreshold={0} mipmapBlur luminanceSmoothing={0.0} intensity={1} /> */}
// {/* <Scanline density={2} /> */}

// {/* <Scanline density={5} /> */}
// {/* <Scanline density={5} /> */}
// {/* <DepthOfField
//     // focusDistance={0}
//     // focalLength={0.02}
//     // bokehScale={2}
//     // height={1000}
//     focusDistance={0}
//     focalLength={0.02}
//     bokehScale={2}
//     height={900}
//     blendFunction={BlendFunction.Screen}
//     blur={true}
//     maskFunction={MaskFunction.MULTIPLY}
// /> */}
// {/* <Bloom luminanceThreshold={0} luminanceSmoothing={0.9} height={300} /> */}
// {/* <Noise opacity={0.02} /> */}
// {/* <Vignette eskil={false} offset={0.1} darkness={1.1} /> */}
// </EffectComposer>
