import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

export const useCursor = () => {
    const cursorRef = useRef(null);
    const {contextSafe} = useGSAP({scope: cursorRef});
    const onMouseMove = contextSafe((event) => {
        gsap.to(
        cursorRef.current, {
            x: event.clientX ,
            y: event.clientY,
            duration: .5
        },
    )})

    return {
        cursorRef,
        cursorCb:  () => window.addEventListener('mousemove', onMouseMove),
    }
}