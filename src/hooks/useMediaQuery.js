import {useLayoutEffect} from "react";
export const useMediaQuery = (query, cb) => {
    useLayoutEffect(() => {
        const watch = window.matchMedia(query);
        const onChange = () => {
            cb(!!watch.matches);
        };
        onChange();
        watch.addEventListener("change", onChange);

        return () => watch.removeEventListener("change", onChange);
    }, []);
};
