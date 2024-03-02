'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { GlobeMethods } from 'react-globe.gl';
import dynamic from 'next/dynamic';

const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });
export default function Earth(){
    const globeRef = useRef<GlobeMethods>(null!);
    const [sWidth, setScreen] = useState(1024);

    const handleResize = () => {
        var width = 1048
        if (typeof window !== 'undefined')
        width = window.innerWidth;
        if (width > 919)
            width = 919;
        setScreen(width);
    }
    useLayoutEffect(() => {
        const g = globeRef.current;
        handleResize();
        if (g) {
            g.controls().autoRotate = true;
            g.controls().enableZoom = false;
            g.controls().autoRotateSpeed = 0.5;
            g.pointOfView({lat: 0, lng: 0, altitude: 1.7});
        }
        
        if (typeof window !== 'undefined')
            window.addEventListener('resize', handleResize);     
        return () => {window.removeEventListener('resize', handleResize)};
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