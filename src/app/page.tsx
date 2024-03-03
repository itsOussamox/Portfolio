'use client';
import Header from './components/Header'
import Bio from './components/Bio'
import Image from 'next/image'
import mobilerect from '@public/rectmobile.svg'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Mounted');
    return () => {console.log('Unmounted')}
  })
  return (
    <>
    <main className='container max-w-[1400px] w-full mx-auto relative max-[1400px]:overflow-hidden'>
      <Header />
      <Bio />
      <Skills />
      <Experiences />
      <Projects />
      <Contact />
    </main>
      <Footer />
    </>
  )
}
