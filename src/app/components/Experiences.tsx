import { Si42 } from "react-icons/si";

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

function VLine(){
    return (
        <div className="w-[2px] h-[20%] bg-gradient-to-b from-transparent via-gray-300 to-white"/>
    )
}

function Circlogo(){
    
    return (
        <div className="w-[100px] h-[100px] max-sm:h-[50px] max-sm:w-[50px] rounded-full border border-white flex flex-col items-center justify-center">
            <Si42  className="h-[75%] w-[75%] mr-[5%]"/>
        </div>
    )
}

function ContainerExp(){
    return (
        <div className="h-[800px] w-full  flex flex-col items-center mt-[2%]">
            <VLine />
            <Circlogo />
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