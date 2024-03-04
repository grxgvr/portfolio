import React from "react";
import {FooterLink} from "./FooterLink";

export const FooterTech = () => (
    <div id="footerTech">
        Built using&nbsp;
        <FooterLink href="https://react.dev/" text="React" />
        ,&nbsp;
        <FooterLink
            href="https://docs.pmnd.rs/react-three-fiber"
            text="React Three Fiber"
        />
        ,&nbsp;
        <FooterLink href="https://github.com/pmndrs/drei#readme" text="Drei" />
        ,&nbsp;
        <FooterLink
            href="https://docs.pmnd.rs/react-postprocessing"
            text="Postprocessing"
        />
        ,&nbsp;
        <FooterLink href="https://tailwindcss.com" text="Tailwind" />
        ,&nbsp;
        <FooterLink
            href="https://github.com/studio-freight/lenis"
            text="Lenis"
        />
        &nbsp;and&nbsp;
        <FooterLink href="https://gsap.com" text="GSAP" />
    </div>
);
