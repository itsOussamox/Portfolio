'use client';
import { Slide } from '@mui/material';
import { useInView } from '@react-spring/web';
import { useEffect } from 'react';
import  textFit  from 'textfit';
export default function Job(){
    const [ref, InView] = useInView();
    return (
            <div ref={ref} className="w-[50%] min-w-[200px] sm:w-[40%] h-auto bg-gradient-to-r from-blueOne via-blueTwo to-blueThree flex justify-center items-center rounded-[5%]">
                <div className="bg-black banner-job rounded-[5%]">
                    <div className="h-full  w-full bg-bannerColor flex flex-col gap-[1%] relative  rounded-[5%]">
                        <h1 className=" text-white max-[474px]:text-2xl max-[350px]:text-xl md:text-4xl lg:text-5xl whitespace-nowrap text-3xl font-medium text-start ml-[10%] mr-[2%] mt-[5%]">1337 Student</h1>
                        <h2 className="text-purple-500 md:text-3xl max-[474px]:text-xl lg:text-4xl text-2xl font-medium text-start ml-[10%]">Coding</h2>
                            <ul className="gap-[3%] ul-max-h h-full leading-3 grow  text-white list-disc list-inside mt-[4%] mb-[1%] ml-[10%] flex flex-col mr-[10%] box">
                                <li className='h-[33%] max-[474px]:text-xs text-ellipsis max-sm:text-sm md:text-2xl lg:text-3xl text-xl font-extralight'>Thrived in the challenge-driven 1337 Coding School curriculum.</li>
                                <li className='h-[33%] max-[474px]:text-xs text-ellipsis max-sm:text-sm md:text-2xl lg:text-3xl text-xl font-extralight'>Mastering languages like C and C++, and building efficient software systems.</li>
                                <li className='h-[33%] max-[474px]:text-xs text-ellipsis max-sm:text-sm md:text-2xl lg:text-3xl text-xl font-extralight'>Developed strong teamwork skills, engaging in pair programming system.</li>
                            </ul>
                    </div>
                    <h1 className='text-white opacity-[0.3]  sm:hidden'>NOV 2021 - Present</h1>
                </div>
            </div>
    )
}