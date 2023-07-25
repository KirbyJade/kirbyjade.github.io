import React from "react";
import Section from "./common/Section"
import {FaArrowDown} from "react-icons/fa"

import one from "../assets/Cloud Service.jpg";
import two from "../assets/HCIA-CloudService.png";
import three from "../assets/HCIA-IOT.png";
import four from "../assets/NC2-cert.jpg";
import five from "../assets/bsa (2).jpg";
import six from "../assets/bsa (1).jpg";



const Testimonials = () => {
    const Testimonials= [

        {
            id:1,
            image: one,
            name: "Huawei Cloud Service (Course Completed)",
        },
        {
            id:2,
            image: two,
            name: "HCIA-Cloud Service (Course Completed)",
        },

        {
            id:3,
            image: three,
            name: "HCIA-IOT (Course Completed)",
        },
        {
            id:4,
            image: four,
            name: "NC II Certificate (Electrical Installation and Maintenance)",
        },

        {
            id:5,
            image: five,
            name: "Computer Engineering graduate with latin honors of Magna Cum Laude",
        },
        {
            id:6,
            image: six,
            name: "Graduated as Valedictorian with best student of the year award",
        },
        ];


    return<Section title="Achievements" subtile="List of my  achievements throughout my Academic Journey"
    >
      <div className="max-w-xl flex flex-col gap-2">
        {Testimonials.map(({id, image, name, comment}) => (
            <div className="flex p-4 justify-center items-center rounded-xl shadow-md dark:shadow-gray-400">
                <div className="w-1/3">
                    <a href="https://drive.google.com/drive/folders/1sUNLXdn5IqqEDT_zp2_vUDwuphq_rhZf?usp=sharing" target="_blank" rel="noopener noreferrer">
                    <img src={image} alt={name} className="w-20 h-20  object-cover object-top pt-2" /> 
                        </a>
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