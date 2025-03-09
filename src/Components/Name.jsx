import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Model2() {
    const { scene, animations } = useGLTF("/pr_circle.glb");
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (scene && animations && animations.length > 0 && actions) {
            const firstAnimationName = animations[0].name;
            const animationAction = actions[firstAnimationName];

            if (animationAction) {
                animationAction.play();
            }
        }
    }, [actions, animations, scene]);

    if (!scene) {
        return null; // Or a loading indicator
    }

    return <primitive object={scene} scale={30} position={[-6, 0, -2]} />;
}