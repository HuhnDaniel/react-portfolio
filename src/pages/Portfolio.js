import React from "react";
import campsiteFinderLogo from "../assets/images/campsite-finder-logo.png";
import projectBooleanLogo from "../assets/images/project-boolean-logo.png";
import ProjectCard from "../components/ProjectCard";

function Portfolio() {
    return(
        <main className="m-4">
            <h2 className="text-2xl py-2">Portfolio</h2>

            <ProjectCard name="Project Boolean" deploy="https://project-boolean.herokuapp.com/" github="https://github.com/HuhnDaniel/project-boolean/tree/master" logo={projectBooleanLogo} />

            <ProjectCard name="Campsite Finder" deploy="https://huhndaniel.github.io/campsite-finder/" github="https://github.com/HuhnDaniel/campsite-finder/tree/master" logo={campsiteFinderLogo} />
        </main>
    );
}

export default Portfolio;