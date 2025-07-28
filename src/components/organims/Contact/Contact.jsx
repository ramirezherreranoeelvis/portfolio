import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../../../styles";
import { EarthCanvas } from "../../canvas";
import { SectionWrapper } from "../../../hoc";
import { slideIn } from "../../../utils/motion";
import AtomText from "../../atoms/text/Text";
import "./style.css";
const Contact = () => {
    const formRef = useRef();
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs
            .send(
                "service_gednicr",
                "template_k73rxhc",
                {
                    from_name: form.name,
                    to_name: "Noe Elvis",
                    from_email: form.email,
                    to_email: "ramirezherreranoeelvis@gmail.com",
                    message: form.message,
                },
                "ecPK08p2v9ckhW8pY"
            )
            .then(
                () => {
                    setLoading(false);
                    alert("¡Gracias! Tu mensaje ha sido enviado. Te responderé pronto.");

                    setForm({
                        name: "",
                        email: "",
                        message: "",
                    });
                },
                (error) => {
                    setLoading(false);
                    console.log(error);
                    alert("Algo salió mal. Por favor, intenta de nuevo.");
                }
            );
    };
    return (
        <div
            className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden`}
        >
            <div className="flex-[0.75] flex">
                <motion.div
                    variants={slideIn("left", "tween", 0.2, 1)}
                    className="base flex-1 bg-black-100 p-8 rounded-2xl"
                >
                    <AtomText
                        tag="p"
                        className={`${styles.sectionSubText} `}
                        text="Contactame"
                    />
                    <AtomText
                        tag="h2"
                        styleTheme="glow-crimson"
                        className={`${styles.sectionHeadText}`}
                        text="Contacto"
                    />
                    <form
                        ref={formRef}
                        onSubmit={handleSubmit} // <-- Añade el onSubmit
                        className="mt-12 flex flex-col gap-8"
                    >
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Nombres</span>
                            <input
                                type="text"
                                name="name"
                                value={form.name} // <-- Añade el value
                                onChange={handleChange} // <-- Añade el onChange
                                placeholder="¿Cuál es tu nombre?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Email</span>
                            <input
                                type="email"
                                name="email"
                                value={form.email} // <-- Añade el value
                                onChange={handleChange} // <-- Añade el onChange
                                placeholder="¿Cuál es tu email?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>
                        <label className="flex flex-col">
                            <span className="text-white font-medium mb-4">Mensaje</span>
                            <textarea
                                rows={7}
                                name="message"
                                value={form.message} // <-- Añade el value
                                onChange={handleChange} // <-- Añade el onChange
                                placeholder="¿Cuál es tu mensaje?"
                                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
                            />
                        </label>

                        <button
                            type="submit"
                            className="bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary"
                        >
                            {loading ? "Enviando..." : "Enviar"}
                        </button>
                    </form>
                    <br />
                    <br />
                    <div
                        className={`
                            w-full flex gap-6
                            *:inline-block *:text-black rounded-full px-2.5 text-3xl
                        `}
                    >
                        <AtomText tag="span" styleTheme="glow-cyan">
                            <a
                                href="https://github.com/ramirezherreranoeelvis"
                                target="_blank"
                                className="bi bi-github"
                            />
                        </AtomText>
                        <AtomText tag="span" styleTheme="glow-cyan">
                            <a
                                href="https://www.linkedin.com/in/noe-elvis-ramirez-herrera/"
                                target="_blank"
                                className="bi bi-linkedin"
                            />
                        </AtomText>

                        <AtomText tag="span" styleTheme="glow-cyan">
                            <a
                                href="mailto: ramirezherreranoeelvis@gmail.com"
                                target="_blank"
                                className="bi bi-envelope"
                            />
                        </AtomText>
                    </div>
                </motion.div>
            </div>

            <motion.div
                variants={slideIn("right", "tween", 0.2, 1)}
                className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
            >
                <EarthCanvas />
            </motion.div>
        </div>
    );
};

export default SectionWrapper(Contact);
