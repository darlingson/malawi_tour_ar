import React, { useRef, useEffect } from 'react';
import 'aframe';
import 'aframe-ar';

const ARPage: React.FC = () => {
  const arToolkitSourceRef = useRef<any>();
  const arToolkitContextRef = useRef<any>();

  useEffect(() => {
    const initializeAR = () => {
      // Set up AR.js
      const scene = arToolkitContextRef.current?.baseScene;

      // Add your AR content (e.g., a cube)
      const cube = document.createElement('a-box');
      cube.setAttribute('position', '0 0 0');
      cube.setAttribute('material', 'color: #00ff00');
      scene?.appendChild(cube);
    };

    initializeAR();
  }, []);

  const handleSceneLoad = () => {
    // AR.js initialized
    arToolkitSourceRef.current = arSceneRef.current?.components.arjs.arToolkitSource;
    arToolkitContextRef.current = arSceneRef.current?.components.arjs.arToolkitContext;
  };

  const arSceneRef = useRef<AFrame.Scene | null>(null);

  return (
    <div>
      <a-scene
        embedded
        arjs={`sourceType: webcam;`}
        vr-mode-ui="enabled: false"
        ref={(el: { addEventListener: (arg0: string, arg1: () => void) => void; }) => {
          arSceneRef.current = el;
          if (el) {
            el.addEventListener('loaded', handleSceneLoad);
          }
        }}
      >
        <a-marker preset="hiro"></a-marker>
        <a-camera-static />
      </a-scene>
    </div>
  );
};

export default ARPage;
