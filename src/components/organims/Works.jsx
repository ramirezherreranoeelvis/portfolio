import { motion } from "framer-motion";
import { styles } from "../../styles";
import { SectionWrapper } from "../../hoc";
import projects from "./works/projects";
import { fadeIn, textVariant } from "../../utils/motion";
import AtomText from "../atoms/text/Text";
import CardProject from "../molecules/CardProject/CardProject";
import "./works/works.css";
const Works = () => {
    return (
        <section works="" className="relative">
            <motion.div variants={textVariant()}>
                <AtomText
                    tag="p"
                    className={`${styles.sectionSubText} `}
                    text="My experience"
                />
                <AtomText
                    tag="h2"
                    styleTheme="glow-emerald"
                    className={`${styles.sectionHeadText}`}
                    text="Mis Proyectos."
                />
            </motion.div>

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
                >
                    Los siguientes proyectos muestran mis habilidades y experiencia
                    mediante ejemplos prácticos de mi trabajo. Cada proyecto se describe
                    brevemente con enlaces a repositorios de código y demostraciones en
                    vivo. Esto refleja mi capacidad para resolver problemas complejos,
                    trabajar con diferentes tecnologías y gestionar proyectos eficazmente.
                </motion.p>
            </div>

            <div className="mt-20 flex flex-wrap gap-7">
                {projects.map((project, index) => (
                    <CardProject key={`project-${index}`} index={index} {...project} />
                ))}
            </div>
            <div class="glowing-elements">
                <div class="glow-1"></div>
                <div class="glow-2"></div>
                <div class="glow-3"></div>
            </div>
        </section>
    );
};

export default SectionWrapper(Works);
