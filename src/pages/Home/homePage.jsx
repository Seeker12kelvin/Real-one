import React from 'react'
import "./home.module.css"
import { useLocation } from 'react-router-dom'

const HomePage = () => {

  const location = useLocation()
  const {data, age, image} = location.state

  return (
    <div className='h-screen w-screen flex items-center place-content-center'>
     
      <div>
        <img className='w-35 h-35 m-auto rounded-[50%]' src={image} alt="profile-pic"/>
        <h1 className='text-center text-3xl'>{data}</h1>
        <p className='text-center'>{age} years old</p>
      </div>

    </div>
  )
}

export default HomePage