import {useContext, useLayoutEffect, useRef, useState} from "react";
import {resources} from "../utils/resources";
import {AboutMe} from "./Sections/AboutMe";
import {Section} from "./UI/Section";
import {Header} from "./Sections/Header";
import {WorkExperience} from "./Sections/WorkExperience";
import {ContactMe} from "./Sections/ContactMe";
import {Navigation} from "./Sections/Navigation";
import {Footer} from "./Sections/Footer";
import {CatTheDestroyer} from "./CatTheDestroyer";
import {useLenisStore} from "../stores/useLenisStore";
import {PageProgress} from "./PageProgress";

export const Layout = () => {
    const [isCatVisible, setIsCatVisible] = useState(false);
    return (
        <>
            <PageProgress />
            <Header />
            <main
                id="main"
                className="flex pointer-events-none flex-col gap-y-48 info size-full max-w-screen-2xl min-w-screen justify-center mx-auto z-10 relative overflow-x-clip"
            >
                <Navigation />
                <AboutMe />
                <WorkExperience />
                <ContactMe setIsCatVisible={setIsCatVisible} />
            </main>
            <CatTheDestroyer
                isCatVisible={isCatVisible}
                setIsCatVisible={setIsCatVisible}
            />
            <Footer />
        </>
    );
};
