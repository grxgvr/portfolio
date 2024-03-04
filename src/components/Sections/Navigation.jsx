import {useLayoutEffect, useState} from "react";
import {useLenisStore} from "../../stores/useLenisStore";
import {NavigationItem} from "../UI/NavigationItem";

export const Navigation = ({}) => {
    // const progress = useLenisStore((state) => state.lenis.progress);
    // const lenis = useLenisStore((state) => state.lenis);
    // const isSideNav = useLenisStore((state) => state.isSideNav);
    // const [isSide, setIsSide] = useState(false);

    // useLayoutEffect(() => {
    //     if (progress > 0.2) setIsSide(true);
    //     else setIsSide(false);
    // }, [progress]);

    // console.log("render nav");

    // if (isSideNav)
    //     return (
    //         <>
    //             <nav
    //                 id="navigation"
    //                 className="bottom-0 right-0 fixed pointer-events-auto gap-4 rotate-270 z-50"
    //             >
    //                 <ul className="list-none flex-row-reverse flex w-[100svh] justify-between bottom-0 left-0 absolute">
    //                     <NavigationItem id={0} text="Start" hash="#" isSide />
    //                     <NavigationItem
    //                         id={1}
    //                         text="About"
    //                         hash="#about"
    //                         isSide
    //                     />
    //                     <NavigationItem
    //                         id={2}
    //                         text="Work"
    //                         hash="#work"
    //                         isSide
    //                     />
    //                     <NavigationItem
    //                         id={3}
    //                         text="Contact"
    //                         hash="#contacts"
    //                         isSide
    //                     />
    //                     <NavigationItem
    //                         id={4}
    //                         text="Credits"
    //                         hash="#credits"
    //                         isSide
    //                     />
    //                 </ul>
    //             </nav>
    //         </>
    //     );

    return (
        <nav
            id="navigation"
            className="absolute top-12 left-0 right-0 pointer-events-auto w-fit mx-auto"
        >
            <ul className="list-none flex gap-4 lg:gap-24">
                <NavigationItem id={1} text="About Me" hash="#about" />
                <NavigationItem id={2} text="Work experience" hash="#work" />
                <NavigationItem id={3} text="Contact me" hash="#contacts" />
            </ul>
        </nav>
    );
};
