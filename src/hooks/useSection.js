import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useLayoutEffect, useRef } from 'react';

export const useHeader = () => {
    const headerRef  = useRef(null);
    const meRef = useRef(null);
    const whoIsMe = ["a Frontend Developer", "a Frontend Engineer", "a Fullstack Developer", "a digital nomad", "an amateur surfer", "a beloved husband", "a craft beer enthusiast", "a hardcore gamer" ]

    useGSAP(() => {
        const masterTl = gsap.timeline({repeat: -1}).play();
        whoIsMe.forEach((word) => {
            const tl = gsap.timeline({repeat: 1, repeatDelay: 2, yoyo: true});
            tl.to(meRef.current, {duration: 1.5, text: word});
            masterTl.add(tl);
        });
    }, {scope: headerRef});

    useLayoutEffect(
        () => {
           
        }
    )
    


    return {
        meRef,
        headerRef
    };
}