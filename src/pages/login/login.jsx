import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom';
import {StyleCreatorContext} from "./styleContext"

const Login = () => {

  const {handleSubmit} = useContext(StyleCreatorContext)

  return (
    <>
      <div className='bg-[url(OrangeWoman.webp)] bg-no-repeat bg-cover h-screen w-screen flex items-center justify-center'>
        
        <form onSubmit={handleSubmit} className="bg-white flex flex-col items-start justify-between h-[90%] w-[55%] rounded-4xl bg-opacity-50 p-15 ">
          <h2 className="text-[20px] mb-6 text-black font-bold">superpower</h2>
          
          <Outlet />
          
        </form>

      </div>
    </>

  )
}

export default Login