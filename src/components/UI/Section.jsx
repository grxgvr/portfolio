import {useGSAP} from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
import {Title} from "./Title";

export const Section = ({title, children, className, titleClassName, id}) => {
    const childRef = useRef(null);

    // useGSAP(() => {
    //   tl.from(titleRef.current, {
    //     opacity: 0, y: 100, duration: 2, autoAlpha: 0
    //   }).from(childRef.current, {
    //       opacity: 0, y: 100, duration: 2, autoAlpha: 0
    //   }).play()
    // }, {scope: sectionRef});

    // right-[100svw]
    return (
        // <section id={id} className={`items-start h-svh flex flex-col justify-start gap-12 px-20 snap-start text-3xl text-base-white-700 whitespace-pre-wrap leading-10 ${className}`}>
        <section
            id={`section_${id}`}
            // className={`box-border items-start pointer-events-auto h-svh max-h-svh justify-start sm:justify-center fixed top-0 bottom-0 left-0 right-0 flex flex-col gap-4 md:gap-6 xl:gap-8 px-8 lg:px-24 py-12 md:py-4 text-base-white-700 whitespace-pre-wrap backdrop-blur-lg rounded-none sm:rounded-3xl border-2 border-black border-opacity-5 ${className}`} //sm:backdrop-blur-none
            // className={`box-border items-start pointer-events-auto h-svh max-h-svh justify-start sm:justify-center fixed top-0 bottom-0 left-0 right-0 flex flex-col gap-4 md:gap-6 xl:gap-8 px-8 lg:px-24 py-12 md:py-4 text-base-white-700 whitespace-pre-wrap backdrop-blur-lg rounded-none sm:backdrop-blur-none ${className}`} //sm:backdrop-blur-none
            className={`box-border items-start pointer-events-auto h-svh max-h-svh justify-start sm:justify-center fixed top-0 bottom-0 left-0 right-0 flex flex-col gap-4 md:gap-6 xl:gap-8 px-8 lg:px-24 py-12 md:py-4 text-base-white-700 whitespace-pre-wrap backdrop-blur-lg rounded-none sm:backdrop-blur-none ${className}`} //sm:backdrop-blur-none
        >
            {/* <h2 className="text-6xl text-base-white-500 font-[Streamster]">{title}</h2> */}
            {/* {children && (
                <div className="size-full opacity-60 bg-black md:opacity-0 absolute top-0 left-0 blur-2 -z-10"></div>
            )} */}
            <Title
                id={`section__header_${id}`}
                size={2}
                className={titleClassName}
            >
                {title}
            </Title>
            {children && (
                <div
                    id={`section__content_${id}`}
                    className="blur-xl text-base md:text-xl xl:text-3xl lg:leading-10 h-full sm:h-min"
                >
                    {children}
                </div>
            )}
        </section>
    );
};
