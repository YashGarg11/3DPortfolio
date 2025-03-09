import { useAnimations, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Model3() {
    const { scene, animations } = useGLTF("/space_station_3.glb");
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

    return( <>
    
    <ambientLight intensity={1.5} />

     
<directionalLight position={[5, 5, 5]} intensity={0.5} castShadow />
<directionalLight position={[-5, 5, 5]} intensity={0.5} castShadow />
<directionalLight position={[0, 10, 5]} intensity={0.5} castShadow />
    
    <primitive object={scene} scale={20}  /></>);
}