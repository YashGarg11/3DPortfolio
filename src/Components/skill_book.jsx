import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";
import * as THREE from "three";

export default function skill_book() {
    const { scene, animations } = useGLTF("/book1.glb");
    const { actions } = useAnimations(animations, scene);

    useEffect(() => {
        if (scene && animations && animations.length > 0 && actions) {
            const firstAnimationName = animations[0].name;
            const animationAction = actions[firstAnimationName];

            if (animationAction) {
                // Set to play only once
                animationAction.loop = THREE.LoopOnce;
                animationAction.clampWhenFinished = true;

                // Slow down the animation speed
                animationAction.timeScale = 0.5; // Half speed

                animationAction.play();
            }
        }
    }, [actions, animations, scene]);

    if (!scene) {
        return null; // Or a loading indicator
    }

    return (<>

        <ambientLight intensity={1.5} />


        <directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
        <directionalLight position={[-5, 5, 5]} intensity={0.5} castShadow />
        <directionalLight position={[0, 10, 5]} intensity={0.5} castShadow />


        <primitive object={scene}
            scale={2}
            position={[10, 1, 0]}
            rotation={[-0.1, 1.8, 1.2]}
            castShadow
            receiveShadow /></>);
}