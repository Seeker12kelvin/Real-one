import React from 'react'
import { Link } from 'react-router-dom'
import { StyleCreatorContext } from '../../components/styleContext.jsx'
import { useContext } from 'react'

const LoginMain = () => {

  const {style, styleTwo, button,
        btnStyle, inputValue, setInputValue,
        inputPassValue, setPassInputValue,
        setShowPassword, showPassword,
        passWarning, emailWarning, 
        handleSubmit, correctEmail} = useContext(StyleCreatorContext)

  return (
    <>
      <h2 className="text-[20px] text-black font-bold">superpower</h2>
      { !correctEmail ?
        <form onSubmit={handleSubmit} className='w-full mt-auto flex flex-col items-start '>
        <h1 className='text-5xl font-normal text-[#18181B] mb-2'>Welcome back</h1>
        <h3 className="mb-6 text-gray-600 text-[14px]">Don't have an account? <Link to="create" className='cursor-pointer text-[#FC5F2B]'>Create an account</Link></h3>
        
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
        {emailWarning}

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

          {passWarning}

        <button
          type="submit"
          className={btnStyle}
        >
        Login
        </button>

        {showPassword ? (<><p className="mb-8 text-gray-600 text-[14px]">Forgot your login details? <Link className='text-[#FC5F2B] text-[13px]'>Reset password</Link></p> <Link className='text-[#FC5F2B] text-[13px] -mt-9 mb-6 hover:underline'>Sign in with magic link</Link></>):(<button className='-mt-3' onClick={() => {setShowPassword(prev => !prev)}}><Link className='text-[#FC5F2B] text-[13px] hover:underline'>Sign in with password instead.</Link></button>)}
        
      </form> : <Link to='..'>Login</Link>}
    </>
  )
}

export default LoginMain