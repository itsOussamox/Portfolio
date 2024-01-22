import { Highlight } from "./HeaderBanner";
import Laptop from "./Laptop";
import Image from 'next/image'
import OpenTab from "@public/OpenTab.svg"

function BioText(){
    return (
        <div className="text-center  sm:max-w-[40%] flex flex-col">
            <div>
                <h1 className="text-4xl">A <span className="text-purple-500">Passion</span>.</h1>
                <p className="text-xl">My true joy lies in creating dynamic and interactive web experiences. From eye-catching animations to seamless transitions,
                I believe in making the digital world an exciting place to explore.</p>
            </div>
            <div className="flex  justify-center gap-[1%] mt-[3%] ">
                <Highlight className="font-gilroy sm:text-3xl md:text-3xl lg:text-4xl">View My Projects</Highlight>
                <Image src={OpenTab} alt="OpenTab" className="h-[80%]" />
            </div>
        </div>
    )
}


export default function Bio(){
    return (
       <div id="About" className="flex flex-col sm:flex-row items-center w-full mr-[2%]">
        <Laptop />
        <BioText />
       </div>
    )
}