import React from "react";
import campsiteFinderLogo from "../assets/images/campsite-finder-logo.png";
import projectBooleanLogo from "../assets/images/project-boolean-logo.png";

function Portfolio() {
    return(
        <main className="m-4">
            <h2 className="text-2xl py-2">Portfolio</h2>

            <article className="">
                <h3 className="text-xl py-4">Project Boolean</h3>

                <a className="" href="https://project-boolean.herokuapp.com/" target="_blank" rel="noopener noreferrer">
                    <img className="" data-project="project-boolean" src={projectBooleanLogo} alt="Project Boolean link" />
                </a>

                <a href="https://github.com/HuhnDaniel/campsite-finder/tree/master" className="text-blue-500" target="_blank" rel="noopener noreferrer">View on Github.</a>
            </article>

            <article className="">
                <h3 className="text-xl py-4">Campsite Finder</h3>

                <a className="" href="https://huhndaniel.github.io/campsite-finder/" target="_blank" rel="noopener noreferrer">
                    <img className="" data-project="campsite-finder" src={campsiteFinderLogo} alt="Campsite Finder link" />
                </a>

                <a href="https://github.com/HuhnDaniel/campsite-finder/tree/master" className="text-blue-500" target="_blank" rel="noopener noreferrer">View on Github.</a>
            </article>
        </main>
    );
}

export default Portfolio;