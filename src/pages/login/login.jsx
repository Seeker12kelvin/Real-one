import { Outlet } from 'react-router-dom';
import Image from "../../../OrangeWoman.webp"

const Login = () => {

  const style = {
    backgroundImage: `url(${Image})`
  }

  return (
    <>
      <div style={style} className='bg-no-repeat bg-cover h-screen w-screen flex items-center justify-center'>
        
        <div className="bg-white flex flex-col items-start h-[89%] w-[53%] rounded-4xl bg-opacity-50 p-15 ">
          
          <Outlet />

          <div className='flex mt-auto'>
            <p className='text-[#A1A1AA] mr-6 text-[12px]'>Privacy Policy</p>
            <p className='text-[#A1A1AA] text-[14px]'>Terms of Service</p>
          </div>
          
        </div>

      </div>
    </>

  )
}

export default Login