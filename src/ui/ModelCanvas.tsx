import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import {
  ChessKnightInstances,
  ChessKnightModel,
} from './models/ChessKnightModel';

const ModelCanvas = () => {
  return (
    <Canvas
      camera={{ position: [0.008, -0.028, 0.137], fov: 50 }}
      className="h-full"
    >
      <ambientLight intensity={0.9} />
      <directionalLight intensity={1} />
      <hemisphereLight
        intensity={1}
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
        <ChessKnightModel
          scale={[1, 1, 1]}
          position={[-0.02, -0.01, -0.01]}
          rotation={[0, -0.39, 5.89]}
        />
      </ChessKnightInstances>
    </Canvas>
  );
};

export default ModelCanvas;
