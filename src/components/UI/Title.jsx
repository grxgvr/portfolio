import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";

export const Title = ({children, id, className = "", size}) => {
    const classes = `m-w-fit whitespace-nowrap text-base-pink font-[Streamster] drop-shadow-[0_2px_8px_rgba(242,64,129,0.3)] ${className}`;

    switch (size) {
        case 1:
            return (
                <h1 id={id} className={`${classes}`}>
                    {children}
                </h1>
            );
        case 2:
            return (
                <h2
                    id={id}
                    className={`text-5xl sm:text-6xl md:text-8xl lg:text-8xl ${classes}`}
                >
                    {children}
                </h2>
            );
        case 3:
            return (
                <h3
                    id={id}
                    className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl  ${classes}`}
                >
                    {children}
                </h3>
            );
    }
};
