import React from "react";
import {BsFillMoonStarsFill, BsSun} from "react-icons/bs";

const Header = ({darkMode, setDarkMode}) =>{
    return(
<header className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <nav className="flex justify-between items-center p-5">
            <h1 className="text-lg">My App</h1>

            <div onClick={() => setDarkMode(!darkMode)}>
                { darkMode ? (
                <BsSun className="text-2xl cursor-pointer"/>
                ) : (
                <BsFillMoonStarsFill className="text-2xl cursor-pointer"/>
                )} 
            </div>
        </nav>
    </header>
    );
};

export default Header;