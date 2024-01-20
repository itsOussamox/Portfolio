'use client';
import LogoText from '@/app/components/logoText';

export default function HeaderBar (){
    return (
        <div className=' flex flex-row gap-[5%] items-center mt-[2%]'>
            <div className="flex w-[11%] h-[60px]">
                <LogoText/>
            </div>

            <div className="flex flex-row grow text-lg gap-[8%] justify-start items-center">
                <a className="">About</a>
                <a className="">Skills</a>
                <a className="">Experiences</a>
                <a className="">Projects</a>
            </div>

            <div className="relative flex justify-end right-[1%]">
                <button type='button' className='p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl'>
                    <div className='px-4 py-1 bg-black rounded-xl text-white'>Contact</div>
                </button>
            </div>
        </div>
    )
}