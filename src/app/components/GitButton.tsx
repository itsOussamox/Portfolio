import Link from "next/link";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { div } from "three/examples/jsm/nodes/Nodes.js";

export default function GetInTouch(){
    return (
            <Link href={"#Contact"} type="button"
                    className=" w-[23%] h-[10%] flex items-center justify-center 
                    sm:gap-[3%] max-sm:gap-[4%] mb-[10px] ml-[12%] text-black bg-gradient-to-r
                     from-blueOne via-blueTwo to-blueThree rounded-3xl">
                <span className="font-thin text-sm sm:text-xl md:text-2xl lg:text-2xl
                max-sm:text-end max-sm:w-[50%] max-sm:mr-[5%]">Get In Touch</span>
                <TfiArrowCircleRight className="text-black"/>
            </Link>
    )
}