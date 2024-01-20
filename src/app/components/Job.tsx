'use client';
import { useEffect } from 'react';
import textFit from 'textfit';
export default function Job(){
    useEffect(() => {

        // textFit(document.getElementsByClassName('title'))
        textFit(document.getElementsByClassName('box'))
    })
    return (
        <div className="w-[45%] sm:w-[35%] h-[300px] sm:h-[600px] bg-gradient-to-r from-blueOne via-blueTwo to-blueThree flex justify-center items-center">
            <div className="bg-black banner-job">
                <div className="h-full w-full bg-bannerColor flex flex-col gap-[1%] relative box">
                    <h1 className=" text-white  text-center whitespace-nowrap mr-[36%] mt-[5%]">1337 Student</h1>
                    <h2 className="text-purple-500 whitespace-nowrap text-center max-md:ml-[1%] mt-[1%] mr-[36%]">Coding</h2>
                    <ul className="text-white grow list-disc list-inside  ml-[2%] flex flex-col justify-center ">
                        <li>Thrived in the challenge-driven 1337 curriculum.</li>
                        <li>Mastering languages like C and C++, and building efficient software systems.</li>
                        <li>Engaged in pair programming, and developed strong teamwork skills in a collaborative coding environment.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
// text-5xl max-sm:text-sm max-md:text-lg 
// text-3xl

//text-2xl max-sm:text-sm max-md:text-lg