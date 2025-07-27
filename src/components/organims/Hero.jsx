import { styles } from "../../styles";
import { ComputersCanvas } from "../canvas";
import AtomText from "../atoms/text/Text";
import AtomNodeConnector from "../atoms/node-connector/NodeConnector";
const Hero = () => {
    return (
        <section className={`relative w-full h-screen mx-auto`}>
            <div
                className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
            >
                <AtomNodeConnector />
                <div>
                    <AtomText tag="h1" className={`${styles.heroHeadText} text-white`}>
                        Hola, Soy{" "}
                        <AtomText
                            tag="span"
                            className="text-[#915EFF]"
                            styleTheme="glow-arcane"
                        >
                            Gatomontes
                        </AtomText>
                    </AtomText>
                    <AtomText
                        tag="p"
                        className={`${styles.heroSubText} mt-2 text-white-100`}
                    >
                        Soy de la carrera de Ingeniería de Sistemas{" "}
                        <br className="sm:block hidden" />y me apasiona el desarrollo de
                        software.
                    </AtomText>
                </div>
            </div>
            <ComputersCanvas />
        </section>
    );
};

export default Hero;
