import {useCallback, useEffect, useLayoutEffect, useRef, useState} from "react";
import {debounce, throttle} from "../utils/helperFuncs";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useProgress, useScroll} from "@react-three/drei";
import Lenis from "@studio-freight/lenis";
import {useCursor} from "./useCursor";
import TextPlugin from "gsap/TextPlugin";
// import {ScrollTrigger} from "gsap/ScrollTrigger";
import {useLenisStore} from "../stores/useLenisStore";

const hashValues = new Set([0, 1, 2, 3, 4]);

const hashes = new Map([
    ["start", 0],
    ["about", 1],
    ["work", 2],
    ["contacts", 3],
    ["credits", 4],
]);

// const lenis = new Lenis({
//     lerp: 0.05,
//     wheelMultiplier: 1,
//     autoResize: true,
// });

export const scrollById = (id) => {
    scrollToSection({id});
};

export const scrollByEvent = (event) => {
    scrollToSection({event});
};

const getIdByUrl = (url) => {
    const hash = getHashFromURL(url);
    if (!hashes.has(hash)) return -1;

    return hashes.get(hash);
};

export const scrollToSection = ({event, id}) => {
    const lenis = useLenisStore.getState().lenis;
    if (!lenis) return;

    const sectionId = id ?? getIdByUrl(event?.newURL);
    if (!hashValues.has(sectionId)) return;

    lenis.scrollTo((sectionId * lenis.limit) / 4, {duration: 0.8});
};

export const getCurrentHash = () => {
    return getHashFromURL(window.location.href);
};

export const getHashFromURL = (url = "") => {
    return url.split("#")[1];
};

export const useApp = () => {
    // const scrollOffset = useRef(0);
    // const lenis = useRef(null);
    const {progress} = useProgress();
    const setLenis = useLenisStore((state) => state.setLenis);
    const setIsSideNav = useLenisStore((state) => state.setIsSideNav);
    const isSideNav = useLenisStore((state) => state.isSideNav);

    useLayoutEffect(() => {
        gsap.registerPlugin(TextPlugin);
        // gsap.registerPlugin(ScrollTrigger);
        gsap.config({
            autoSleep: 60,
            force3D: false,
            nullTargetWarn: false,
        });
        gsap.defaults({overwrite: "auto"});
        const lenis = new Lenis({
            lerp: 0.06,
            wheelMultiplier: 1,
            autoResize: true,
        });
        lenis.on("scroll", () => {
            if (lenis.progress > 0.2) setIsSideNav(true);
            else if (lenis.progress <= 0.2) setIsSideNav(false);
        });
        // window.lenis = lenis;

        function update(time) {
            lenis?.raf?.(time * 1000);
        }

        setLenis(lenis);
        gsap.ticker.add(update);
        window.addEventListener("hashchange", scrollByEvent, false);

        // const hash = getCurrentHash();
        // console.log(hash);
        // const id = hashes.get(hash);
        // console.log(id);

        // if (hash) scrollById(id);

        return () => {
            window.removeEventListener("hashchange", scrollByEvent);
            gsap.ticker.remove(update);
            lenis.destroy?.();
        };
    }, []);

    useLayoutEffect(() => {
        if (progress !== 100) return;
        // const hash = getCurrentHash();
        // console.log(hash);
        // const id = hashes.get(hash);
        // console.log(id);

        // if (hash) scrollById(id);

        setTimeout(() => {
            const hash = getCurrentHash();
            // console.log(hash);
            const id = hashes.get(hash);
            // console.log(id);

            if (hash) scrollById(id);
        }, 300);
    }, [progress]);

    return {
        progress,
    };
};
