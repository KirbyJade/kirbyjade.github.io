import React from "react";
import Section from "./common/Section"
import {FaArrowDown} from "react-icons/fa"

import male from "../assets/male.jpg";
import female from "../assets/female.png";

const Testimonials = () => {
    const Testimonials= [

        {
            id:1,
            image: male,
            name: "Nestor",
            comment:"It was a good queuing system for STI College of Caloocan",
        },
        {
            id:2,
            image: male,
            name: "Celso",
            comment:"He is a an outstanding student that works diligently",
        },

        {
            id:3,
            image: female,
            name: "Linda",
            comment:"Their Project is so useful for the students of STI",
        },
        {
            id:4,
            image: female,
            name: "Jane",
            comment:"His and his groupmates are so professional when it come in handling projects",
        },
        ];

// eslint-disable-next-line
{/**Hide arrow key function */}
window.addEventListener("scroll", function() {
    const downArrow = document.querySelector(".down-arrow");
    if(this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
    else downArrow.classList.remove("hide-down-arrow");

});

    return<Section title="Testimonials" subtile="This are the response of my client to my projects"
    >
      <div className="max-w-xl flex flex-col gap-2">
        {Testimonials.map(({id, image, name, comment}) => (
            <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-400">
                <div className="w-1/3">
                    <img src={image} alt={name} className="w-20 h-20  object-cover object-top pt-2" />
                </div>
                <div className="w-2/3 flex flex-col justify-center items-center gap-3 p-2">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <p className="text-sm font-extralight">{comment}</p>
                </div>


            </div>

        ))}

      </div>
             {/* Arrow down animation */}
         <div className="mt-20 down-arrow">
                <FaArrowDown className="text-gray-400 text-2xl animate-bounce" />

            </div>

    </Section>

}

export default Testimonials; 