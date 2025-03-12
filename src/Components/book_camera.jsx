import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";

const CameraControl = () => {
    const { camera } = useThree();
    useEffect(() => {
        camera.fov = 75;
        camera.updateProjectionMatrix();
        camera.position.set(5, 4, 15);
        camera.lookAt(0, 0, 0);
        camera.far = 500;
        camera.near = 0.1;
    }, [camera]);           
    return null;
};

const BookCamera = ({ LazyName1 }) => { 
    return (
        <div style={{ 
            position: "absolute", 
            top: "5%",  
            width: "100vw",
            height: "100vh", 
            zIndex: 1000, 
            transform: "translateY(2200px)",
            
             
        }}>
            <Canvas style={{ width: "100%", height: "100%" }}>
                <Suspense fallback={null}>
                    <LazyName1 position={[10, 3, 2]} />
                </Suspense>
                <CameraControl />
            </Canvas>
        </div>
    );
};

export default BookCamera; 