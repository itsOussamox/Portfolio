'use client';
import { Si42 } from "react-icons/si";
import Job from "./Job";
import { useInView } from "@react-spring/web";
import { Slide } from "@mui/material";

function HLine({direction = 'bg-gradient-to-r'}){

    return (
        <div className={`h-[1px] mt-[2px] w-[20%] ${direction} from-transparent via-gray-300 to-white`}/>
    )
}

function HeadExp(){
    return (
            <div className="flex flex-row justify-center items-center gap-[2%]">
                <HLine direction='bg-gradient-to-r'/>
                    <h1 className="sm:text-6xl md:text-6xl lg:text-7xl text-center">My Experiences</h1>
                <HLine direction="bg-gradient-to-l"/>
            </div>
    )
}

function VLine({direction = ''}){
    return (
        <div className={`w-[2px] h-[20%] ${direction} from-transparent via-gray-300 to-white`}/>
    )
}

function Circlogo(){
    
    return (
        <div className="w-[100px] h-[100px] max-sm:h-[50px] max-sm:w-[50px] rounded-full border border-white flex flex-col items-center justify-center">
            <Si42  className="h-[75%] w-[75%] mr-[5%]"/>
        </div>
    )
}

function MiddleLine(){
    return (
        <div className="flex flex-col items-center max-sm:w-[50px] w-[100px] h-full">
            <VLine direction="bg-gradient-to-b" />
            <Circlogo />
            <VLine direction="bg-gradient-to-t grow"/>
        </div>
    )    
}


function Timeline(){
    const [ref, InView] = useInView();
    return (
        <div ref={ref} className="w-[30%] flex flex-col h-full max-sm:hidden">
                    <div className="h-[20%] max-sm:hidden"/>
                <Slide direction='left' in={InView} timeout={600}>
                    <div className="h-[100px] max-md:text-xl max-lg:text-3xl max-xl:text-4xl text-5xl
                    w-full text-center flex flex-col justify-center items-center text-5 whitespace-nowrap max-sm:hidden">NOV 2021 - Present
                    </div>
                </Slide>
            </div>
    )
}

function ContainerExp(){
    return (
        <div className="relative h-[600px] max-sm:h-[300px] w-full mt-[5%] gap-[3%] flex justify-center">
            <div className="absolute right-[-3%] top-[50%] w-[30%] h-[30%] bg-[#915DFF] blur-[300px] opacity-[.5]"></div>
            <Job/>
            <MiddleLine/>
            <Timeline/>
        </div>
    )
}


export default function Experiences(){
    return (
        <div id="Experience" className="mt-[40px] h-[800px] max-sm:h-[400px]">
            <HeadExp />
            <ContainerExp />
        </div>
    )
}