import React from "react";
import Section from "./common/Section";
import {FaArrowDown} from "react-icons/fa";

import ecommerce from "../assets/ecommerce.png";
import research from "../assets/research.png";
import web from "../assets/web.png";
import mobile from "../assets/mobile.png";


const Services =  () => {
    const services= [

        {
            id:1,
            image: ecommerce,
            title: "ECommerce Website",
        },
        {
            id:2,
            image: web,
            title: "Web Development",
        },
        
        {
            id:3,
            image: mobile,
            title: "Mobile Development",
        },

        {
            id:4,
            image: research,
            title: "Research Development",
        },
        ];
    


    return <Section 
    title="Services"
    subtile="Here are the list of my services that I cater for my clients. If you have a project on mind that is not listed on my services feel free to message me via e-mail."
    >

        <div className="grid gap-10 lg:grid-cols-2 items-center">
            {services.map(({id, image, title}) => (
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
export default Services;