import {create} from "zustand";
import Lenis from "@studio-freight/lenis";

export const useLenisStore = create((set) => ({
    lenis: null,
    isSideNav: false,
    setLenis: (lenis) => set({lenis}),
    setIsSideNav: (isSideNav) => set({isSideNav}),
}));
