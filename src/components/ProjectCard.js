import React from "react";

function ProjectCard({ name, deploy, github, logo }) {
    return (
        <article className="">
            <h3 className="text-xl py-4">{name}</h3>

            <a className="" href={deploy} target="_blank" rel="noopener noreferrer">
                <img className="" data-project={name} src={logo} alt="Project Boolean link" />
            </a>

            <a href={github} className="text-blue-500" target="_blank" rel="noopener noreferrer">View on Github.</a>
        </article>
    );
}

export default ProjectCard;