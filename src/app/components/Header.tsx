'use client';

import HeaderBar from "./HeaderBar";
import HeaderBanner from '../components/HeaderBanner'
import GetInTouch from "./GitButton";
import HeaderBackground from "./HeaderBg";
import HeaderModels from "./HeaderModels";

export default function Header()
{
    return (
        <header className="flex flex-col relative sm:h-[calc(100vh-5rem)] sm:w-[calc(100%-2rem)] 
        max-sm:h-[650px] mx-auto sm:min-h-[800px]">
            <HeaderBackground />
            <HeaderModels />
            <HeaderBar />
            <HeaderBanner />
            <GetInTouch />
        </header>
    )
}