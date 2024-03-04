'use client';
import { useEffect } from "react"
import textFit from "textfit"
import OpenTab from "@public/OpenTab.svg"
import Image, { StaticImageData } from 'next/image'
import Pong from "@public/pong.png"
import Cube from "@public/cubed.png"
import Webserv from "@public/webserv.png"
import Link from "next/link";
interface ProjectProps {
    children?: React.ReactNode;
    pTitle?: string;
    pImage?: string | StaticImageData;
    pDescription?: string;
    pLink? : string;
    pType?: string;
}

function Tool({tool} : {tool: string}){
    return (
        <div><h1 className="font-semibold tools max-[1100px]:text-xs max-[1200px]:text-sm max-[1350px]:text-base text-lg text-[#915DFF]">{tool}</h1></div>
    )
}


function Project(props : ProjectProps){
    useEffect(() => {
        textFit(document.getElementsByClassName('tools'))
        window.addEventListener('resize', () => {
            textFit(document.getElementsByClassName('tools'))
        })
        return (
            window.removeEventListener('resize', () => {})
        )
    }, [])
    return (
        <div className="mt-[2px] min-w-[319px] overflow-hidden  relative snap-center snap-always first:pl-8 last:pr-8 shrink-0 w-[45%] bg-bannerColor h-[95%] flex flex-col rounded-2xl outline outline-1 outline-white/[0.3] ">
            <h1 className="text-[#12A2FF] text-lg font-semibold mt-[2%] ml-[2%]">{props.pType}</h1>
            <h1 className="text-white text-3xl font-semibold mt-[1%] ptitle ml-[3%]">{props.pTitle}</h1>
            <div className="mt-[5%] w-[85%] h-[50%] outline outline-1 outline-white/[0.3] shadow-2xl mx-auto rounded-xl">
                <Image src={props.pImage as string} alt="project" className="h-full w-full rounded-xl"/>
            </div>
            <div className="mt-[5%] ml-[3%] h-[10%] w-[95%]">
                <h1 className="text-white h-full w-full font-extralight tracking-[1%]">{props.pDescription}</h1>
            </div>
            <div className="relative flex ml-[3%]  items-center w-[100%] h-[10%] my-auto gap-[3%] ">
                {props.children}
                <div className="flex items-center justify-end w-full h-full overflow-hidden mr-[5%]">
                    <Link href={props.pLink as string} target="_blank">
                        <Image src={OpenTab} alt="redirect" className=" "/>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default function Projects(){
    return (
        <div  className="w-full h-[800px] max-sm:h-[450px] relative">
            <div className="ml-[2%] max-sm:ml-[6%] text-4xl sm:text-6xl md:text-6xl lg:text-7xl">My Projects</div>
            <div className="absolute bottom-0 left-0 rounded-full h-[50%] w-[30%] bg-[#12A2FF] blur-[350px] opacity-[0.3]"/>
            <div id="Projects" className="mt-[3%] overflow-scroll overflow-y-hidden gap-6 no-scrollbar flex h-[650px] max-sm:h-[400px] w-full snap-x snap-mandatory relative "> 
                <div className="snap-start shrink-0 w-[15%] h-[95%] "></div>
                
                <Project pTitle="ft_transcendence"
                pDescription="This is my last project at 42, a multiplayer pong game with a lot of features like a chat,
                a bot system, a tournament system, and a lot more."
                pImage={Pong}
                pType="Web Project"
                pLink="https://github.com/itsOussamox/ft_transcendence">
                    <Tool tool="NextJS"/>
                    <Tool tool="NestJS"/>
                    <Tool tool="React"/>
                    <Tool tool="Tailwind"/>
                    <Tool tool="MatterJS"/>
                    <Tool tool="SocketIO"/>
                </Project>

                <Project pTitle="Cube3D"
                pDescription="A Simple 3D Game using C, implementing the raycasting rendering technology inspired by Wolfeinstein3D"
                pImage={Cube}
                pType="C Project"
                pLink="https://github.com/itsOussamox/CUB3D"
                >
                    <Tool tool="C"/>
                    <Tool tool="Raycasting"/>
                    <Tool tool="OpenGL"/>
                    <Tool tool="MLX"/>
                </Project>

                <Project pTitle="Webserv"
                pDescription="42 project, recoding our own web server in C++.
                A program capable of running an HTTP server, handling requests, and parsing configuration files."
                pType="C++ Project"
                pLink="https://github.com/TooFatToKidnapp/webserv"
                pImage={Webserv}
                >
                    <Tool tool="C++"/>
                    <Tool tool="HTTP"/>
                    <Tool tool="CGI"/>
                    <Tool tool="Socket"/>
                </Project>
                <div className="snap-end shrink-0 w-[20%] h-[95%] "></div>
            </div>
        </div>
    )
}