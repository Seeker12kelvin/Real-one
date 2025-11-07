import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./landing.module.css"
import video from "../../../superpower-100-year-potential-video-hero.mp4"
import logo from "../../../65b8e9361ddcca5331c27b74_sp-logo.svg"
import { RiArrowDropRightLine } from "react-icons/ri";

const LandingPage = () => {

  const [mouseOnNav, setMouseOnNav] = useState(false)
  const [opacityOnUl, setOpacityOnUl] = useState(false)

  return (
    <>
      <div className='mt-3.5 bg-[red] rounded-2xl h-[97vh] w-[98vw] overflow-hidden flex items-center justify-center relative'>
        <video className='m-0 w-full rounded-2xl' autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className='absolute m-0 w-full top-3 flex flex-col justify-self-center z-3'>
          <header className='w-[90%] m-auto justify-self-center flex items-center justify-between text-[white] text-[13.5px] p-2 pr-2 pl-7 rounded-4xl bg-[rgb(0,0,0,0.75)]'>
            <img width='130px' src={logo} alt='logo' />

            <ul onMouseEnter={() => setOpacityOnUl(prev => !prev)} onMouseLeave={() => setOpacityOnUl(prev => !prev)} className='flex gap-6 w-fit'>
              <li className={`hover:cursor-pointer ${opacityOnUl ? 'text-[green]' : ''} ${opacityOnUl ? 'opacity-70': ''}`}>How it Works</li>
              <li className={`hover:cursor-pointer ${opacityOnUl ? 'text-[blue]' : ''} ${opacityOnUl ? 'opacity-70': ''}`}>What we Test</li>
              <li className={`hover:cursor-pointer ${opacityOnUl ? 'text-[blue]' : ''} ${opacityOnUl ? 'opacity-70': ''}`}>Reviews</li>
              <li className={`hover:cursor-pointer ${opacityOnUl ? 'text-[blue]' : ''} ${opacityOnUl ? 'opacity-70': ''} border-l border-[#ffffff9b] pl-8`}>FAQs</li>
              <li className={`hover:cursor-pointer ${opacityOnUl ? 'text-[blue]' : ''} ${opacityOnUl ? 'opacity-70': ''}`}>Our Why</li>
            </ul>

            <div className='flex items-center justify-between gap-6'>
              <Link to="/login" className='btn'>Login</Link>
              <button className='bg-[#fc5f2b] p-4 pl-5 pr-5 m-0 text-white rounded-4xl cursor-pointer'>Try Superpower</button>
            </div>
          </header>

          <div className='text-white w-[600px] mt-40 leading-8 text-center flex flex-col items-center self-center gap-7'>
            <h1 className='text-7xl'>Unlock your new health intelligence</h1>
            <p>100+ lab tests. Every year. Detect early signs of 1,000+ <br/> conditions. All for only $17/month</p>
            <button className='bg-[#fc5f2b] text-xl font-light w-[30%] flex justify-center items-center m-0 p-3  text-white rounded-4xl cursor-pointer'>Join Today <RiArrowDropRightLine className='text-4xl font-normal m-0'/></button>
            <p>HSA/FSA eligible</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default LandingPage