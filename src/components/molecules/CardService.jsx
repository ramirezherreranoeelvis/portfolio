import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import AtomText from "../atoms/text/Text";
import "./style.css";
const ServiceCard = ({ index, title, icon }) => {
    const particles = [
        { x: 1, y: -1, style: { top: "40%", left: "20%" } },
        { x: -1, y: -1, style: { top: "60%", right: "20%" } },
        { x: 0.5, y: 1, style: { top: "20%", left: "40%" } },
        { x: -0.5, y: 1, style: { top: "80%", right: "40%" } },
        { x: 1, y: 0.5, style: { top: "30%", left: "60%" } },
        { x: -1, y: 0.5, style: { top: "70%", right: "60%" } },
    ];
    return (
        <Tilt className="xs:w-[250px] w-full group">
            <article cardService="" className="relative">
                {/* <div class="border"></div> */}
                <motion.div
                    variants={fadeIn("right", "spring", index * 0.5, 0.75)}
                    className="w-full green-pink-gradient p-[1px] rounded-[20px]"
                >
                    <div
                        options={{
                            max: 45,
                            scale: 1,
                            speed: 450,
                        }}
                        className="body overflow-hidden bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                    >
                        <img
                            src={icon}
                            alt="web-development"
                            className="w-16 h-16 object-contain"
                        />
                        <div
                            class=" *:absolute *:size-[3px] *:bg-[#26f78b] *:rounded-full *:hidden *:transition-opacity *:duration-300
                        *:group-hover:flex"
                        >
                            {particles.map(({ x, y, style }, i) => (
                                <motion.span
                                    key={i}
                                    style={style}
                                    animate={{
                                        opacity: [0, 1, 0],
                                        x: [0, x * 30, 0],
                                        y: [0, y * 30, 0],
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        ease: "easeInOut",
                                    }}
                                />
                            ))}
                        </div>
                        <div class="scan-line"></div>
                        <div class="card-glare"></div>

                        <AtomText
                            tag="h3"
                            styleTheme="glow-hologram"
                            className="text-[20px] font-bold text-center"
                            text={title}
                        />
                    </div>
                </motion.div>
            </article>
        </Tilt>
    );
};
export default ServiceCard;
