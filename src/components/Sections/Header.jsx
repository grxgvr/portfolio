import {useContext} from "react";
// import { AppContext } from "../../App";
import {useHeader} from "../../hooks/useHeader";
import {Title} from "../UI/Title";

export const Header = ({title, children}) => {
    // const sectionRef = useSection();
    // console.log(a);
    // const {headerRef} =
    const {meRef, nameRef, headerRef} = useHeader();
    // drop-shadow-[0_6px_2px_rgba(0,0,0,0.4)]
    return (
        <header
            id="header"
            className="absolute top-0 xl:px-40 h-svh w-full"
            ref={headerRef}
        >
            <Title
                size={1}
                className="text-base-white-600 size-full flex flex-col justify-center items-center font-[VisbyCF] drop-shadow-none"
            >
                <div className="text-base-pink dev2 font-[Midnight] text-[3.2rem] sm:text-7xl md:text-8xl lg:text-[9rem] whitespace-nowrap -rotate-z-6 lg:rotate-0 drop-shadow-[0_6px_10px_rgba(242,64,129,0.1)]">
                    Frontend
                    <br className="block lg:hidden" /> Dev
                </div>
                <span className="text-base-pink relative font-[Streamster] flex flex-col gap-0 justify-center items-center text-6xl sm:text-7xl md:text-8xl lg:text-[9rem] -mt-24 sm:-mt-14 md:-mt-10 lg:-mt-8 -rotate-z-6 drop-shadow-[0_6px_10px_rgba(242,64,129,0.2)]">
                    Nikita Semenov
                    <span className="absolute top-4 lg:top-9 scale-x-250">
                        {"{"}
                    </span>
                </span>
            </Title>
        </header>
    );
};

/* <h1 className="text-base-white-600 h-full gap-20 flex flex-col justify-center items-center text-2xl md:text-6xl lg:text-7xl">
                <span className="text-base-pink dev font-[Midnight] text-4xl md:text-9xl lg:text-[9rem] whitespace-nowrap drop-shadow-[0_6px_10px_rgba(242,64,129,0.25)]">
                    Frontend Dev
                </span>
                <span className="text-base-pink font-[Streamster] flex flex-col gap-0 justify-center items-center text-6xl md:text-7xl lg:text-[9rem] -rotate-z-12 drop-shadow-[0_6px_10px_rgba(242,64,129,0.25)]">
                    Nikita Semenov
                    <span></span>
                </span>
            </h1> */
/* <span>Hi there! My name is</span>
                <span className="text-base-pink font-[Streamster] text-6xl md:text-9xl lg:text-[10rem] py-6 md:py-8 lg:py-10 drop-shadow-[0_0_10px_rgba(242,64,129,0.5)]">
                    Nikita Semenov
                </span>
                <span>
                    I'm{" "}
                    <span className="text-base-green header-name" ref={meRef} />
                    <span className="animate-fade">_</span>
                </span> */
/* <span className="text-base-pink dev font-[Midnight] text-4xl md:text-9xl lg:text-[9rem] whitespace-nowrap drop-shadow-[0_6px_10px_rgba(242,64,129,0.25)]"> */

// (

// <h1 className="text-base-white-600 h-full flex flex-col justify-center items-center text-2xl md:text-6xl lg:text-7xl">
// <span>Hi there! My name is</span>
// {/* <span className="text-base-pink font-[Horseman] text-[10rem] py-10">Nikita Semenov</span> */}
// {/* <span className="text-base-pink font-[Thunder] text-[14rem] py-10">Nikita Semenov</span> */}
// <span className="text-base-pink font-[Streamster] text-6xl md:text-9xl lg:text-[10rem] py-6 md:py-8 lg:py-10">
//     Nikita Semenov
// </span>
// {/* <span className="text-base-pink font-[Midnight] text-[10rem] py-10">Nikita Semenov</span> */}
// {/* <span className="text-base-pink font-[Overdrive] text-[10rem] py-10">Nikita Semenov</span> */}
// {/* <span className="text-base-pink font-[Laser] text-9xl py-10">Nikita Semenov</span> */}
// <span>
//     I'm{" "}
//     <span className="text-base-green header-name" ref={meRef} />
//     <span className="animate-fade">_</span>
// </span>
// </h1>
// )
