import { Canvas } from "@react-three/fiber";
import { Preload } from "@react-three/drei";
import Ball from "../../canvas/Ball.jsx";
import { useState, useEffect, useMemo, Suspense } from "react";
import { technologies, layouts } from "./technologies.js";
import CanvasLoader from "../../Loader.jsx";
import "./balls.css"
const useScreenSize = () => {
    const [screenSize, setScreenSize] = useState("normal");
    useEffect(() => {
        const queries = {
            normal: window.matchMedia("(min-width: 1281px)"),
            m1280: window.matchMedia("(min-width: 811px) and (max-width: 1280px)"),
            m810: window.matchMedia("(min-width: 481px) and (max-width: 810px)"),
            m480: window.matchMedia("(max-width: 480px)"),
        };
        const updateScreenSize = () => {
            for (const key in queries) {
                if (queries[key].matches) {
                    setScreenSize(key);
                    return;
                }
            }
        };
        updateScreenSize();
        Object.values(queries).forEach((q) =>
            q.addEventListener("change", updateScreenSize)
        );
        return () =>
            Object.values(queries).forEach((q) =>
                q.removeEventListener("change", updateScreenSize)
            );
    }, []);
    return screenSize;
};

const Tech = () => {
    const size = useScreenSize();
    // 3. Seleccionamos el layout correcto. useMemo optimiza para que no se recalcule en cada render.
    const currentLayout = useMemo(() => layouts[size] || layouts.m480, [size]);

    return (
        <div className={"w-screen"}>
            <Canvas
                className="ball-tech-purple-cyan"
                gl={{ preserveDrawingBuffer: true }}
                style={{
                    height: currentLayout.canvasHeight,
                }}
                orthographic
                camera={{ zoom: currentLayout.zoom, position: [0, 0, 10] }}
            >
                <Suspense fallback={<CanvasLoader />}>
                    <ambientLight intensity={0.5} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />

                    {technologies.map((tech, index) => {
                        // Asegúrate de que hay una posición definida para este índice
                        const position = currentLayout.positions[index];
                        if (!position) return null; // No renderizar si no hay posición

                        return (
                            <Ball
                                key={tech.name}
                                position={position}
                                imgUrl={tech.icon}
                                color="#150C38"
                            />
                        );
                    })}
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default Tech;
