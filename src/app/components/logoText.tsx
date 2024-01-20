'use client';
import { Canvas, useFrame } from "@react-three/fiber";
import {Center, Environment, FontData, GradientTexture, Text3D} from '@react-three/drei';
import { Suspense, useRef } from "react";
import textFont from '../../../public/fonts/GilroyTypeFace.json';
// function Boxy( props: any ){
//     const meshRef = useRef<THREE.Mesh>(null!);
//     useFrame((state,delta) => {meshRef.current.rotation.x += delta;});
//     return (
//         <mesh ref={meshRef}>
//                 <boxGeometry args={[1, 1, 1]} />
//                 <meshStandardMaterial color="hotpink" />
//         </mesh>
//     )
// }

function TextHandler(){
    const textRef = useRef<THREE.Mesh>(null!);
    useFrame((state,delta) => {
        textRef.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.2;
    });

    return (
        <Center>
            {/* <pointLight position={[20, 10, 20]} color={'white'}  intensity={2500}/> */}
            <Environment preset="dawn" />
            <Text3D ref={textRef} rotation={[0,-0.35,0]} position={[0,0,-0.5]} scale={2.5} font={textFont as any} receiveShadow>OB
                <meshBasicMaterial>
                <GradientTexture
                    stops={[0, 1]} // As many stops as you want
                    colors={['#93faba', '#82e0f9']} // Colors need to match the number of stops
                    size={1024} // Size is optional, default = 1024
                    />
                </meshBasicMaterial>
            </Text3D>
        </Center>
    )
}

export default function LogoText(){
    
    return (
        <Canvas shadows>
            {/* <color attach="background" args={['transparent']} /> */}
            {/* <ambientLight /> */}
            <TextHandler />
        </Canvas>
    )
}