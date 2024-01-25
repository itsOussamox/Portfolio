'use client';
import { useState } from "react";
import { Grow } from "@mui/material";

interface ContactButtonProps {
    title: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}


// </button> */
        // <>
        //     {selected !== title ?(<button className={`h-full px-3 bg-[#404040]/[.14] text-white/[.8] rounded-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl text-3xl mr-[2%]`}
        //     onClick={() => setSelected(title)}>
        //     {title}
        //     </button>) :
        //     (
        //     <Grow in={(selected === title)} timeout={500}>
        //         <button className={`h-full px-3 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black rounded-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl text-3xl mr-[2%]`}
        //         onClick={() => setSelected(title)}>
        //             {title}
        //         </button>
        //     </Grow>
        //     )}
        // </>
function ContactButton({title, selected, setSelected}: ContactButtonProps){
    // const selectedClass = selected === title ? "bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-black" 
    // : "bg-[#404040]/[.14] text-white/[.8]"
    return (
        <button className={`relative h-full w-full px-3 bg-[#404040]/[.14] text-white/[.8] rounded-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl text-3xl mr-[2%]`}
            onClick={() => setSelected(title)}>
            {selected === title && (
            <Grow in={(selected === title)} timeout={500} enter>
                <div className="h-full w-full rounded-3xl bg-gradient-to-r from-blueOne via-blueTwo to-blueThree"/>
            </Grow>
            )}
            <div className={`absolute h-full w-full top-[16%] right-0 ${selected === title ? "text-black" : "text-white/[0.7]"}`}>
                {title}
            </div>
        </button>
    )
}

export default function Contact() {
    const [select, setSelect] = useState<string>("Freelance")
    return (
        <div id="Contact" className="flex flex-col w-[60%] ml-[4%] max-sm:h-[500px] h-[800px]">
            <h1 className="max-sm:text-4xl max-md:text-5xl max-lg:text-6xl text-7xl mr-[2%]">Let's get in touch!</h1>
            <div className="flex flex-col mt-[3%] w-full h-full">
                <h1 className="max-sm:text-lg max-md:text-xl max-lg:text-2xl text-3xl mr-[2%]">I'm interested in</h1>
                <div id="ContactButtons" className="mt-[5%] gap-[5%] flex items-center w-full h-[10%]">
                    <ContactButton setSelected={setSelect} selected={select} title="Freelance"/>
                    <ContactButton setSelected={setSelect} selected={select} title="Part-time"/>
                    <ContactButton setSelected={setSelect} selected={select} title="Full-time"/>
                </div>
                <div className="flex flex-col h-full w-full mt-[5%] gap-[4%]">
                    <div className="bg-blueTwo/[0] w-full h-[25%] flex flex-col justify-center">
                        <input placeholder="Enter your name" className="bg-transparent w-full h-[50%] text-white/[0.7] text-3xl outline-none pl-[2%]"/>
                        <div className="h-[1px] w-full bg-white/[0.3]"/>
                    </div>
                    <div className="bg-blueTwo/[0] w-full h-[25%] flex flex-col justify-center">
                        <input placeholder="Enter your email" className="bg-transparent w-full h-[50%] text-white/[0.7] text-3xl outline-none pl-[2%]"/>
                        <div className="h-[1px] w-full bg-white/[0.3]"/>
                    </div>
                    <div className="bg-blueTwo/[0] w-full h-[50%] flex flex-col justify-center">
                        <textarea className="mt-[2%] resize-none h-full bg-transparent text-white/[0.7] text-3xl outline-none pl-[2%]" 
                        placeholder="Tell me about your project"/>
                    </div>
                    {/* <div className="relative w-[16%] h-[15%] bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-2xl">
                        <div className="absolute top-0 right-0 left-0 bottom-0 rounded-2xl bg-[#12a2ff] px-6 py-6"/>
                        <div className="h-full w-full text-center flex flex-col items-center justify-center
                        bg-gradient-to-r from-blueOne via-blueTwo to-blueThree  text-transparent bg-clip-text">Submit</div>
                        
                    </div> */}
                    <button type='button' className='p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl w-[30%] h-[15%]'>
                        <div className='bg-black rounded-xl text-white w-full h-full'>
                            <div className="bg-[#12A2FF]/[.11] h-full w-full flex items-center justify-center rounder-2xl">
                                <div className="bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-transparent bg-clip-text">
                                    Submit
                                </div>
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}