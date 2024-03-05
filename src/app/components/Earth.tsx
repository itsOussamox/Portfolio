"use client";
import React, { Suspense, useEffect, useLayoutEffect, useRef, useState, forwardRef } from 'react';
import { GlobeMethods } from 'react-globe.gl';
import dynamic from 'next/dynamic';
// import Globe from 'react-globe.gl';
// const Globe = React.lazy(() => import('react-globe.gl'),);
const Globe = dynamic(() => import("./Globe"), {
    ssr: false,
  })
const Globee = forwardRef((props: any, ref) => (
    <Globe {...props} forwardRef={ref} />
  ))
// Globe = forwardRef((props: any, ref) => (
//     <GlobeTmpl {...props} forwardRef={ref} />
//   ))
export default function Earth(){
    const globeRef = useRef<any>(null!);
    const [sWidth, setScreen] = useState(1024);
    const [globeReady, setGlobeReady] = useState(false);
    const handleResize = () => {
        var width = 1048
        if (typeof window !== 'undefined')
        width = window.innerWidth;
        if (width > 919)
            width = 919;
        setScreen(width);
    }
    useEffect(() => {
        if (globeReady)
        console.log ("Globe Ready" )
        if (globeRef.current) {
            globeRef.current.controls().autoRotate = true;
            globeRef.current.controls().enableZoom = false;
            globeRef.current.controls().autoRotateSpeed = 0.5;
            globeRef.current.pointOfView({ lat: 0, lng: 0, altitude: 1.7 });
        }
      }, [globeReady]);

    useEffect(() => {
        handleResize();
        if (typeof window !== 'undefined')
            window.addEventListener('resize', handleResize);     
        return () => {window.removeEventListener('resize', handleResize)};
    }, []);
    return (
       <div className='absolute top-1/4 left-[60%] max-sm:left-[50%] max-sm:top-[5%]'>
        <Suspense fallback={<div>Loading...</div>}>
            <Globee
            onGlobeReady={() => setGlobeReady(true)}
            height={sWidth/1.5}
            width={sWidth/1.5}
            ref={globeRef}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl={"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"}/>
        </Suspense>
       </div>
    )
}