import gsap from "gsap";
import {useSplitText} from "../../hooks/useSplitText";
import {ArrowIcon} from "../Icons/ArrowIcon";
import {useGSAP} from "@gsap/react";
import {useRef} from "react";

export const ImageWrapper = ({className = "", src}) => {
    // useSplitText(".thatsmeSplit")
    // const thatsMeRef = useRef();

    // useGSAP(() => {
    //     const text = new SplitType(thatsMeRef.current, {types: "chars"});

    //     gsap.from(
    //         text.chars, {
    //             scrollTrigger: {
    //                 trigger: ".thatsMe",
    //                 start: 'top 78%',
    //                 end: 'top 76%',
    //                 scrub: 1,
    //                 // toggleActions: 'restart none restart none',
    //             },
    //             opacity: 0,
    //             stagger: .08,
    //             x: -7,
    //         }
    //     )

    //     gsap.from(
    //         ".arrow", {
    //             scrollTrigger: {
    //                 trigger: ".thatsMe",
    //                 start: 'top 80%',
    //                 end: 'top 78%',
    //                 scrub: 1,
    //                 // toggleActions: 'play resume play resume',
    //                 // markers: true
    //             },
    //             opacity: 0,
    //             x: -20,
    //             delay: 4
    //             // x: 200
    //         }
    //     )
    // });

    const avatarAfterClass =
        "after:absolute after:top-[-10px] after:right-[-10px] after:border-solid after:border-2 after:size-full after:-z-10 after:transition-transform hover:after:translate-x-1 hover:after:-translate-y-1 after:border-base-green";

    const avatarBeforeClass =
        "before:absolute before:top-[-5px] before:right-[-5px] before:border-solid before:border-2 before:size-full before:-z-0 before:transition-transform hover:before:translate-x-1 hover:before:-translate-y-1 before:border-base-pink";
    return (
        <div
            className={`size-fit relative after:content-[' '] w-52 md:w-60 lg:w-70 ${avatarAfterClass} ${className}`}
        >
            <div className="thatsMe absolute top-0 left-[-120px] flex z-10">
                <span
                    id="thatsMe__text"
                    className="font-[Streamster] -rotate-z-6 text-4xl text-base-pink"
                >
                    That's me
                </span>
                <ArrowIcon
                    id="thatsMe__arrow"
                    width={110}
                    height={110}
                    className="arrow -rotate-45 ml-[-80px] fill-base-pink"
                />
            </div>
            <img
                className="w-80 h-auto border-solid border-2"
                src={src}
                alt="That's photo of me"
                loading="lazy"
            />
        </div>
    );
};
