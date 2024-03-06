'use client';
import LogoText from '@/app/components/logoText';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';
import {motion} from 'framer-motion';

export default function HeaderBar (){
    return (
        <div className='w-full flex flex-row sm:gap-[5%] items-center mt-[1%]  max-sm:justify-between'>
            <div className="flex w-[11%] h-[100px] sm:ml-[0.5%] max-sm:mt-[2%] max-sm:w-[25%] max-sm:h-[80px]">
                <LogoText/>
            </div>
            <div className="flex flex-row font-normal grow text-lg gap-[8%] justify-start items-center max-sm:hidden">
                <Link scroll={false} href={"/About"} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });}}
                ><motion.div style={{height: "100%", width: "100%"}}
                whileHover={{ borderBottom: "1px solid white", transition: {type: "spring", stiffness: 300, duration: 0.5}}}
                >About</motion.div></Link>
                <Link href={"#Skills"} scroll={false} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("Skills")?.scrollIntoView({ behavior: "smooth" });}}
                ><motion.div style={{height: "100%", width: "100%"}}
                whileHover={{ borderBottom: "1px solid white", transition: {type: "spring", stiffness: 300, duration: 0.5}}}
                >Skills</motion.div></Link>
                <Link href={"#Experience"} scroll={false} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("Experience")?.scrollIntoView({ behavior: "smooth" });}}
                ><motion.div style={{height: "100%", width: "100%"}}
                whileHover={{ borderBottom: "1px solid white", transition: {type: "spring", stiffness: 300, duration: 0.5}}}
                >Experiences</motion.div></Link>
                <Link href={"#Projects"} scroll={false} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });}}
                ><motion.div style={{height: "100%", width: "100%"}}
                whileHover={{ borderBottom: "1px solid white", transition: { duration: 0.2, ease: "easeInOut"}}}
                >Projects</motion.div></Link>
            </div>

            <motion.div 
            whileHover={{scale: 1.1, transition:{type: "spring", stiffness: 300, duration: 0.5}}}
            whileTap={{scale: 0.9}}
            className="group relative flex justify-end right-[1%] max-sm:hidden">
                <Link href={"#Contact"} scroll={false} 
                onClick={(e) => {e.preventDefault(); document.getElementById("Contact")?.scrollIntoView({ behavior: "smooth" });}}
                type='button' className='p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl'>
                    <motion.div 
                    whileHover={{color: "black", backgroundColor: "transparent"}}
                    style={{
                        padding: "0.25rem 1rem",
                        backgroundColor: "black",
                        backgroundPosition: "left",
                        borderRadius: "0.75rem",
                        color: "white",
                        x: 0,
                    }}
                    >Contact</motion.div>
                </Link>
            </motion.div>
            <BurgerMenu />
        </div>
    )
}