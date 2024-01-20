import Header from './components/Header'
import Bio from './components/Bio'
import Image from 'next/image'
import mobilerect from '@public/rectmobile.svg'
import Experiences from './components/Experiences'

export default function Home() {
  return (
    <main className='max-w-[1400px] w-full mx-auto'>
      <Header />
      <Bio />
      <Experiences />
    </main>
  )
}
