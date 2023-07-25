import { useState} from "react";
import Header from './components/Header';
import Hero from './components/Hero';
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Skills from "./components/Skills";


function App(){
    const [darkMode, setDarkMode] = useState(true);

    return (
        <div className={darkMode && "dark"}>
            <Header darkMode={darkMode} setDarkMode={setDarkMode}></Header>

            <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

            <Hero></Hero>
            <Testimonials></Testimonials>
            <Skills></Skills>
            <Services></Services>
            <Portfolio></Portfolio>
            <Contact></Contact>
            
            </main>
        </div>
    )

}

export default App;