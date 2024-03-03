import Laptop from "./Laptop";
import Image from 'next/image'
import { HighlightProps } from "@/app/components/HeaderBanner";
import OpenTab from "@public/OpenTab.svg"
import Link from "next/link";

const Highlight = ({ children, className }: HighlightProps) => {
    return (
    <Link href={"https://peach-shauna-85.tiiny.site/"} target={"_blank"}>
      <span
        className={`${className} font-bold bg-gradient-to-r from-blueOne via-blueTwo to-blueThree
        bg-clip-text textTransparent font-gilroy cursor-pointer`}>
        {children}
      </span>
    </Link>
    );
  };

function BioText(){
    return (
        <div className="text-center  sm:max-w-[40%] flex flex-col">
            <div>
                <h1 className="text-4xl">About <span className="text-purple-500">Me</span>.</h1>
                <p className="text-xl">My true joy lies in creating dynamic and interactive web experiences. From eye-catching animations to seamless transitions,
                I believe in making the digital world an exciting place to explore.</p>
            </div>
            <div className="flex  justify-center gap-[1%] mt-[3%] ">
                <Highlight className="font-gilroy sm:text-3xl md:text-3xl lg:text-4xl cursor-pointer">View My Resume</Highlight>
                <Link href="https://peach-shauna-85.tiiny.site/" target="_blank">
                    <Image src={OpenTab} alt="OpenTab" className="h-[80%]" />
                </Link>
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