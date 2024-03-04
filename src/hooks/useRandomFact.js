import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';

export const useRandomFact = () => {
    const facts = ["a Frontend Developer", "a Frontend Engineer", "a Fullstack Developer", "a digital nomad", "an amateur surfer", "a beloved husband", "a craft beer enthusiast", "a hardcore gamer" ]
    const [factIdx, setFactIdx] = useState(0);

    return {
        fact: facts[factIdx],
        getFact: () => setFactIdx(factIdx + 1)
    };
}