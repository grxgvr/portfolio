import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useSplitText = (className) => {
    const ref = useRef(null);
    
    // useGSAP(
    //     () => {
            gsap.to(className, {
                y: 0,
                stagger: 3,
                delay: 3
            })
    //     }
    // )

    useLayoutEffect(
        () => {

        }
    , [])

    return ref;
}