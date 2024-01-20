import React, { useMemo } from "react";
import { Line, Sphere } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { useFrame } from "@react-three/fiber";

// You can draw the shape in this way if do not want to import a ready-to-use 3D model.
const Shape = () => {
  const atomRef = React.useRef<THREE.Group>(null!);
  useFrame((state, delta) => {
    atomRef.current.rotation.y += delta;
    atomRef.current.rotation.x += delta;
  });
  const points = useMemo(
    () =>
      new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(
        100
      ),
    []
  );
  return (
    <group ref={atomRef} position={[4,10,-25]}>
      <Line worldUnits points={points} color="#61DBFB" lineWidth={0.3} />
      <Line
        worldUnits
        points={points}
        color="#61DBFB"
        lineWidth={0.3}
        rotation={[0, 0, 1]}
      />
      <Line
        worldUnits
        points={points}
        color="#61DBFB"
        lineWidth={0.3}
        rotation={[0, 0, -1]}
      />
      <Sphere args={[0.55, 64, 64]}>
        <meshBasicMaterial color={[0.613, 0.9, 9]} toneMapped={false} />
      </Sphere>
    </group>
  );
};

const Atom = () => {
  return (
    <>
      <Shape />
      <EffectComposer>
        <Bloom  luminanceThreshold={1} radius={0.7} />
      </EffectComposer>

    </>
  );
};

export default Atom;



