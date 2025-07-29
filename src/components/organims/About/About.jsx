import { motion } from "framer-motion";
import { styles } from "../../../styles";
import services from "./services";
import { SectionWrapper } from "../../../hoc";
import { fadeIn, textVariant } from "../../../utils/motion";
import AtomText from "../../atoms/text/Text";
import ServiceCard from "../../molecules/CardService";
import "./about.css";
const About = () => {
    return (
        <section about="" className="relative">
            <motion.div variants={textVariant()}>
                <AtomText tag="p" className={styles.sectionSubText} text="introducción" />
                <AtomText
                    styleTheme="glow-cyan"
                    tag="h2"
                    className={styles.sectionHeadText}
                    text="Descripción General."
                />
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                Soy un desarrollador de software experto con experiencia en TypeScript,
                JavaScript, Python y Java, y con experiencia en frameworks/librerias como
                React, Angular, SpringBoot y Three.js. Aprendo rápido y colaboro
                estrechamente con clientes para crear soluciones eficientes, escalables e
                intuitivas que resuelven problemas reales. ¡Trabajemos juntos para hacer
                realidad tus ideas!
            </motion.p>

            <div className="mt-20 flex flex-wrap gap-10">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
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

export default SectionWrapper(About);
