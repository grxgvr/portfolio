import React from "react";
import {Link} from "../../UI/Link";
import {FooterLink} from "./FooterLink";

export const FooterModels = () => (
    <div id="footerModels" className="row-span-2 text-right basis-1/3">
        All 3D models are from&nbsp;
        <Link
            className="text-base-green hover:underline"
            href="https://sketchfab.com"
            text="Sketchfab"
        />
        , slightly modified by me using Blender. Credits to authors of these
        amazing models
        <ul>
            <li>
                <FooterLink
                    href="https://sketchfab.com/3d-models/rhetorician-a89f035291d843069d73988cc0e25399"
                    text="Rhetorician"
                />
                <span> by </span>
                <FooterLink
                    href="https://sketchfab.com/engine9"
                    text="engine9"
                />
            </li>
            <li>
                <FooterLink
                    href="https://sketchfab.com/3d-models/cassette-tape-21e23f5fe0714a98a1b76b4f6ae4eb9c"
                    text="Cassette Tape"
                />
                <span> by </span>
                <FooterLink
                    href="https://sketchfab.com/virgodmonkey"
                    text="virgodmonkey"
                />
            </li>
            <li>
                <FooterLink
                    href="https://sketchfab.com/3d-models/delorean-time-machine-low-poly-a36c5afa1bb24e16a3adfbcf08eb9390"
                    text="Delorean"
                />
                <span> by </span>
                <FooterLink
                    href="https://sketchfab.com/JellyFighter"
                    text="JellyFighter"
                />
            </li>
            <li>
                <FooterLink
                    href="https://sketchfab.com/3d-models/vaporwave-sunset-0854e60de36241ce9514b40d05a30581"
                    text="Vaporwave Sunset"
                />
                <span> by </span>
                <FooterLink
                    href="https://sketchfab.com/wilemben"
                    text="wilemben"
                />
            </li>
        </ul>
    </div>
);
