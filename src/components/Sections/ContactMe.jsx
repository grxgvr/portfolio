import {useRandomFact} from "../../hooks/useRandomFact";
import {resources} from "../../utils/resources";
import {LinkedInIcon} from "../Icons/LinkedInIcon";
import {MailIcon} from "../Icons/MailIcon";
import {TelegramIcon} from "../Icons/TelegramIcon";
import {Button} from "../UI/Button";
import {WorkCard} from "../UI/Card";
import {ImageWrapper} from "../UI/Image";
import {Pill} from "../UI/Pill";
import {Section} from "../UI/Section";

export const ContactMe = ({setIsCatVisible}) => {
    return (
        // <Section title="Work experience" id="section__2" className="mr-[35%]">
        // <Section title="Contact me" id="section__3" className="absolute top-[350svh] mr-[35%]">
        <Section title="Contact me" id={3} className="mx-0 xl:mx-[10%]">
            {/* <div className="section__child flex flex-col gap-4">
                <WorkCard/>
                <WorkCard/>
            </div> */}
            <div className="text-[36px] flex flex-col gap-3">
                <div className="flex items-center gap-x-2 fill-base-white-700  hover:translate-x-1 transition-transform hover:fill-base-white-800 hover:text-base-white-800 ">
                    <MailIcon width={40} height={40} className="pt-[6px]" />
                    <a
                        href="mailto:grxgvr@gmail.com"
                        aria-label="Say hello via email"
                        target="_blank"
                    >
                        grxgvr@gmail.com
                    </a>
                </div>
                <div className="flex items-center gap-x-2 fill-base-white-700  hover:translate-x-1 transition-transform hover:fill-base-white-800 hover:text-base-white-800 ">
                    <TelegramIcon width={40} height={40} className="pt-[6px]" />
                    <a
                        href="https://t.me/ggrxgvr"
                        aria-label="Say hello via telegram"
                        target="_blank"
                    >
                        @ggrxgvr
                    </a>
                </div>
                <div className="flex items-center gap-x-2 fill-base-white-700 hover:translate-x-1 hover:fill-base-white-800 hover:text-base-white-800 transition-transform ">
                    <LinkedInIcon width={40} height={40} className="pt-[6px]" />
                    <a
                        href="https://linkedin.com/in/nikita-semenov-"
                        aria-label="Say hello via LinkedIn"
                        target="_blank"
                    >
                        nikita-semenov-
                    </a>
                </div>
            </div>
            <div
                id="contactMe__cyberspace"
                className="mt-8 text-xl text-base-white-600"
            >
                ...or scroll down to enter <span>cyberspace</span>
            </div>
            <div
                id="contactMe__cat"
                className="mt-8 text-base text-base-white-600"
            >
                ......or even&nbsp;
                <Button onClick={() => setIsCatVisible(true)} text="destroy" />
                &nbsp;this site with my cat Monica, if you are into that
            </div>
        </Section>
    );
};
