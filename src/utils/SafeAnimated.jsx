import { a } from '@react-spring/three';

// In SSR environments, return a standard component
// In browser environments, return the animated version
const isBrowser = typeof window !== 'undefined';

export const SafeAnimated = {
  ambientLight: isBrowser ? a.ambientLight : 'ambientLight',
  directionalLight: isBrowser ? a.directionalLight : 'directionalLight',
  group: isBrowser ? a.group : 'group',
  mesh: isBrowser ? a.mesh : 'mesh',
  // Add more as needed
}; 