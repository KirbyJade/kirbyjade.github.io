import React from "react"
import Section from "./common/Section";

import { FaGithub, FaExternalLinkAlt, FaArrowDown } from "react-icons/fa";

import p1 from "../assets/queing.png";
import p2 from "../assets/mobileapp.png";
import p3 from "../assets/enzalada.png";
import p4 from "../assets/weatherapp.png";

const Portfolio = () => {

    const projects= [

        {
            id:1,
            image: p1,
            title: "Qiosk Website",
            github: "https://github.com/KirbyJade",
            demo: "https://sti-qiosk.com/QIOSK/",
        },
        {
            id:2,
            image: p2,
            title: "Qiosk Mobile App",
            github: "https://github.com/KirbyJade",
            demo: "https://sti-qiosk.com/verifier/select-screen/",
        },

        {
            id:3,
            image: p3,
            title: "Storage Monitoring System (on process)",
            github: "https://github.com/KirbyJade",
            demo: "https://enzalada.ph/IMS/pages-login-employee.php",
        },
        {
            id:4,
            image: p4,
            title: "Weather App using React and TailwindCSS",
            github: "https://github.com/KirbyJade",
            demo: "#",
        },
        ];
    
 // eslint-disable-next-line
{/**Hide arrow key function */}
window.addEventListener("scroll", function() {
    const downArrow = document.querySelector(".down-arrow");
    if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");

});
    return (<Section title="Portfolio" subtile="These are the projects that i`ve worked on. 
    Feel free to view every each of them."
    
    >
        <div className="grid gap-8 lg:gap-14 lg:grid-cols-2">
            {projects.map(({id, image, title, github, demo}) => (
                <div key={id} className="max-w-lg flex shadow-lg shadow-gray-300 rounded-2xl overflow-hidden">
                    <img src={image} alt={title} className="w-2/3 cursor-pointer duration-150 hover:scale-110"/>
                    <div className="w-1/3 flex flex-col items-center justify-evenly p-1">
                    <h2>{title}</h2>
                    <a className="text-2xl cursor-pointer duration-150 hover:scale-110" 
                    href={github} target="_blank" rel="noopener noreferrer"><FaGithub/> </a>
                    <a className="text-2xl cursor-pointer duration-150 hover:scale-110" 
                    href={demo} target="_blank" rel="noopener noreferrer"><FaExternalLinkAlt/> </a>
                    
                    
                    
                    </div>
                </div>


           ))}

        </div>

         {/* Arrow down animation */}
         <div className="mt-20 down-arrow">
                <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />

            </div>

    </Section>
    );
};

export default Portfolio;
