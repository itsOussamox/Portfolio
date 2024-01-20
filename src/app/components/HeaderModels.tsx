import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Atom from "./Atom";
import { Environment, Stage } from "@react-three/drei";
import {Github, React, Twitter} from "./Models";

export default function HeaderModels(){
    return (
        <>
            <Suspense fallback={null}>
                <Twitter />
                <Github />
                <React />
            </Suspense>
        </>
    )
}