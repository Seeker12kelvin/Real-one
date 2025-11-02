import React from 'react'
import { Link } from 'react-router-dom'
import { RiErrorWarningLine } from "react-icons/ri";
import { StyleCreatorContext } from './styleContext.jsx'
import { useContext } from 'react'

const LoginMain = () => {

  const {style, styleTwo, button, inputValue, setInputValue, inputPassValue, setPassInputValue, showPassword, setShowPassword, handleSubmit} = useContext(StyleCreatorContext)

  return (
    <>
      <div className='w-full flex flex-col items-start gap-2'>
        <h1 className='text-5xl font-normal text-[#18181B] mb-2'>Welcome back</h1>
        <h3 className="mb-6 text-gray-600 text-[14px]">Don't have an account? <Link to='/create-account' className='cursor-pointer text-[#FC5F2B]'>Create an account</Link></h3>
        
        <label htmlFor='email' className='mb-0 text-[14px] font-normal text-[#71717A]'>Email</label>
        <input
          value={inputValue}
          type='text'
          id="email"
          name='email'
          placeholder="Your email"
          onChange={(event) => {setInputValue(event.target.value)}}
          style={button && !inputValue ? styleTwo:style}
        />
        {button && !inputValue ? <p className='text-[#b90090] text-[13px] flex items-center gap-0 w-full m-0'><RiErrorWarningLine />Please enter a valid email address</p>: null}


        {showPassword ? <><label htmlFor='password' className='mb-0 text-[14px] font-normal text-[#71717A]'>Password</label>
          
          <input
          value={inputPassValue}
          type='password'
          id="password"
          name='password'
          placeholder="Your password"
          onChange={(event) => {setPassInputValue(event.target.value)}}
          style={button && !inputValue ? styleTwo:style}
        /> </>: null}

        {showPassword && button && !inputPassValue ? <p className='text-[#b90090] text-[13px] flex items-center gap-0 w-full m-0'><RiErrorWarningLine />Please enter a valid password</p>: null}
        

        <button
          onClick={handleSubmit}
          type="submit"
          className="bg-[#18181B] mt-4 mb-5 text-white cursor-pointer p-4 rounded-xl w-full hover:opacity-[1] transition-opacity"
        >
        Login
        </button>

        {showPassword ? <><p className="mb-8 text-gray-600 text-[14px]">Forgot your login details? <Link className='text-[#FC5F2B] text-[13px]'>Reset password</Link></p> <Link className='text-[#FC5F2B] text-[13px] -mt-9 mb-6 hover:underline'>Sign in with magic link</Link></>:<button onClick={() => {setShowPassword(prev => !prev)}}><Link className='text-[#FC5F2B] text-[13px] hover:underline'>Sign in with your password instead.</Link></button>}
      </div>

        <div className='flex'>
          <p className='text-[#A1A1AA] mr-6 text-[14px]'>Privacy Policy</p>
          <p className='text-[#A1A1AA] text-[14px]'>Terms of Service</p>
        </div>
    </>
  )
}

export default LoginMain