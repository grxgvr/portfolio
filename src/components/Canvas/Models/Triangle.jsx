import {OrbitControls} from "@react-three/drei";
import {useFrame} from "@react-three/fiber";
import {
    Bloom,
    EffectComposer,
    Select,
    Selection,
} from "@react-three/postprocessing";
import {useMemo, useRef} from "react";
import * as THREE from "three";

export const Triangle = (props) => {
    useFrame((_, delta) => {
        if (!props.animate || !triangleRef.current) return;

        triangleRef.current.rotation.z += delta * 0.05;
    });

    const triangleRef = useRef();
    window.triangle = triangleRef;

    // const color = new THREE.Color("#FFF")
    const color = new THREE.Color(props.color ?? "#F24081");
    color.multiplyScalar(1.8);

    return (
        <mesh ref={triangleRef} {...props}>
            <ringGeometry args={[props.strokeWidth ?? 0.9, 1.05, 3, 1]} />
            <meshPhysicalMaterial
                toneMapped={true}
                emissiveIntensity={props.emissive ?? 2.7}
                attach="material"
                emissive={color}
                color={props.color ?? "#F24081"}
                side={THREE.DoubleSide}
                wireframeLinewidth={props.wireframeLinewidth ?? 200}
            />
            {props.children}
        </mesh>
    );
};
