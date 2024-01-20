import { Si42 } from "react-icons/si";
import Job from "./Job";

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

function ContainerExp(){
    return (
        <div className="h-[800px] w-full mt-[5%] gap-[3%] flex justify-center">
            <Job/>
            <MiddleLine/>
            <div className="w-[30%] flex flex-col h-full max-sm:hidden">
                <div className="h-[20%]"/>
                <div className="h-[100px] text-center flex flex-col justify-center items-center text-5xl whitespace-nowrap box">NOV 2021 - Present</div>
            </div>
        </div>
    )
}


export default function Experiences(){
    return (
        <div className="mt-[40px] h-[800px]">
            <HeadExp />
            <ContainerExp />
        </div>
    )
}