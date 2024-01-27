'use client';
import { use, useEffect, useRef, useState } from "react";
import { Grow } from "@mui/material";

interface ContactButtonProps {
    title: string;
    selected: string;
    setSelected: React.Dispatch<React.SetStateAction<string>>;
}

function ContactButton({title, selected, setSelected}: ContactButtonProps){
    return (
        <button className={`relative h-full w-full px-3 bg-[#404040]/[.14] text-white/[.8] rounded-3xl max-sm:text-lg max-md:text-xl max-lg:text-2xl text-3xl mr-[2%]`}
            onClick={() => setSelected(title)}>
            {selected === title && (
            <Grow in={(selected === title)} timeout={500} enter>
                <div className=" absolute h-full w-full rounded-3xl bg-gradient-to-r px-3 top-0 right-0 from-blueOne via-blueTwo to-blueThree"/>
            </Grow>
            )}
            <div className={`absolute h-full w-full top-[16%] right-0 ${selected === title ? "text-black" : "text-white/[0.7]"}`}>
                {title}
            </div>
        </button>
    )
}

function SuccessSvg() {
    return (
        <svg className="text-blueTwo" width="24" height="24" viewBox="0 0 1792 1792" fill="#44C997" xmlns="http://www.w3.org/2000/svg">
                <path d="M1299 813l-422 422q-19 19-45 19t-45-19l-294-294q-19-19-19-45t19-45l102-102q19-19 45-19t45 19l147 147 275-275q19-19 45-19t45 19l102 102q19 19 19 45t-19 45zm141 83q0-148-73-273t-198-198-273-73-273 73-198 198-73 273 73 273 198 198 273 73 273-73 198-198 73-273zm224 0q0 209-103 385.5t-279.5 279.5-385.5 103-385.5-103-279.5-279.5-103-385.5 103-385.5 279.5-279.5 385.5-103 385.5 103 279.5 279.5 103 385.5z"/>
        </svg>
    )
}
function SubmitNotif({setSubmit, submit}: {setSubmit: React.Dispatch<React.SetStateAction<boolean>>, submit : boolean}) {
    const notifTimeout = useRef<NodeJS.Timeout | null>(null)
    useEffect(() => {
        notifTimeout.current = setTimeout(() => {
            setSubmit(false)
        }, 2000)
        return () => {
            if (notifTimeout.current) {
                clearTimeout(notifTimeout.current)
            }
        }
    })

    return (
        <Grow in={submit} timeout={500} enter>
            <div className="fixed top-[50%] right-[30%] w-[30%] h-[10%] bg-black/[.8] outline outline-1 outline-white/[.3] gap-[3%] rounded-3xl flex items-center justify-center">
                <SuccessSvg/>
                <div className="bg-gradient-to-r from-blueOne via-blueTwo to-blueThree text-transparent bg-clip-text">
                    Message Sent!
                </div>
            </div>
        </Grow>
    )
}


const checkForm  = (name: HTMLInputElement, email: HTMLInputElement, message: HTMLTextAreaElement) : boolean => {
    var noErrors : boolean = true;
    
    if (name.value === "") {
        name.style.border = "2px solid red"
        noErrors = false;
    }
    else
        name.style.border = "none"
    if (email.value === "") {
        email.style.border = "2px solid red"
        noErrors = false;
    }
    else
        email.style.border = "none"
    if (message.value === "") {
        message.style.border = "2px solid red"
        noErrors = false;
    }
    else
        message.style.border = "none"
    return noErrors;
}


export default function Contact() {
    const [select, setSelect] = useState<string>("Freelance")
    const [submit, setSubmit] = useState<boolean>(false)
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);

    const handleSubmit = () => {
        const isWrong : boolean = !checkForm(nameRef.current!, emailRef.current!, messageRef.current!);
        if (isWrong)
        {
            setSubmit(false);
            return;
        }
        nameRef.current!.value = "";
        emailRef.current!.value = "";
        messageRef.current!.value = "";
        setSubmit(true)
    }

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
                        <input ref={nameRef} placeholder="Enter your name" className="bg-transparent w-full h-[50%] text-white/[0.7] text-3xl outline-none pl-[2%]"
                        onChange={(e) => {e.preventDefault(); nameRef.current!.value  = e.target.value}}
                        />
                        <div className="h-[1px] w-full bg-white/[0.3]"/>
                    </div>
                    <div className="bg-blueTwo/[0] w-full h-[25%] flex flex-col justify-center">
                        <input ref={emailRef} placeholder="Enter your email" className="bg-transparent w-full h-[50%] text-white/[0.7] text-3xl outline-none pl-[2%]"
                        onChange={(e) => {e.preventDefault(); emailRef.current!.value = e.target.value}}/>
                        <div className="h-[1px] w-full bg-white/[0.3]"/>
                    </div>
                    <div className="bg-blueTwo/[0] w-full h-[50%] flex flex-col justify-center">
                        <textarea ref={messageRef} className="mt-[2%] resize-none h-full bg-transparent text-white/[0.7] text-3xl outline outline-1 outline-white/[.3] pl-[2%]" 
                        placeholder="Tell me about your project"
                        onChange={(e) => {e.preventDefault(); messageRef.current!.value = e.target.value}}/>
                    </div>
                    <button onClick={() => handleSubmit()} 
                    type='button' className='p-0.5 bg-gradient-to-r from-blueOne via-blueTwo to-blueThree rounded-xl w-[20%] h-[12%] hover:opacity-[.8]'>
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
            {submit && <SubmitNotif setSubmit={setSubmit} submit={submit}/>}
        </div>
    )
}