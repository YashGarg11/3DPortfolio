import { useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export default function Model1({ scrollProgress }) {
  const modelRef = useRef();
  const { scene, animations } = useGLTF("/sci-fi_cube.glb");
  const { actions } = useAnimations(animations, modelRef);
  const scrollRef = useRef(scrollProgress); 

 
  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; 
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2; // Floating effect

      // ✅ Clamped Z-axis Movement to avoid disappearing
      const minZ = -5;  // Adjusted minimum Z position
      const maxZ = 2;   // Adjusted maximum Z position
      modelRef.current.position.z = Math.max(minZ, Math.min(maxZ, minZ + scrollRef.current * (maxZ - minZ)));

      // ✅ Optional: Smooth Scaling Effect (Optional)
      modelRef.current.scale.setScalar(2.5 + scrollRef.current * 0.5);
    }
  });

  return (
    <>
    
      <ambientLight intensity={1.5} />

     
      <directionalLight position={[5, 5, 5]} intensity={4} castShadow />
      <directionalLight position={[-5, 5, 5]} intensity={3} castShadow />
      <directionalLight position={[0, 10, 5]} intensity={5} castShadow />
      

      <spotLight
        position={[2, 8, 5]}
        intensity={6}
        angle={0.3}
        penumbra={0.5}
        castShadow
      />

      <primitive 
        ref={modelRef} 
        object={scene} 
        scale={5} 
        position={[0, 2, 0]} 
        castShadow 
        receiveShadow 
        pointerEvents="none" 
      />
    </>
  );
}
