import {useEffect, useLayoutEffect, useMemo, useRef, useState} from "react";
import {useFrame, useThree} from "@react-three/fiber";
import {
    CameraControls,
    Environment,
    GradientTexture,
    Html,
    Lightformer,
    MeshPortalMaterial,
    OrbitControls,
    RandomizedLight,
    RoundedBox,
    Sky,
    SpotLight,
    Stars,
    Text,
    useAnimations,
    useGLTF,
    useIntersect,
    useScroll,
    useTexture,
} from "@react-three/drei";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {PointLight, RectAreaLight} from "three";
import * as THREE from "three";
import {Triangle} from "./Triangle";
import {Retro4} from "./Retro4";
import {Delorean} from "./Delorian";
import {CyberSpace} from "../CyberSpace";

function Controls({
    zoom,
    focus,
    pos = new THREE.Vector3(),
    look = new THREE.Vector3(),
}) {
    const camera = useThree((state) => state.camera);
    const gl = useThree((state) => state.gl);
    const controls = useMemo(
        () => new CameraControls(camera, gl.domElement),
        [],
    );
    return useFrame((state, delta) => {
        zoom ? pos.set(focus.x, focus.y, focus.z + 0.2) : pos.set(0, 0, 5);
        zoom ? look.set(focus.x, focus.y, focus.z - 0.2) : look.set(0, 0, 4);

        state.camera.position.lerp(pos, 0.5);
        state.camera.updateProjectionMatrix();

        controls.setLookAt(
            state.camera.position.x,
            state.camera.position.y,
            state.camera.position.z,
            look.x,
            look.y,
            look.z,
            true,
        );
        return controls.update(delta);
    });
}

export const Pc = (props) => {
    const {nodes, materials} = useGLTF("./models/pc3.gltf", true);

    const lightref = useRef();
    // const isIntersecting = useRef(false);
    const [isIntersecting, setIsIntersecting] = useState(false);
    const frameRef = useRef();
    const portalRef = useRef();

    const ref = useIntersect((visible) => {
        // console.log(visible);
        setIsIntersecting(visible);
        // isIntersecting.current = visible;
    });
    const lightref2 = useRef();
    const roadRef = useRef();
    const starsRef = useRef();
    // const scroll = useScroll()
    // window.road = roadRef;
    const {height: h, width: w} = useThree((state) => state.viewport);
    const {camera, controls} = useThree();
    const [zoom, setZoom] = useState(false);
    const [focus, setFocus] = useState({});
    // const [blend, setBlend] = useState(0)

    const FRAME_POS = [6, 60, 19.35];
    // const {position} = props.modelRef?.current ?? {};
    // const position = new THREE.Vector3(6, 60, 19.35), focus = new THREE.Vector3(0, 0, 0)
    // const onClick = (e) => {
    //     console.log("click");
    //     setFocus(
    //         zoom ? new THREE.Vector3(0, 0, 0) : new THREE.Vector3(6, 60, 19.35),
    //     );
    //     setZoom(!zoom);
    //     // controls?.setLookAt(...position.toArray(), ...focus.toArray(), true);
    // };

    // useFrame(() => {
    //     if (window.lenis.scroll / window.lenis.limit > 0.95) {
    //     // if (scroll.offset > 0.95) {
    //         setBlend(1);
    //         // portalRef.current.blend = 1;
    //         // portalRef.current.blend = THREE.MathUtils.lerp(portalRef.current.blend, 1, .2)
    //     } else {
    //         setBlend(0);
    //         // portalRef.current.blend = 0;
    //         // portalRef.current.blend = THREE.MathUtils.lerp(portalRef.current.blend, 0, .2)
    //     }
    //     console.log(!!blend)
    // })

    return (
        // <group {...props} dispose={null} ref={props.modelRef} position={[21, -7.8, 2.8]} rotation={[0, -1, 0]}>
        <group
            {...props}
            dispose={null}
            ref={props.modelRef}
            onClick={props.onClick}
        >
            {/* <RectAreaLight /> */}
            <pointLight
                position={[0, 1, 1]}
                intensity={50}
                color="#3063B0"
                ref={lightref}
            />
            <pointLight
                position={[0, -1, 1]}
                intensity={50}
                color="#F33F81"
                ref={lightref2}
            />
            <group rotation={[-Math.PI / 2, 0, 0]} scale={0.733}>
                <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
                    <mesh
                        ref={ref}
                        geometry={nodes["et_09_-_Default_0"].geometry}
                        material={materials["09_-_Default"]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <mesh
                        geometry={nodes["Object_08_-_Default_0"].geometry}
                        material={materials["08_-_Default"]}
                        rotation={[-Math.PI / 2, 0, 0]}
                    />
                    <RoundedBox
                        ref={frameRef}
                        args={[50, 50, 0.2]}
                        position={FRAME_POS}
                        rotation={[-0.175, 0, 0]}
                    >
                        <MeshPortalMaterial side={THREE.DoubleSide}>
                            <CyberSpace animate={props.animate} />
                        </MeshPortalMaterial>
                    </RoundedBox>
                </group>
            </group>
            <Triangle
                scale={0.9}
                position={[0.1, 0.1, -0.1]}
                rotation={[-0.5, 0.1, -0.4]}
                animate={!props.animate}
            />
        </group>
    );
};

useGLTF.preload("/models/pc3.gltf");
