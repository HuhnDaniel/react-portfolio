import React from "react";
import Button from "../components/Button";
import profilePic from "../assets/images/profilepic.jpg";

const resume = {
    view: "https://docs.google.com/document/d/1FAhLfMIWzPaPbqHQfpG83LzAm3j4BUq4rOgi8BgQ1lo/edit?usp=sharing",
    download: "https://docs.google.com/document/d/1FAhLfMIWzPaPbqHQfpG83LzAm3j4BUq4rOgi8BgQ1lo/export?format=doc"
}

function About() {
    return(
        <main className="m-4">
            <h2 className="text-2xl py-2">About Me</h2>
            
            <figure className="p-4">
                <img src={profilePic} className="w-64 m-auto shadow-md" alt="Profile" />
            </figure>

            <p className="py-4 px-2 text-justify leading-relaxed">
                As a full-stack web developer, I use experience with multiple technologies to create
                intentional and engaging sites and applications.  Previous experience in leadership
                roles provides me with strong teamwork and communication skills necessary for working
                well in a group.  I pride myself in my sense of initiative for learning, my work ethic,
                and my ability to finish projects on time.
            </p>
            <hr />
            
            <h3 className="text-xl py-4">My resume</h3>
            <article className="flex flex-row mt-2">
                <Button  to={resume.view} text="view" newTab="true" />
                <Button to={resume.download} text="download" />
            </article>
        </main>
    );
}

export default About;