import Link from "next/link";
import { TfiArrowCircleRight } from "react-icons/tfi";
import { motion } from "framer-motion";
export default function GetInTouch(){
    return (
            <motion.div
            whileTap={{scale: 0.9}}
            className="w-[23%] h-[12%] max-sm:w-[53%] max-sm:ml-[21.2%] bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-3xl  max-sm:mb-[15px] sm:ml-[12%] ">
            <Link href={"#Contact"} type="button" 
            className="flex items-center justify-center h-full w-full sm:gap-[3%] max-sm:gap-[3%] text-black">
                    <span className="font-regular text-sm sm:text-xl md:text-2xl lg:text-2xl
                    max-sm:text-center max-sm:w-[80%]  get-in-size whitespace-nowrap">Get In Touch</span>
                    <TfiArrowCircleRight className="text-black "/>
                </Link>
            </motion.div>
    )
}