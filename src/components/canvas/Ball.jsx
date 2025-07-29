import { useDrag } from "@use-gesture/react";
import { animated, useSpring } from "@react-spring/three";
import { useTexture, Decal } from "@react-three/drei";
const Ball = ({ imgUrl, position, color }) => {
    const [decal] = useTexture([imgUrl]);

    const [{ rotation }, api] = useSpring(() => ({
        rotation: [0, 0, 0],
        config: { mass: 1, tension: 200, friction: 20 },
    }));

    const bind = useDrag(({ down, movement: [mx, my] }) => {
        api.start({
            rotation: down ? [my / 150, mx / 150, 0] : rotation.get(),
        });
    });

    return (
        <animated.mesh {...bind()} position={position} rotation={rotation} scale={2.5}>
            <icosahedronGeometry args={[1.2, 10]} />
            <meshStandardMaterial color={color} polygonOffset polygonOffsetFactor={-5} />
            {decal && (
                <Decal
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                    scale={1.6}
                    map={decal}
                />
            )}
        </animated.mesh>
    );
};

export default Ball;
