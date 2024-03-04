import {useRandomFact} from "../../hooks/useRandomFact";
import {resources} from "../../utils/resources";
import {LinkedInIcon} from "../Icons/LinkedInIcon";
import {MailIcon} from "../Icons/MailIcon";
import {TelegramIcon} from "../Icons/TelegramIcon";
import {Button} from "../UI/Button";
import {WorkCard} from "../UI/Card";
import {ImageWrapper} from "../UI/Image";
import {Link} from "../UI/Link";
import {Pill} from "../UI/Pill";
import {Section} from "../UI/Section";
import night from "../../assets/sounds/night.mp3";
import {useLayoutEffect, useRef} from "react";
import {FooterTech} from "./Footer/FooterTech";
import {FooterTypeface} from "./Footer/FooterTypeface";
import {FooterModels} from "./Footer/FooterModels";
import {FooterLink} from "./Footer/FooterLink";

export const Footer = ({}) => {
    // useLayoutEffect(() => audioRef.current?.play(), [audioRef.current]);
    return (
        <footer
            id="footer"
            className="font-[PixeloidSans] mt-10 text-lg box-border flex h-fit justify-between  pointer-events-auto fixed top-0 bottom-0 left-0 right-0 gap-x-12 px-24  text-base-white-700 whitespace-pre-wrap leading-10"
        >
            <div className="basis-1/3">
                <FooterTech />
                <FooterTypeface />
                <div className="mt-10">
                    Coded by me while having&nbsp;
                    <FooterLink
                        href="https://open.spotify.com/playlist/6MbogGYDDRH9dr1VJb3DGq?si=50d33a187f494723"
                        text="this"
                    />
                    &nbsp;on repeat
                    <div>© Semenov Nikita 2024</div>
                </div>
            </div>
            <FooterModels />
        </footer>
    );
};
