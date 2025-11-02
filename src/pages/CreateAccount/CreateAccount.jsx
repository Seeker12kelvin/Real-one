import React from 'react'
import { useContext } from 'react'
import { StyleCreatorContext } from '../login/styleContext'
import { FaCheck } from 'react-icons/fa'
import "./createAccount.module.css"

const CreateAccount = () => {

 const {style, styleTwo, button, btnStyle, emailWarning, inputValue, handleSubmit} = useContext(StyleCreatorContext)
  
  return (
    <>
      <div className='w-full flex items-center justify-between'>
        <h2 className="text-[20px] text-black font-bold">superpower</h2>
        <div className='flex gap-3 items-center'>
          <p className='opacity-40 text-[12px]'>Step 1 / 2</p>
          <div className='bg-linear-to-r from-black from-50%  to-[#d4d2d2] to-50% rounded-2xl h-1 w-20'></div>
        </div>
      </div>
      <div className='text-black w-full mt-7 gap-4 flex flex-col items-start'>
        <h1 className='text-5xl font-normal'>Member signup</h1>
        <p className='text-gray-600 text-[16px]'>It all starts with 100+ lab tests. <br/> All for $199 per year with no hidden fees.</p>
        <form className='flex flex-col w-full'>
          <input style={button && !inputValue ? styleTwo:style} type="text" placeholder='Your email' />
          {emailWarning}
          <button onClick={handleSubmit} className={btnStyle}>Get Started</button>

          <div className='flex flex-col text-[14px] mb-4 text-[#3F3F46] items-start justify-center gap-4 rounded-2xl p-6 shadow shadow-neutral-400'>
            <p className='flex items-center gap-2'><FaCheck className='text-[#FC5F2B]' /> 100+ boimarkers tested</p>
            <p className='flex items-center gap-2'><FaCheck className='text-[#FC5F2B]' /> A personalized plan that evolves with you</p>
            <p className='flex items-center gap-2'><FaCheck className='text-[#FC5F2B]' /> 17 health scores and your biological age</p>
            <p className='flex items-center gap-2'><FaCheck className='text-[#FC5F2B]' /> A medical team in your pocket you can message 24/7</p>
            <p className='flex items-center gap-2'><FaCheck className='text-[#FC5F2B]' /> An ecosystem of the best diagnostics, supplements, Rx’s and more</p>
          </div>

        </form>
      </div>
    </>
  )
}

export default CreateAccount