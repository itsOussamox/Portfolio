'use client';
import LogoText from '@/app/components/logoText';
import BurgerMenu from './BurgerMenu';

export default function HeaderBar (){
    return (
        <div className='w-full flex flex-row sm:gap-[5%] items-center mt-[2%]  max-sm:justify-between'>
            <div className="flex w-[11%] h-[60px]">
                <LogoText/>
            </div>
            <div className="flex flex-row font-medium grow text-lg gap-[8%] justify-start items-center max-sm:hidden">
                <a className="">About</a>
                <a className="">Skills</a>
                <a className="">Experiences</a>
                <a className="">Projects</a>
            </div>

            <div className="relative flex justify-end right-[1%] max-sm:hidden">
                <button type='button' className='p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl'>
                    <div className='px-4 py-1 bg-black rounded-xl text-white'>Contact</div>
                </button>
            </div>
            <BurgerMenu />
        </div>
    )
}