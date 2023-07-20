import React from "react";
import Section from "./common/Section";
import {FaArrowDown} from "react-icons/fa";

import html from "../assets/html-5.png";
import css from "../assets/css-3.png";
import javascript from "../assets/java-script.png";
import typescript from "../assets/typescript.png";
import reactjs from "../assets/reactjs.png";
import nodejs from "../assets/nodejs.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";
import github from "../assets/github.png";
import wordpress from "../assets/wordpress.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";


const Skills =  () => {
    const skills= [

        {
            id:1,
            image: html,
            title: "HTML-5",
        },
        {
            id:2,
            image: css,
            title: "CSS",
        },
        
        {
            id:3,
            image: javascript,
            title: "JavaScript",
        },

        {
            id:4,
            image: typescript,
            title: "TypeScript",
        },
        {
            id:5,
            image: reactjs,
            title: "React.Js",
        },
        {
            id:6,
            image: nodejs,
            title: "Node.Js",
        },
        
        {
            id:7,
            image: tailwind,
            title: "Tailwind CSS",
        },

        {
            id:8,
            image: git,
            title: "Git",
        },
        {
            id:9,
            image: github,
            title: "Github",
        },
        {
            id:10,
            image: wordpress,
            title: "WordPress",
        },
        
        {
            id:11,
            image: php,
            title: "PHP",
        },

        {
            id:12,
            image: mysql,
            title: "My SQL",
        },
        ];
    // eslint-disable-next-line
{/**Hide arrow key function */}
window.addEventListener("scroll", function() {
    const downArrow = document.querySelector(".down-arrow");
    if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");
});
    return <Section 
    title="Skills"
    >
        <div className="grid gap-10 lg:grid-cols-3 items-center">
            {skills.map(({id, image, title}) => (
                    //Animation are in the tailwind css of this div
                    <div key={id} className="flex flex-col items-center justify-center p-5 shadow-lg dark:shadow-gray-100 rounded-xl duration-300 ease-in-out hover:scale-110">
                        <img src={image} alt={title} className="w-36 h-36 md:w-44 md-h-44 object-contain"/>
                        <h3 className="mt-5 text-base">{title}</h3>
                    </div>
                ))
            }

        </div>

         {/* Arrow down animation */}
         <div className="mt-20 down-arrow">
                <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />

            </div>
    </Section>
}
export default Skills;