import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

const modelUrls = {
  home: "/sci-fi_cube.glb",
  about: "/ear.glb",
 
};

export default function Model1({ scrollProgress, scale, position, rotation = [0, 0, 0], activeSection }) {
  const modelRef = useRef();
  const previousModelRef = useRef();
  const [currentModel, setCurrentModel] = useState(null);
  const [previousModel, setPreviousModel] = useState(null);
  const [transitionProgress, setTransitionProgress] = useState(0);
  const scrollRef = useRef(scrollProgress);
  const rotationSpeedRef = useRef(0.01);
  const transitionDuration = 1.0; // seconds for transition

  // Load models
  const { scene: homeScene, animations: homeAnimations } = useGLTF(modelUrls.home);
  const { scene: aboutScene, animations: aboutAnimations } = useGLTF(modelUrls.about);
  
  // Create animation mixers for each model
  const mixers = useRef({});
  
  const scenes = {
    home: homeScene,
    about: aboutScene,
    
  };

  const animations = {
    home: homeAnimations,
    about: aboutAnimations,
    
  };

  useEffect(() => {
    scrollRef.current = scrollProgress;
  }, [scrollProgress]);

  // Prepare models with transparent materials for smooth transitions
  useEffect(() => {
    // Clone and prepare all models with transparent materials
    Object.entries(scenes).forEach(([modelName, scene]) => {
      scene.traverse(child => {
        if (child.isMesh && child.material) {
          // Create a new material that supports transparency
          const newMaterial = new MeshStandardMaterial({
            ...child.material,
            transparent: true,
            opacity: 1.0
          });
          child.material = newMaterial;
        }
      });
      
      // Set up animations for each model if they have animations
      const modelAnimations = animations[modelName];
      if (modelAnimations && modelAnimations.length > 0) {
        console.log(`Model ${modelName} has ${modelAnimations.length} animations`);
        // Create a mixer manually instead of using useAnimations hook inside a loop
        const mixer = new THREE.AnimationMixer(scene);
        mixers.current[modelName] = mixer;
        
        // Play all animations for this model
        modelAnimations.forEach(clip => {
          if (clip) {
            
            const action = mixer.clipAction(clip);
            action.reset().play();
          }
        });
      }
    });
  }, []);

  // Handle model transitions
  useEffect(() => {
    if (activeSection && scenes[activeSection]) {
      if (!currentModel) {
        setCurrentModel(scenes[activeSection]);
        setTransitionProgress(1);
      } else if (currentModel !== scenes[activeSection]) {
        setPreviousModel(currentModel);
        previousModelRef.current = modelRef.current.clone();
        setCurrentModel(scenes[activeSection]);
        setTransitionProgress(0);
      }
    }
  }, [activeSection, scenes]);

  useFrame((state, delta) => {
    if (modelRef.current) {
      // Update all animation mixers
      Object.values(mixers.current).forEach(mixer => {
        if (mixer) mixer.update(delta);
      });

      // Handle transition with delta time for consistent speed
      if (transitionProgress < 1) {
        const step = delta / transitionDuration;
        setTransitionProgress(Math.min(transitionProgress + step, 1));
      }

      // Apply rotation from props
      modelRef.current.rotation.x = rotation[0];
      modelRef.current.rotation.y += rotationSpeedRef.current;
      modelRef.current.rotation.z = rotation[2];

      // Add floating effect
      modelRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime) * 0.2;

      // Clamp Z-axis Movement
      const minZ = -5;
      const maxZ = 2;
      modelRef.current.position.z = Math.max(minZ, Math.min(maxZ, minZ + scrollRef.current * (maxZ - minZ)));

      // Apply transition opacity to all meshes in the current model
      if (currentModel) {
        currentModel.traverse(child => {
          if (child.isMesh && child.material && child.material.transparent) {
            child.material.opacity = transitionProgress;
          }
        });
      }

      // Fade out previous model if it exists
      if (previousModel && previousModelRef.current) {
        previousModelRef.current.traverse(child => {
          if (child.isMesh && child.material && child.material.transparent) {
            child.material.opacity = 1 - transitionProgress;
          }
        });
      }
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
      {/* Render previous model during transition */}
      {previousModel && transitionProgress < 1 && (
        <primitive 
          object={previousModelRef.current} 
          scale={scale} 
          position={position} 
          castShadow 
          receiveShadow 
          pointerEvents="none" 
        />
      )}
      {/* Render current model */}
      {currentModel && (
        <primitive 
          ref={modelRef} 
          object={currentModel} 
          scale={scale} 
          position={position} 
          castShadow 
          receiveShadow 
          pointerEvents="none" 
        />
      )}
    </>
  );
}
