import { BrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";
import { InView } from "react-intersection-observer";
import Navbar from "./components/organims/Navbar";
import Hero from "./components/organims/Hero";
const About = lazy(() => import("./components/organims/About/About"));
const Tech = lazy(() => import("./components/organims/Tech/Tech"));
const Works = lazy(() => import("./components/organims/Works"));
const Contact = lazy(() => import("./components/organims/Contact/Contact"));
const StarsCanvas = lazy(() => import("./components/canvas/Stars"));
import "./components/organims/Contact/style.css";

const App = () => {
    return (
        <BrowserRouter>
            <div className="relative bgs-primary bg-ahero-pattern bg-no-repeat bg-cover">
                <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center z-30">
                    <Navbar />
                    <Hero />
                </div>
                <div className="absolute bg-gradient w-full h-[calc(100%-100vh)] z-0"></div>
                <Suspense
                    fallback={
                        <div className="w-full h-screen flex justify-center items-center text-white">
                            Cargando sección...
                        </div>
                    }
                >
                    <div className="relative z-0 contacto max-w-[100vw] overflow-y-visible overflow-x-hidden">
                        <StarsCanvas />
                        <InView triggerOnce threshold={0.2}>
                            {({ inView, ref }) => (
                                <div id="about" className="flex justify-center" ref={ref}>
                                    {inView ? (
                                        <About />
                                    ) : (
                                        <div className="min-h-screen" />
                                    )}
                                </div>
                            )}
                        </InView>
                        <InView triggerOnce threshold={0.2}>
                            {({ inView, ref }) => (
                                <div ref={ref}>
                                    {inView ? <Tech /> : <div className="min-h-28" />}
                                </div>
                            )}
                        </InView>
                        <InView triggerOnce threshold={0.2}>
                            {({ inView, ref }) => (
                                <div id="works" className="flex justify-center" ref={ref}>
                                    {inView ? (
                                        <Works />
                                    ) : (
                                        <div className="min-h-screen" />
                                    )}
                                </div>
                            )}
                        </InView>
                        <div className="relative z-0">
                            <InView triggerOnce threshold={0.2}>
                                {({ inView, ref }) => (
                                    <div id="contact" ref={ref}>
                                        {inView ? (
                                            <>
                                                <Contact />
                                            </>
                                        ) : (
                                            <div className="min-h-screen" />
                                        )}
                                    </div>
                                )}
                            </InView>
                        </div>
                    </div>
                </Suspense>
            </div>
        </BrowserRouter>
    );
};

export default App;
