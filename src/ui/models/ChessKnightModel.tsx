import * as THREE from 'three';
import React, {
  useMemo,
  useContext,
  createContext,
  type JSX,
  type ReactNode,
  type PropsWithChildren,
} from 'react';
import { useGLTF, Merged, type InstanceProps } from '@react-three/drei';
import { type GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    Object_4: THREE.Mesh;
    Object_6: THREE.Mesh;
  };
  materials: {
    White_Square: THREE.MeshStandardMaterial;
    Black_Square: THREE.MeshStandardMaterial;
  };
};

type KnightInstances = {
  Object: React.FC<InstanceProps>;
  //   Object1: React.FC<InstanceProps>;
};

const ModelContext = createContext<KnightInstances | null>(null);
export function ChessKnightInstances({
  children,
}: PropsWithChildren): JSX.Element {
  const glb = useGLTF('/models/knight.glb');
  const nodes = glb?.nodes as GLTFResult['nodes'];
  const instances = useMemo(
    () => ({
      Object: nodes.Object_4,
      //   Object1: nodes.Object_6,
    }),
    [nodes],
  );
  return (
    <Merged meshes={instances}>
      {(instances): ReactNode => (
        <ModelContext.Provider value={instances as unknown as KnightInstances}>
          {children}
        </ModelContext.Provider>
      )}
    </Merged>
  );
}

export function ChessKnightModel(props: JSX.IntrinsicElements['group']) {
  const instances = useContext(ModelContext);
  if (!instances) {
    throw new Error('Model must be used within a ChessKnightInstances');
  }

  return (
    <group {...props} dispose={null}>
      <instances.Object position={[0.025, 0, 0]} scale={1.035} />
      {/* <instances.Object1 position={[-0.022, 0, 0]} scale={1.035} /> */}
    </group>
  );
}

useGLTF.preload('/models/knight.glb');
