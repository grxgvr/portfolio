/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 delorian.gltf 
Author: Meloque (https://sketchfab.com/jellyraincoat)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/delorean-time-machine-low-poly-a36c5afa1bb24e16a3adfbcf08eb9390
Title: Delorean - time machine - low poly
*/

import React, {useRef} from "react";
import {useGLTF} from "@react-three/drei";
import {useFrame, useThree} from "@react-three/fiber";
import * as THREE from "three";

export function Delorean(props) {
    const {nodes, materials} = useGLTF("models/delorian.gltf");
    const delorean = useRef();
    const wheels = useRef();
    const wheels2 = useRef();
    window.delorean = delorean;
    const {height: h, width: w} = useThree((state) => state.viewport);
    // const mutation = useStore((state) => state.mutation);

    // const {clock, mouse, ray} = mutation;
    useFrame((state) => {
        if (!props.animate || !delorean.current) return;
        const t = state.clock.getElapsedTime();
        if (!state.pointer.x) return;

        const max = props.position[0] + 20;
        const min = props.position[0] - 20;
        const next = delorean.current.position.x + state.pointer.x * 2;
        if (next > max || next < min) return;

        // if (delorean.current.position.x <= props.position[0]/3 || delorean.current.position.x >= props.position[0]/3)
        //   return

        delorean.current.position.x = THREE.MathUtils.lerp(
            delorean.current.position.x,
            next,
            0.1,
        );
        // const x = props.position.x - window.innerWidth / 2;
        // delorean.current.position.x += (x - delorean.current.position.x) * 0.2;
        // console.group(delorean.current.position.x);
        // console.log(state.pointer.x);
        // console.log(w);
        // console.groupEnd();
    });
    return (
        <group {...props} dispose={null} ref={delorean}>
            {/* <pointLight color="white" intensity={2000} position={[2, 4, 2]}/> */}
            <group position={[0.174, 0.121, 0]} rotation={[-Math.PI / 2, 0, 0]}>
                <group rotation={[Math.PI / 2, 0, 0]}>
                    <group position={[1.538, 2.993, -12.239]} scale={0.816}>
                        <mesh
                            geometry={nodes.Object_20.geometry}
                            material={materials.mr_fusion}
                        />
                        <mesh
                            geometry={nodes.Object_21.geometry}
                            material={materials.mr_fusion_2}
                        />
                        <mesh
                            geometry={nodes.Object_22.geometry}
                            material={materials.mr_fusion_3}
                        />
                    </group>
                    <group
                        position={[-5.118, 2.373, -12.225]}
                        rotation={[2.666, -0.141, 0.267]}
                    >
                        {/* <pointLight color="white" intensity={2000}/> */}
                        <mesh
                            geometry={nodes.Object_24.geometry}
                            material={materials.front_part}
                        />
                        <mesh
                            geometry={nodes.Object_25.geometry}
                            material={materials.front_part_2}
                        />
                    </group>
                    <mesh
                        geometry={nodes.Object_4.geometry}
                        material={materials.delorean}
                    />
                    <mesh
                        geometry={nodes.Object_5.geometry}
                        material={materials.window}
                    />
                    <mesh
                        geometry={nodes.Object_6.geometry}
                        material={materials.windshield}
                    />
                    <mesh
                        geometry={nodes.Object_7.geometry}
                        material={materials.sides}
                    />
                    <mesh
                        geometry={nodes.Object_8.geometry}
                        material={materials.wheels}
                        ref={wheels}
                    />
                    <mesh
                        geometry={nodes.Object_9.geometry}
                        material={materials.wheels_2}
                        ref={wheels2}
                    />
                    <mesh
                        geometry={nodes.Object_10.geometry}
                        material={materials.cooler}
                    />
                    <mesh
                        geometry={nodes.Object_11.geometry}
                        material={materials.metal_parts}
                    />
                    <mesh
                        geometry={nodes.Object_12.geometry}
                        material={materials.buttons}
                    />
                    <mesh
                        geometry={nodes.Object_13.geometry}
                        material={materials.buttons_2}
                    />
                    <mesh
                        geometry={nodes.Object_14.geometry}
                        material={materials.board}
                    />
                    <mesh
                        geometry={nodes.Object_15.geometry}
                        material={materials.circuits}
                    />
                    <mesh
                        geometry={nodes.Object_16.geometry}
                        material={materials.circuits_2}
                    />
                    <mesh
                        geometry={nodes.Object_17.geometry}
                        material={materials.time_circuits}
                    />
                    <mesh
                        geometry={nodes.Object_18.geometry}
                        material={materials.back_part}
                    />
                    <mesh
                        geometry={nodes.Object_27.geometry}
                        material={materials.cables}
                        position={[1.629, 2.909, -11.119]}
                    />
                    <mesh
                        geometry={nodes.Object_29.geometry}
                        material={materials.cables}
                        position={[-2.012, 2.15, -10.438]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={2.174}
                    />
                    <mesh
                        geometry={nodes.Object_31.geometry}
                        material={materials.cables}
                        position={[1.118, 2.928, -11.955]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                    />
                    <mesh
                        geometry={nodes.Object_33.geometry}
                        material={materials.cables}
                        position={[-2.012, 2.15, -13.869]}
                        rotation={[Math.PI / 2, 0, 0]}
                        scale={2.174}
                    />
                    <mesh
                        geometry={nodes.Object_35.geometry}
                        material={materials.cables}
                        position={[1.13, 2.909, -13.196]}
                        rotation={[-Math.PI, 0, -Math.PI]}
                    />
                    <mesh
                        geometry={nodes.Object_37.geometry}
                        material={materials.cables}
                        position={[1.636, 2.909, -13.196]}
                    />
                </group>
            </group>
        </group>
    );
}

useGLTF.preload("models/delorian.gltf");
