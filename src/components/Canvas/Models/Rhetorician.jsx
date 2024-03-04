import {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {
    OrbitControls,
    RoundedBox,
    useAnimations,
    useCursor,
    useGLTF,
    useScroll,
} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import gsap from "gsap";
import * as THREE from "three";
import {
    Bloom,
    EffectComposer,
    Select,
    Selection,
} from "@react-three/postprocessing";
import {Triangle} from "./Triangle";

export const Rhetorician = (props) => {
    const {nodes, materials} = useGLTF("models/rhetorician3.gltf", true);
    // const {actions, mixer} = useAnimations(animations, props.modelRef);
    // window.rhet = props.modelRef;
    const {height: h, width: w} = useThree((state) => state.viewport);
    const [hovered, hover] = useState(false);
    useCursor(hovered);

    return (
        <group {...props} dispose={null} ref={props.groupRef}>
            <group
                name="Sketchfab_Scene"
                ref={props.modelRef}
                onClick={props.onClick}
                onPointerOver={(e) => {
                    e.stopPropagation();
                    hover(true);
                }}
                onPointerOut={(e) => {
                    e.stopPropagation();
                    hover(false);
                }}
            >
                <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]}>
                    <group name="Root">
                        <group
                            name="mentor_roman_retopo"
                            position={[-0.266, 0.12, 1.326]}
                        >
                            <mesh
                                name="mentor_roman_retopo_0"
                                geometry={nodes.mentor_roman_retopo_0.geometry}
                                material={materials.Stone}
                            />
                        </group>
                        <group
                            name="Empty"
                            position={[0.161, -0.17, 4.808]}
                            rotation={[-0.104, 0.099, 0.002]}
                            scale={0.892}
                        >
                            <group name="nimbus002">
                                <mesh
                                    name="nimbus002_0"
                                    geometry={nodes.nimbus002_0.geometry}
                                    material={materials.Crown}
                                />
                            </group>
                            <group name="nimbus001">
                                <mesh
                                    name="nimbus001_0"
                                    geometry={nodes.nimbus001_0.geometry}
                                    material={materials.Crown}
                                />
                            </group>
                            <group name="nimbus003">
                                <mesh
                                    name="nimbus003_0"
                                    geometry={nodes.nimbus003_0.geometry}
                                    material={materials.Crown}
                                />
                            </group>
                        </group>
                    </group>
                </group>
            </group>
            <Triangle
                scale={3.7}
                position={[0, 2.3, 0]}
                rotation={[-0.6, -0.3, -0.4]}
                animate={props.animate}
            />
        </group>
    );
};

useGLTF.preload("models/rhetorician3.gltf");
