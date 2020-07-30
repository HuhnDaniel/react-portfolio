import React from "react";
import Button from "../components/Button";
import profilePic from "../assets/images/profilepic.jpg";

const resume = {
    view: "https://docs.google.com/document/d/1FAhLfMIWzPaPbqHQfpG83LzAm3j4BUq4rOgi8BgQ1lo/edit?usp=sharing",
    download: "https://docs.google.com/document/d/1FAhLfMIWzPaPbqHQfpG83LzAm3j4BUq4rOgi8BgQ1lo/export?format=doc"
}

function About() {
    return(
        <main>
            <h2 className="text-2xl">About Me</h2>
            <hr />

            <img src={profilePic} className="" alt="Profile" />

            <p className="">
                As a full-stack web developer, I use experience with multiple technologies to create
                intentional and engaging sites and applications.  Previous experience in leadership
                roles provides me with strong teamwork and communication skills necessary for working
                well in a group.  I pride myself in my sense of initiative for learning, my work ethic,
                and my ability to finish projects on time.
            </p>
            <hr />
            
            <h3 className="text-xl">My resume</h3>
            <article className="flex flex-row">
                <Button  className="flex-auto text-center" to={resume.view} text="view" newTab="true" />
                <Button className="flex-auto text-center" to={resume.download} text="download" />
            </article>
        </main>
    );
}

export default About;