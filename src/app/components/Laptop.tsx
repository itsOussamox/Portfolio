'use client';
import { Grow } from "@mui/material";
import { useInView } from "@react-spring/web";
import { Canvas } from "@react-three/fiber";
import Spline, { SPEObject } from '@splinetool/react-spline';

export default function Laptop(){
    const [ref, InView] = useInView();
    return (
        <Grow in={InView} timeout={600}>
            <div className="sm:grow sm:h-full h-[150px] min-h-[100px]">
                <Spline ref={ref} className="h-full w-full"
                scene="https://prod.spline.design/vJh4Z3mgXI5iOXY1/scene.splinecode"/>
            </div>
        </Grow>
    )
}