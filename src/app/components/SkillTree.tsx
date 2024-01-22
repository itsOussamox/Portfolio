'use client';
import { OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useRef } from "react";

function SkillSphere(){
    const sphereRef = useRef<THREE.Mesh>(null!);
    useFrame((state, delta) => {
        sphereRef.current.rotation.y += delta;
    })
    return (
        <mesh ref={sphereRef} position={[0,0,0]}>
            <sphereGeometry args={[10, 15, 4]} />
            <meshPhongMaterial color='#FFFFFF'/>
        </mesh>
    )
}

export default function SkillTree(){
    return (
        <Canvas shadows>
            <ambientLight intensity={0.5}/>
            <pointLight position={[0, 1, 10]} color={"white"} intensity={1000}/>
            <SkillSphere />
            <OrbitControls />
        </Canvas>   
    )
}