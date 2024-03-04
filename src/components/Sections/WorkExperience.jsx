import {useRandomFact} from "../../hooks/useRandomFact";
import {resources} from "../../utils/resources";
import {Button} from "../UI/Button";
import {WorkCard} from "../UI/Card";
import {ImageWrapper} from "../UI/Image";
import {Pill} from "../UI/Pill";
import {Section} from "../UI/Section";

export const WorkExperience = ({}) => {
    return (
        <Section
            title="Work experience"
            id={2}
            className="items-center backdrop-blur-none"
            titleClassName="absolute top-10"
        >
            <div className="scale-0 h-0 opacity-0 pointer-events-none">
                <p>
                    Company Name: Pyrus. Period: November 2021 - present.
                    Development of a low-code B2B system that organizes business
                    processes being part of an integration team. Stack: React
                    MobX TypeScript Jest Less SQL.
                </p>
                <p>
                    Company Name: HOST. Period: from May 2020 until November
                    2021. Development and maintaining of the MEDVED telemedical
                    consultation system operating in many regions of Russia.
                    Stack: React, Redux, Node.js, MongoDB, Express.
                </p>
            </div>
        </Section>
    );
};
