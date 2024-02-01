'use client';
import LogoText from '@/app/components/logoText';
import BurgerMenu from './BurgerMenu';
import Link from 'next/link';

export default function HeaderBar (){
    return (
        <div className='w-full flex flex-row sm:gap-[5%] items-center mt-[2%]  max-sm:justify-between'>
            <div className="flex w-[11%] h-[60px]">
                <LogoText/>
            </div>
            <div className="flex flex-row font-medium grow text-lg gap-[8%] justify-start items-center max-sm:hidden">
                <Link scroll={false} href={"/About"} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("About")?.scrollIntoView({ behavior: "smooth" });}}
                >About</Link>
                <Link href={"#Skills"} scroll={false} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("Skills")?.scrollIntoView({ behavior: "smooth" });}}
                >Skills</Link>
                <Link href={"#Experience"} scroll={false} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("Experience")?.scrollIntoView({ behavior: "smooth" });}}
                >Experiences</Link>
                <Link href={"#Projects"} scroll={false} className=""
                onClick={(e) => {e.preventDefault(); document.getElementById("Projects")?.scrollIntoView({ behavior: "smooth" });}}
                >Projects</Link>
            </div>

            <div className="relative flex justify-end right-[1%] max-sm:hidden">
                <Link href={"#Contact"} type='button' className='p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl'>
                    <div className='px-4 py-1 bg-black rounded-xl text-white'>Contact</div>
                </Link>
            </div>
            <BurgerMenu />
        </div>
    )
}