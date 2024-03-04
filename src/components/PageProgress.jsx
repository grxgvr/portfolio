import React from "react";
import {useLenisStore} from "../stores/useLenisStore";

export const PageProgress = () => {
    const progress = useLenisStore(
        (state) => state.lenis.scroll / state.lenis.limit,
    );
    return (
        <div
            // className="fixed left-0 top-0 bg-base-pink progress h-[1px] w-[1svw] origin-left"
            className="fixed left-[-100svw] top-0 bg-base-pink progress h-[1px] w-[100svw] origin-left z-20"
            style={{
                // transform: `scaleX(${(progress || 0) * 100})`,
                transform: `translateX(${progress * 100}%)`,
            }}
        />
    );
};
