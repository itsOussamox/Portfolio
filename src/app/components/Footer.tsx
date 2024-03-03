'use client';
import Link from 'next/link';
import React from 'react'
import { SlSocialGithub } from "react-icons/sl";
import { SlSocialLinkedin } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";

const Footer = () => {
  return (
    <div className='h-[200px] bg-gradient-to-t from-black flex-col gap-[4%] justify-center overflow-y-hidden'>
      <div className='flex flex-row justify-center items-center gap-[4%] h-[40%]'>
        <Link href={"https://github.com/itsOussamox"}  target={"_blank"}>
          <SlSocialGithub className="size-[20px] text-white"/>
        </Link>
        <Link href={"https://www.linkedin.com/in/oussama-bouadel-ab093b2b3/"}  target={"_blank"}>
          <SlSocialLinkedin className="size-[20px] text-white"/>
        </Link>
        <Link href={"https://twitter.com/OffOussamox"}  target={"_blank"}>
          <SlSocialTwitter className="size-[20px] text-white"/>
        </Link>
        <Link href={"https://www.instagram.com/oussamox.ox/"}  target={"_blank"}>
          <SlSocialInstagram className="size-[20px] text-white"/>
        </Link>
      </div>
      <div className="w-full flex text-white/[.7] flex-row h-[30%] font-medium grow text-lg gap-[8%] justify-center items-center max-sm:hidden">
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
      <div className=' text-[12px] h-[30%] text-white/[.4] text-center mt-[3%]'>
      © Oussama Bouadel. All Rights Reserved
      </div>

    </div>
  )
}

export default Footer