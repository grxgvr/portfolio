import {
    Suspense,
    createContext,
    useEffect,
    useLayoutEffect,
    useRef,
    useState,
} from "react";
// import useGSAP from "gsap";
// import { useLenis } from './hooks/useLenis';
import {Header} from "./components/Sections/Header";
import {Navigation} from "./components/Sections/Navigation";
import {Layout} from "./components/Layout";
import {AnimatedBlob} from "./components/UI/Blob";
import {CanvasScene} from "./components/Canvas/Canvas";
import {useApp} from "./hooks/useApp";
import {useProgress} from "@react-three/drei";
import gsap from "gsap";
import {create} from "zustand";

import "./App.css";
import {Loader} from "./components/UI/Loader";
import {useMediaQuery} from "./hooks/useMediaQuery";
import {useMediaStore} from "./stores/useMediaStore";
import {useLenisStore} from "./stores/useLenisStore";
import {NoiseFilter} from "./components/Filter";

const hashes = new Map([
    ["start", 0],
    ["about", 1],
    ["work", 2],
    ["contacts", 3],
    ["credits", 4],
]);

export const useLoader = create((set) => ({
    isLoaded: false,
    loaded: () => set((state) => ({isLoaded: true})),
}));

const App = () => {
    const setIsSmallScreen = useMediaStore((state) => state.setIsSmallScreen);
    const setIsPrefersLessMotion = useMediaStore(
        (state) => state.setIsPrefersLessMotion,
    );
    const isSmallScreen = useMediaStore((state) => state.isSmallScreen);
    const {progress} = useApp();
    useMediaQuery("(prefers-reduced-motion: reduce)", setIsPrefersLessMotion);
    useMediaQuery("(max-width: 768px)", setIsSmallScreen);

    // console.log(isSmallScreen);

    return (
        // <main className='app h-svh w-svw bg-gradient-to-tr bg-[size:300%] from-background-main to-background-secondary animate-main-background  z-0'>
        // <div className='app min-h-svh h-full w-svw bg-background-main2 z-0  text-base-white scroll-smooth relative overflow-hidden selection:bg-base-pink selection:text-base-white'>

        <div
            id="app"
            className={`app min-h-svh w-svw text-base-white scroll-smooth relative selection:bg-base-pink selection:text-base-white overflow-hidden
            ${progress === 100 ? "h-[500svh]" : "h-svh"}`}
        >
            <div id="background" className="fixed size-full background-base" />
            <div className="size-full fixed">
                <CanvasScene />
            </div>
            {progress === 100 && <Layout />}
            <NoiseFilter />
        </div>
    );
};

export default App;
