'use client';

import HeaderBar from "./HeaderBar";
import HeaderBanner from '../components/HeaderBanner'
import GetInTouch from "./GitButton";
import HeaderBackground from "./HeaderBg";
import HeaderModels from "./HeaderModels";

export default function Header()
{
    return (
        <header className="flex flex-col relative header-container">
            <HeaderBackground />
            <HeaderModels />
            <HeaderBar />
            <HeaderBanner />
            <GetInTouch />
        </header>
    )
}