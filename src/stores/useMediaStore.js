import {create} from "zustand";

export const useMediaStore = create((set) => ({
    isSmallScreen: false,
    isPrefersLessMotion: false,
    setIsSmallScreen: (value) => set((state) => ({isSmallScreen: value})),
    setIsPrefersLessMotion: (value) =>
        set((state) => ({isPrefersLessMotion: value})),
}));
