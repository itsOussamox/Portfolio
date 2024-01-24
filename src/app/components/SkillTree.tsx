'use client';
import { Decal, Float, Image, OrbitControls, ScreenSpace, Text, useTexture } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { animated, useSpring } from "@react-spring/three";
import { degToRad } from "three/src/math/MathUtils.js";


function SkillSphere(props : JSX.IntrinsicElements['mesh'] & {skill : string} & {decalPos : [number, number, number]}){
    const sphereRef = useRef<THREE.Mesh>(null!);
    const [reactTexture] = useTexture([props.skill]);
    const [isHover, setIsHover] = useState(false);
    const textRef = useRef<THREE.Mesh>(null!);
    const aniprops = useSpring({
        scale: isHover ? [1.5, 1.5, 1.5] : [1, 1, 1] ,
    })
    useFrame((state, delta) => {
        if(isHover)
            textRef.current.lookAt(state.camera.position);
    })
    return (
        <>
            {isHover && 
            (<Text ref={textRef} color="white" anchorX="center" anchorY="top">
                    {props.skill.split('/')[2].split('.')[0]}
            </Text>)
            }
            <animated.mesh ref={sphereRef} {...props} scale={aniprops.scale as any}  receiveShadow castShadow
            onPointerEnter={()=>{setIsHover(true)}}
            onPointerLeave={()=>{setIsHover(false)}}
            >
                <icosahedronGeometry args={[1.5, 1]}  />
                <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading/>
                <Decal position={props.decalPos} rotation={[2 * Math.PI, 0, 0]} scale={2} map={reactTexture}/>
            </animated.mesh>
        </>
    )
}

function SkillPlane(){
    const firstOrbit = useRef<THREE.Group>(null!);
    const secondOrbit = useRef<THREE.Group>(null!);
    // create an array of skills string
    const left = useRef<boolean>(false);
    const right = useRef<boolean>(false);
    // const circleRef = useRef<THREE.Mesh>(null!);
    const skills = ['./skills/React.svg', './skills/ThreeJS.svg', './skills/SocketIO.svg',
    './skills/Tailwind.svg', './skills/TypeScript.svg', './skills/Javascript.svg'];
    const skillsPos : any = [[0.05, 0.25, 1],[0.1, 0, 1],[0.2, 0, 1],
    [0.15, 0.20, 0.5],[0.1, 0.3, 1],[-0, 0.3, 1]];


    const skills2 = ['./skills/C++.svg', './skills/Git.svg', './skills/NextJs.svg',
    './skills/NestJs.svg'];
    const skillsPos2 : any = [[-0.2, 0.1, 1],[-0, -0.2, 1],[0.3, 0.1, 1],
    [-0, 0.3, 1]];

    // add event listener if d is pressed right is true and left is false
    // useEffect(() => {
    //     document.addEventListener('keydown', (e) => {
    //         if(e.key === 'd')
    //             right.current = true;
    //         if(e.key === 'a')
    //             left.current = true;
    //     })
    //     document.addEventListener('keyup', (e) => {
    //         if(e.key === 'd')
    //             right.current = false;
    //         if(e.key === 'a')
    //             left.current = false;
    //     })
    //     return () => {
    //         document.removeEventListener('keydown', () => {})
    //         document.removeEventListener('keyup', () => {})
    //     }
    // })
   

    useFrame((state, delta) => {
        if (right.current){
            state.camera.position.x += delta * 2;
        }
        if (left.current){
            state.camera.position.x -= delta * 2;
        }
        firstOrbit.current.rotation.z += delta *0.2;
        secondOrbit.current.rotation.z += delta *0.3;
    })
    return (
        <>
        <group ref={secondOrbit} position={[0, 0,-17]} rotation={[0,0, 0]}>
            <mesh rotation={[0, 0, 0]} >
                <torusGeometry  args={[12, 0.01, 30,200]}  />
                <lineBasicMaterial color="#ffff8f" />
            </mesh>
        {[...Array(4)].map((_, index) => {
            const radius = 12;
            const angle = (index / 6) * Math.PI * 3;
            return (
                <SkillSphere 
                key={index}
                position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
                skill={skills2[index]}
                decalPos={skillsPos2[index]}
                />
                );
            })}
        </group>
        <group ref={firstOrbit} position={[0, 0,-16]}>
            <mesh rotation={[0, 0, 0]} >
                <torusGeometry  args={[7, 0.01, 30,200]}  />
                <lineBasicMaterial color="#ffff8f" />
            </mesh>
        {[...Array(6)].map((_, index) => {
            const radius = 7;
            const angle = (index / 6) * Math.PI * 2;
            
            return (
                <SkillSphere 
                key={index}
                position={[Math.cos(angle) * radius, Math.sin(angle) * radius, 0]}
                skill={skills[index]}
                decalPos={skillsPos[index]}
                />
                );
            })}    
        </group>
        </>
    )
}

export default function SkillTree(){
    return (
        <Canvas shadows>
            <ambientLight intensity={0.25}/>
            <pointLight position={[7, 5, 10]} color={"white"} intensity={1000}/>
            <SkillPlane />
            {/* <OrbitControls enableZoom={false}/> */}
        </Canvas>   
    )
}