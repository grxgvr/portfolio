import {useEffect, useMemo, useRef} from "react";
import {Clone, useAnimations, useGLTF, useScroll} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import {SkinnedMesh} from "three";
import gsap from "gsap";
import * as THREE from "three";
import {GlitchMode} from "postprocessing";
import {useGSAP} from "@gsap/react";
import {
    DepthOfField,
    EffectComposer,
    Glitch,
    Noise,
} from "@react-three/postprocessing";
import {Palm} from "./Models/Palm";
import {useMediaStore} from "../../stores/useMediaStore";

// export function Palm(props) {

//     // const modelRef2 = useRef(null)
//     const { nodes, materials, animations,} = useGLTF('./models/palm3.gltf', true)
//     const { actions, mixer,} = useAnimations(animations, modelRef);
//     // const { height: h, width: w } = useThree((state) => state.viewport)

//     const lightref = useRef();
//     const lightref2 = useRef();
//     useEffect(() => {
//         actions["CINEMA_4D_Main"]?.play();
//         window.actions = actions;
//         window.palm = modelRef;
//         // window.palm2 = modelRef2;
//         // window.light1 = lightref;
//         // window.light2 = lightref2;
//     }, [mixer]);

//     // useFrame((state, delta) => {
//     //     // modelRef.current.rotation.z = (state.pointer.y - state.pointer.x)  * (Math.PI / 500);
//     //     modelRef.current.rotation.z = (delta * 10)  * (Math.PI / 500);
//     //     // modelRef.current.rotation.z = \
//     //     console.group()
//     //     // console.log(delta);
//     //     console.log(state);
//     //     console.groupEnd();
//     // })

//     // useGSAP(
//     //     () => {
//     //         const tl = gsap.timeline({repeat: -1})
//     //         tl.to(
//     //             modelRef.current?.rotation,
//     //             {
//     //                 z: (Math.PI / 100),
//     //                 duration: 5,
//     //                 repeat: 1,
//     //                 // repeatDelay: .3,
//     //                 yoyo: 1,
//     //                 ease: 'power1.inOut',
//     //                 delay: props.delay
//     //             }
//     //         )
//     //     }
//     // , {scope: modelRef})

//     // <Palm position={[-w * .75, -h/1.2, -2]} } />
//     // <Palm position={[w * .75, -h/1.2, -2]} scale={[.6, .6, .6]} rotation={[0, 3, 0]} />

//     return (
//         <group {...props} ref={modelRef} dispose={null} toneMapped={false}>
//             {/* <pointLight position={[props.position[0] - 2, 12, 6]} intensity={50} color="#3063B0" ref={lightref} /> */}
//             {/* <pointLight position={[props.position[0] + 1, 5, 5]} intensity={50} color="#F33F81" ref={lightref2} /> */}
//             <group >
//                 <group rotation={[-Math.PI / 2, 0, 0]}>
//                     <group rotation={[Math.PI / 2, 0, 0]}>
//                         <group >
//                             <group >
//                                 <group>
//                                     <primitive object={nodes._rootJoint} />
//                                     <mesh geometry={nodes.Object_7.geometry} material={materials.CocosNucifera_Material} skeleton={nodes.Object_7.skeleton} toneMapped={false}/>
//                                     <Glitch
//                                         delay={[0.5, 1.5]}
//                                         duration={[0.8, 1.0]}
//                                         strength={[0.02, 0.02]}
//                                         mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
//                                         active // toggle on/off
//                                         ratio={0.01}
//                                     />
//                                 </group>
//                             </group>
//                         </group>
//                     </group>
//                 </group>
//             </group>
//         </group>
//     )
// }

// <group ref={modelRef} {...props} dispose={null} toneMapped={false}>
//             {/* <pointLight position={[3, 12, 6]} intensity={50} color="#3063B0" ref={lightref} /> */}
//             <pointLight position={[6, 5, 5]} intensity={50} color="#F33F81" ref={lightref2} />
//             <group name="Sketchfab_Scene" >
//                 <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
//                     <group name="e5fd3b5c3495455fb87149046fe0651dfbx" rotation={[Math.PI / 2, 0, 0]}>
//                         <group name="Object_2">
//                             <group name="RootNode">
//                                 <group name="Object_4">
//                                     <primitive object={nodes._rootJoint} />
//                                     <skinnedMesh name="Object_7" geometry={nodes.Object_7.geometry} material={materials.CocosNucifera_Material} skeleton={nodes.Object_7.skeleton} toneMapped={false}/>
//                                 </group>
//                             </group>
//                         </group>
//                     </group>
//                 </group>
//             </group>
//         </group>

// const PALM_LEFT = {
//     position: [w * 0.95, -h / 1.2, -2],
//     rotation: [0, 3, 0],
// };

// const PALM_RIGHT = {
//     position: [w * 0.95, -h / 1.2, -2],
//     rotation: [0, 3, 0],
// };

const getPalmProps = (isSmallScreen, yDeg, w, h) => {
    if (isSmallScreen)
        return {
            position: [w * 1, -h * 1, -2],
            rotation: [-Math.PI / 12, yDeg + Math.PI, -Math.PI / 10],
            scale: 0.7,
        };

    return {
        position: [w * 1.4, -h * 3, -2],
        rotation: [-Math.PI / 12, yDeg + Math.PI, -Math.PI / 15],
        scale: 1.8,
    };
};

export const Palms = () => {
    const {height: h, width: w} = useThree((state) => state.viewport);
    const isSmallScreen = useMediaStore((state) => state.isSmallScreen);
    const palmOneProps = getPalmProps(isSmallScreen, 0, w, h);
    const palmTwoProps = getPalmProps(isSmallScreen, -Math.PI, -w, h);

    return (
        <group>
            <Palm
                delay={0.25}
                // position={[w * 0.95, -h / 1.2, -2]}
                // rotation={[0, Math.PI, 0]}
                {...palmOneProps}
            />
            <pointLight
                position={[w * 0.7, -h / 1.2, 0]}
                intensity={50}
                color="#F4669A"
            />
            <Palm
                // position={[-w * 0.95, -h / 1.2, -2]}
                // rotation={[0, 0, 0]}
                scale={0.8}
                {...palmTwoProps}
            />
            <pointLight
                position={[-w * 0.7, -h / 1.2, 1]}
                intensity={50}
                color="#F4669A"
            />
            <pointLight
                position={[0, h * 1, -6]}
                intensity={80}
                color="#3063B0"
            />
            {/*           
            <EffectComposer>
                    <Glitch
                        delay={[0.5, 1.5]}
                        duration={[0.8, 1.0]}
                        strength={[0.02, 0.02]}
                        mode={GlitchMode.SPORADIC} // try CONSTANT_MILD
                        active // toggle on/off
                        ratio={0.01}
                    />
            </EffectComposer> */}
        </group>
    );
};
