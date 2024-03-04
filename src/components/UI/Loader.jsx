import {Html, useProgress} from "@react-three/drei";
import {createContext, useEffect, useRef} from "react";
import {Triangle} from "../Canvas/Models/Triangle";
import {useLoader} from "../../App";
import palm from "../../assets/images/palm.png";

export const LoaderContext = createContext();

export const Loader = () => {
    const {progress} = useProgress();
    const loaded = useLoader((state) => state.loaded);
    // console.log(progress);
    const loader = useRef();
    window.loader = loader.current;
    // useEffect(() => {
    //     if (progress === 100) loaded();
    // }, [progress]);
    return (
        <Html
            center
            className="h-svh w-svw overflow-hidden fixed top-0 background-base after:top-0"
            ref={loader}
        >
            {/* <div className="overflow-x-clip">
                <img
                    src={palm}
                    alt="palm"
                    className="h-svh scale-y-110 scale-x-90 fixed -right-[15svw] -bottom-[5svh] -rotate-12 transform-[rotateY(20deg)]"
                />
                <img
                    src={palm}
                    alt="palm"
                    className="h-svh scale-y-110 scale-x-90 fixed -left-[15svw] -bottom-[5svh] -rotate-12 transform-[rotateY(20deg)]"
                />
            </div> */}
            <div className="text-9xl fixed size-full z-50 flex flex-col gap-12 justify-center items-center font-[Streamster] text-base-green">
                <span>Loading</span>
                <progress
                    className="loader cursor-progress"
                    value={progress || 100}
                    max={100}
                />
            </div>
        </Html>
    );
};
