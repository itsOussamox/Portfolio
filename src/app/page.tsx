import Header from './components/Header'
import Bio from './components/Bio'
import Image from 'next/image'
import mobilerect from '@public/rectmobile.svg'
import Experiences from './components/Experiences'
import Skills from './components/Skills'
import Projects from './components/Projects'

export default function Home() {
  return (
    <main className='max-w-[1400px] w-full mx-auto'>
      <Header />
      <Bio />
      <Skills />
      <Experiences />
      <Projects />
    </main>
  )
}
