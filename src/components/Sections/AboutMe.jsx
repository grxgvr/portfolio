import {resources} from "../../utils/resources";
import {ImageWrapper} from "../UI/Image";
import {Pill} from "../UI/Pill";
import {Section} from "../UI/Section";
import surf from "../../assets/gifs/surf.gif";

import "./AboutMe.css";
import {Title} from "../UI/Title";

export const AboutMe = ({sectionRef}) => {
    const skills = [
        "React",
        "Vue",
        "Redux",
        "MobX",
        "JavaScript",
        "TypeScript",
        "Three.js",
        "r3f",
        "Jest",
        "HTML",
        "CSS",
        "Less",
        "Tailwind",
        "GSAP",
        "SQL",
        "MongoDB",
    ].map((skill) => <Pill text={skill} />);

    return (
        <Section
            title="About me"
            id={1}
            className="ml-0 xl:ml-[35%]"
            sectionRef={sectionRef}
        >
            <div className="section__child order-1 grid grid-rows-3 sm:grid-rows-2 sm:grid-cols-[5fr_2fr] md:items-start justify-end justify-items-end gap-2 md:gap-2 xl:gap-12 h-full sm:h-min">
                <p className="w-full sm:col-span-2 ">
                    {resources.aboutMe}
                    <span
                        id="aboutMe__surf"
                        className="text-base-white relative"
                    >
                        {resources.aboutMe1}
                        <img
                            id="aboutMe__surfGif"
                            className="pointer-events-none opacity-0 top-10 left-0 scale-[2] absolute delay-1000 z-10"
                            src={surf}
                        />
                    </span>
                    {resources.aboutMe2}
                </p>
                <div className="flex flex-col gap-5 justify-end rounded-lg h-fit order-3 sm:order-2 ">
                    {/* <h3
                        id="aboutMe__skillsTitle"
                        className="text-base-pink font-[Streamster] text-4xl lg:text-5xl xl:text-7xl"
                    >
                        Skills
                    </h3> */}
                    <Title size={3}>Skills</Title>
                    <div
                        id="aboutMe__skills"
                        className="flex flex-wrap gap-1 md:gap-2 xl:gap-3"
                    >
                        {skills}
                    </div>
                </div>
                <ImageWrapper
                    src="./awesomeDev.jpg"
                    className="order-2 sm:order-3 mr-4"
                />
            </div>
        </Section>
    );
};
