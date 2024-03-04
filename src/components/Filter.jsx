import React from "react";

export const NoiseFilter = () => (
    <svg
        viewBox="0 0 screen_width screen_height"
        height="100%"
        width="100%"
        className="size-full z-50 fixed top-0 left-0 opacity-5 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <filter id="noiseFilter">
            <feTurbulence
                type="fractalNoise"
                baseFrequency="0.4"
                numOctaves="3"
                stitchTiles="stitch"
            />
        </filter>
        <rect
            className="size-full fixed"
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
        />
    </svg>
);
