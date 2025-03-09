import { a } from "@react-spring/three";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { Vector3 } from "three";

const Scene = ({ scrollProgress, startAnimation, activeSection, modelPosition }) => {
    const { camera } = useThree();
    const targetCameraPosition = useRef(new Vector3(0, 4, 5));

    useFrame(() => {
        camera.position.lerp(targetCameraPosition.current, 0.1);
        camera.lookAt(...modelPosition);
    });

    return (
        <>
            <a.ambientLight intensity={1.2} />
            <a.directionalLight position={[2, 2, 2]} intensity={1.2} />
        </>
    );
};

export default Scene; 