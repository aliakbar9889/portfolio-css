'use client';

import HeroSection from "./components/Hero";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import Page4 from "./components/Page4";
import Page5 from "./components/Page5";
import ContactPage from "./components/Contact";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";


const App: React.FC = () => {
    useEffect (()=> {
        AOS.init({
            easing:"ease-out-back",
            duration: 1200,
            delay:100,
            mirror:true,
            anchorPlacement:"bottom-bottom",
            offset:160,
        });
        AOS.refresh();
     }, []);
    return (
        <div>
            <HeroSection/>
            <Page2/> 
            <Page3/>
            <Page4/>
            <Page5/>
            <ContactPage/>
            
          
        </div>
    );
};

export default App;

