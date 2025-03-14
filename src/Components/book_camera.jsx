import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect, useState } from "react";

const CameraControl = ({ isMobile, isTablet }) => {
    const { camera } = useThree();
    useEffect(() => {
        // Adjust camera settings based on device type
        camera.fov = isMobile ? 85 : isTablet ? 80 : 75;
        camera.updateProjectionMatrix();
        
        // Adjust camera position based on device type
        const xPos = isMobile ? 6 : isTablet ? 5 : 5;
        const yPos = isMobile ? 3 : isTablet ? 3.5 : 3;
        const zPos = isMobile ? 18 : isTablet ? 16 : 15;
        
        camera.position.set(xPos, yPos, zPos);
        camera.lookAt(0, 0, -2);
        camera.far = 500;
        camera.near = 0.1;
    }, [camera, isMobile, isTablet]);           
    return null;
};

const BookCamera = ({ LazyName1 }) => { 
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const isMobile = windowWidth < 768;
    const isTablet = windowWidth >= 768 && windowWidth < 1024;

    return (
        <div style={{ 
            position: "absolute", 
            top: isMobile ? "3%" : isTablet ? "4%" : "5%",  
            width: "100vw",
            height: isMobile ? "90vh" : isTablet ? "95vh" : "100vh", 
            zIndex: 3000, 
            transform: isMobile ? "translateY(2200px)" : isTablet ? "translateY(2200px)" : "translateY(2200px)",
        }}>
            <Canvas style={{ width: "100%", height: "100%" }}>
                <Suspense fallback={null}>
                    <LazyName1 
                        position={isMobile ? [8, 2, 2] : isTablet ? [9, 2.5, 2] : [10, 3, 2]} 
                        scale={isMobile ? 0.8 : isTablet ? 0.9 : 1}
                    />
                </Suspense>
                <CameraControl isMobile={isMobile} isTablet={isTablet} />
            </Canvas>
        </div>
    );
};

export default BookCamera;