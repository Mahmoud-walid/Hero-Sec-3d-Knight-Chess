import { OrbitControls } from '@react-three/drei';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  ChessKnightInstances,
  ChessKnightModel,
} from './models/ChessKnightModel';
import { useRef } from 'react';
import type { Group } from 'three';

const OrbitLikeKnight: React.FC = () => {
  const groupRef = useRef<Group>(null);
  const elapsedTime = useRef(0);

  const introDuration = 2.3;
  const introRotations = 4;
  const finalSpeed = 0.1;

  useFrame((_, delta) => {
    elapsedTime.current += delta;
    const t = Math.min(elapsedTime.current / introDuration, 1);
    const easeOut = 1 - Math.pow(1 - t, 3);

    const currentSpeed =
      introRotations * 2 * Math.PI * (1 - easeOut) +
      finalSpeed * 2 * Math.PI * easeOut;

    if (groupRef.current) {
      groupRef.current.rotation.y += currentSpeed * delta;
    }
  });

  return (
    <group ref={groupRef}>
      <ChessKnightModel
        scale={[1, 1, 1]}
        position={[-0.02, -0.01, -0.01]}
        rotation={[0, -0.39, 5.89]}
      />
    </group>
  );
};

const ModelCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0.008, -0.028, 0.137], fov: 50 }}
      className="h-full"
    >
      <ambientLight intensity={0.3} />
      <directionalLight
        position={[0, 0.2, -0.2]}
        intensity={2.5}
        color={'#ffffff'}
        castShadow
      />
      <pointLight position={[0, 0.2, 0.2]} intensity={0.4} color="#ffffff" />
      <hemisphereLight
        intensity={0.5}
        color={'#ffffff'}
        groundColor={'#000000'}
      />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2}
        maxPolarAngle={Math.PI / 2}
      />

      <ChessKnightInstances>
        <OrbitLikeKnight />
      </ChessKnightInstances>
    </Canvas>
  );
};

export default ModelCanvas;
