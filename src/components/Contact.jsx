import React from "react"
import Section from "./common/Section";
import contactimage from "../assets/cp.png"
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Contact = () => {
    const Social= [

        {
            id:1,
            link: "https://www.facebook.com/kirbz247",
            icon: <FaFacebook />,
        },
        {
            id:2,
            link: "https://twitter.com/_datss",
            icon: <FaTwitter/>,
        },

        {
            id:3,
            link: "https://www.instagram.com/kj_lbln/",
            icon: <FaInstagram/>,
        },
        {
            id:4,
            link: "https://www.linkedin.com/in/kirby-jade-labalan-476b73272/?originalSubdomain=ph",
            icon: <FaLinkedin/>,
        },
        ];
    
    
    return <Section title="Contact" subtile="These are the ways where you can contact me. 
    Lets make your ideas into a reality. Hope you reach out soon!"
    >

        <div className="flex flex-col items-center justify-center gap-8 text-center"> 
            <div><img src={contactimage} alt="contact info" className="w-32 h-32"></img></div>
            <div>
                <p className="max-w-xs md:max-w-lg font-extralight">
                    I am open to talk regarding freelancing or full-time opportunities.
                    Feel free to contact me using your preferred medium.
                </p>
            </div>
            <div className="flex w-full items-center justify-evenly text-3xl">
                {Social.map(({id, link, icon}) => (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="duration-200 ease-in-out hover:text-teal-600">{icon}</a>
                ))}
            </div>
        </div>
      
        <div>

             {/* Bottom Form */}
            <div className="p-8 text-left w-full">
                <form action="https://getform.io/f/52c0feac-7197-47e6-8e34-1901a8f6ed69" method="POST">
                    <div className="gap-4 w-full">
                        <div className="flex flex-col">
                            <label className="capitalized text-sm py-2 font-extralight">
                                Name
                            </label>
                            <input 
                            type="text" 
                            name="Name" 
                            className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" required />

                        </div>

                        <div className="flex flex-col my-2">
                            <label className="capitalized text-sm py-2 font-extralight">
                                Phone
                            </label>
                            <input 
                            type="text" 
                            name="Phone" 
                            className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" required />

                        </div>

                        <div className="flex flex-col my-2">
                            <label className="capitalized text-sm py-2 font-extralight">
                                E-mail
                            </label>
                            <input 
                            type="text" 
                            name="E-mail" 
                            className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white" required />

                        </div>

                        <div className="flex flex-col my-2">
                            <label className="capitalized text-sm py-2 font-extralight">
                                Message
                            </label>
                            <textarea name="Message" rows="10"className="border-2 rounded-lg p-3 flex focus:outline-none border-gray-400 
                            dark:bg-gray-900 dark:text-white resize-none">
                            </textarea>
                        </div>
                    </div>

                    <div className="flex items-center justify-center">
                        <button className="my-8 bg-gradient-to-r from-sky-900
                         to-teal-500 text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200"
                         >
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
        </div>
    
    </Section>
}

export default Contact;