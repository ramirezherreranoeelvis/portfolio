import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { fadeIn } from "../../../utils/motion";
import AtomText from "../../atoms/text/Text";
const CardProject = ({ index, name, description, tags, image, source_code_link }) => {
    return (
        <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
            <Tilt
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className="backdrop-blur-[2px] bg-[#0f052eae] p-5 rounded-2xl sm:w-[360px] w-full"
            >
                <div className="relative w-full h-[230px]">
                    <img
                        src={image}
                        alt="project_image"
                        className="w-full h-full object-cover rounded-2xl"
                    />

                    <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
                        <div
                            onClick={() => window.open(source_code_link, "_blank")}
                            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
                        >
                            <img
                                src="images/github.png"
                                alt="source code"
                                className="w-1/2 h-1/2 object-contain"
                            />
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <AtomText
                        tag="h3"
                        styleTheme="glow-amber"
                        className="text-white font-bold text-[24px]"
                        text={name}
                    />
                    <AtomText
                        tag="p"
                        className="text-secondary mt-2 text-[14px]"
                        text={description}
                    />
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <AtomText
                            tag="p"
                            styleTheme={tag.color}
                            className="text-[14px] font-bold"
                            key={`${name}-${tag.name}`}
                        >
                            #{tag.name}
                        </AtomText>
                    ))}
                </div>
            </Tilt>
        </motion.div>
    );
};

export default CardProject;
