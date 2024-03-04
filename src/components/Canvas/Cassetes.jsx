import {useThree} from "@react-three/fiber";
import {useRef, useState} from "react";
import {Cassette} from "./Models/Cassette";
import {Triangle} from "./Models/Triangle";
import {Html, MeshPortalMaterial, Stars, Text} from "@react-three/drei";
import {Title} from "../UI/Title";
import * as THREE from "three";

const getScale = (w) => {
    if (w < 8) return 0.6;
    if (w < 11) return 1;

    return 1.3;
};

const getFirstPos = (w, h) => {
    if (w < 6) return [0, -3, 0];

    return [-w / 4, h, 0];
};

const getSecondPos = (w, h) => {
    if (w < 6) return [0, 3, 0];

    return [w / 4, h, 0];
};

export const Cassetes = (props) => {
    const cassetePyrusRef = useRef();
    const casseteHostRef = useRef();
    const {height: h, width: w} = useThree((state) => state.viewport);
    // console.log(h);

    const DEFAULT_CASSETE_POS = [-w / 4, 0, 0];
    // : getFirstPos(w, h);
    const DEFAULT_CASSETE_POS2 = [w / 4, 0, 0];
    // : getSecondPos(w, h);

    const [selectedCassete, setSelectedCassete] = useState("");
    const onClick = (name) => {
        if (selectedCassete === name) setSelectedCassete("");
        else setSelectedCassete(name);
    };
    const scale = getScale(w);

    return (
        <group position={props.position} ref={props.groupRef}>
            {/* <Html position={[0, 0, 0]} color="#1c1c1c" fontSize={2} center wrapperClass="canvas__title" rotation={[0, 0, 0]}> */}
            {/* <Text position={[0, 1.2, 1]} font="fonts/Streamster.ttf" color="#3AB795" fontSize={1.2} rotation={[0, 0, 0]} characters="workexpinc">
                Work experience
            </Text> */}

            <Cassette
                name="Pyrus"
                period="Nov 2021 - present"
                position={DEFAULT_CASSETE_POS}
                delta={0.05}
                scale={scale}
                desc="Development of a low-code BPM system 
                being part of integration team"
                skills="*React   *MobX   *TypeScript   *Jest   *Less   *SQL"
                link="https://pyrus.com →"
                href="https://pyrus.com/en"
                modelRef={cassetePyrusRef}
                animate={props.animate}
                isSelected={selectedCassete === "Pyrus"}
                onClick={onClick}
            />
            <Cassette
                name="HOST"
                period="May 2020 - Nov 2021"
                position={DEFAULT_CASSETE_POS2}
                delta={0.1}
                scale={scale}
                modelRef={casseteHostRef}
                isSelected={selectedCassete === "HOST"}
                desc='Development of a telemedicine consultation system "MEDVED" 
                as a Fullstack developer'
                skills="*React   *Redux   *Node.js   *MongoDB   *Express"
                link="https://mis-region.ru →"
                href="https://mis-region.ru/resheniya/zdravookhranenie/medved-telemed2/"
                animate={props.animate}
                onClick={onClick}
            />
            {/* <Triangle scale={5.4} position={[.1, -3, -1]} rotation={[0, .1, 0]}/> */}
            <Triangle
                scale={5.4}
                position={[0.1, -3, -1]}
                rotation={[0, 0.1, 0]}
                animate={true}
            />
        </group>
    );
};
