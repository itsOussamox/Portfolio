'use client';
import { Canvas } from "@react-three/fiber";
import Spline, { SPEObject } from '@splinetool/react-spline';

export default function Laptop(){
    return (
        <div className="sm:grow sm:h-full h-[150px] min-h-[100px]">
            <Spline className="h-full w-full"
            scene="https://prod.spline.design/vJh4Z3mgXI5iOXY1/scene.splinecode"
            />
        </div>
    )
}