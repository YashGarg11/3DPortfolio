import React from 'react';

// Check if we're in a browser environment
const isBrowser = typeof window !== 'undefined';

// Check if React is properly initialized
const isReactAvailable = typeof React !== 'undefined' && React !== null;

// Import animated components only if in browser
let a;
if (isBrowser && isReactAvailable) {
  try {
    // Dynamic import to avoid SSR issues
    const reactSpring = require('@react-spring/three');
    a = reactSpring.a;
  } catch (error) {
    console.error('Error importing @react-spring/three:', error);
    // Provide fallback components
    a = {
      ambientLight: 'ambientLight',
      directionalLight: 'directionalLight',
      group: 'group',
      mesh: 'mesh'
    };
  }
} else {
  // Fallback for SSR
  a = {
    ambientLight: 'ambientLight',
    directionalLight: 'directionalLight',
    group: 'group',
    mesh: 'mesh'
  };
}

export const SafeAnimated = {
  ambientLight: isBrowser && isReactAvailable && a ? a.ambientLight : 'ambientLight',
  directionalLight: isBrowser && isReactAvailable && a ? a.directionalLight : 'directionalLight',
  group: isBrowser && isReactAvailable && a ? a.group : 'group',
  mesh: isBrowser && isReactAvailable && a ? a.mesh : 'mesh',
  // Add more as needed
}; 