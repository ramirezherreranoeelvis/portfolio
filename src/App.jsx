import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/organims/Navbar";
import Hero from "./components/organims/Hero";
import About from "./components/organims/About/About";
import Contact from "./components/organims/Contact/Contact";
import Tech from "./components/organims/Tech/Tech";
import Works from "./components/organims/Works";
import StarsCanvas from "./components/canvas/Stars";
import "./components/organims/Contact/style.css";
const App = () => {
    return (
        <BrowserRouter>
            <div className="relative bg-primary bg-hero-pattern bg-no-repeat bg-cover">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-30">
                    <Navbar />
                    <Hero />
                </div>
                <div className="absolute bg-gradient w-full h-[calc(100%-100vh)] z-0"></div>
                <div className="relative z-0 contacto">
                   
                    <About />
                    {/* <Experience /> */}
                    <Tech />
                    <Works />
                    {/* <Feedbacks /> */}
                    <div className="relative z-0" contacto>
                        <Contact />
                    </div>
                     <StarsCanvas />
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
