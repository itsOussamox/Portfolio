'use client';
import { useEffect, useRef, useState } from 'react';
import Globe, { GlobeMethods } from 'react-globe.gl';
export default function Earth(){
    const globeRef = useRef<GlobeMethods>(null!);
    const [sWidth, setScreen] = useState((window.innerWidth > 919 ? 919 : window.innerWidth));
    useEffect(() => {
        const g = globeRef.current;
        if (g) {
            g.controls().autoRotate = true;
            g.controls().enableZoom = false;
            g.controls().autoRotateSpeed = 0.5;
            g.pointOfView({lat: 0, lng: 0, altitude: 1.7});
        }
        window.addEventListener('resize', () => {
            var width = window.innerWidth;
            if (width > 919)
                width = 919;
            setScreen(width);
        });     
        return () => window.removeEventListener('resize', () => {});
    }, []);
    return (
       <div className='absolute top-1/4 left-[60%] max-sm:left-[50%] max-sm:top-[5%]'>
            <Globe
            height={sWidth/1.5}
            width={sWidth/1.5}
            ref={globeRef}
            backgroundColor="rgba(0,0,0,0)"
            globeImageUrl={"//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"}/>
       </div>
    )
}