import React from "react";
import {Link} from "../../UI/Link";
import {FooterLink} from "./FooterLink";

export const FooterTypeface = () => (
    <div id="footerTypeface">
        Typeface&nbsp;
        <ul className="inline-flex gap-2">
            <li>
                <FooterLink
                    href="https://www.dafont.com/streamster.font"
                    text="Streamster"
                />
            </li>
            <li>
                <FooterLink
                    href="https://www.dafont.com/pixeloid-sans.font"
                    text="PixeloidSans"
                />
            </li>
            <li>
                <FooterLink
                    href="https://www.dafont.com/weigl.font"
                    text="Weigl"
                />
            </li>
        </ul>
    </div>
);
