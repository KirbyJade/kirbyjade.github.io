import React from 'react'
import {FaTwitter, FaFacebook, FaLinkedin, FaArrowDown} from "react-icons/fa";
import Pic from "../assets/Pic.png";
const Hero= () => {
    const SOCIAL = [

{
    id:1,
    link: "https://twitter.com",
    icon: <FaTwitter></FaTwitter>
},
{
    id:2,
    link: "https://facebook.com",
    icon:<FaFacebook></FaFacebook>,
},

{
    id:3,
    link: "https://linkedin.com",
    icon:<FaLinkedin></FaLinkedin>,
},
];
// eslint-disable-next-line
{/**Hide arrow key function */}
window.addEventListener("scroll", function() {
    const downArrow = document.querySelector(".down-arrow");
    if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");

});

return (
     <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
        <h2 className="text-5xl text-teal-600 uppercase font-bold">Kirby Jade Labalan</h2>
        <h3 className="p-3 text-2xl">Software Engineer</h3>
        <p className="max-w-xl font-light text-gray-700">
            Hello <span className="animate-pulse text-4xl">👋</span>, welcome to my portfolio. 
            I am a software engineer. I possess strong communication, analytical,and problem-solving skills. As a quick a learner, 
            I have passion for technology and a strong desire to expand my knowledge and expertise in this field. My capacity for 
            teamwork and dedication to producing high-quality work makes me an excellent candidate for any position that aligns with 
            my skills and abilities.
        </p>
        {/* Social Icons */}
        <div className="flex justify-evenly py-8 lg:py-16 text-3xl w-full md:w-1/3">
            {SOCIAL.map(({id, link, icon}) => (
                <a href={link} 
                key={id}
                target="_blank"
                rel="noopener noreferrer"
                className='cursor-pointer duration-300 hover:text-sky-400'
                
                >
                    {icon}
                </a>
            ))}
        </div>
            {/* AVATAR AND IMAGE */}
            <div>
                <img src={Pic} 
                alt="Pic"
                className="w-60 h-60 md:w-72 md:h-72 object-cover object-top bg-gradient-to-b from-teal-600 rounded-lg pt-5"
                ></img>
                <a href="https://drive.google.com/file/d/1YD8xZNblH8umOph2qwEgBEmDUBIldBRN/view?usp=sharing" target= "_blank" rel="noopener noreferrer" 
                className="flex items-center justify-center mt-6 bg-gradient-to-r from-sky-900 to-teal-500 text-white py-2 rounded-lg"
                >
                Resume</a>
            </div>

            {/* Arrow down animation */}
            <div className="mt-20 down-arrow">
                <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />

            </div>

    </section>
);
};

export default Hero;
