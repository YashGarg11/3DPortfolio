import { useSpring } from '@react-spring/three';

// Custom hook to handle useSpring safely
const useIsomorphicSpring = (props) => {
  // Make sure window exists to prevent SSR issues
  if (typeof window === 'undefined') {
    // Return a default object with the expected properties
    return {
      lightIntensity: 0,
      scale: 1,
      // Add other default values as needed
    };
  }
  
  // Client-side: use normal useSpring
  return useSpring(props);
};

export default useIsomorphicSpring; 