import { useState } from 'react'

import './App.css'
import Hero from './components/hero/Hero'
import ImageGroup from './components/image_group/ImageGroup'
import OurNumbers from './components/OurNumbers'
import OurTeam from './components/OurTeam'
import OurValues from './components/OurValues'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='font-open-sans bg-white relative'>
        <Hero />
        <div className='absolute top-[85%]  mx-auto left-0 right-0'>
          <ImageGroup />
          <div className='w-7/12 mx-auto flex flex-col gap-5 py-10'>
            <h3 className='text-20 font-[400] leading-8 text-[#777777]'>Our story</h3>
            <h2 className='font-manrope font-[400] text-48 leading-72 text-black'>Handshake infographic mass market crowdfunding iteration.</h2>
            <p className='text-20 font-[400] leading-8 text-[#777777]'>Conversion angel investor entrepreneur first mover advantage. Handshake infographic mass market crowdfunding iteration. Traction stock user experience deployment beta innovator incubator focus. Sales user experience branding growth hacking holy grail monetization conversion prototype stock network effects. Learning curve network effects return on investment bootstrapping business-to-consumer. </p>
          </div>
          <OurNumbers />
          <OurTeam />
          <OurValues />
          <Footer />

        </div>


      </div>
    </>
  )
}

export default App
