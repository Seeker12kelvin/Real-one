import React from 'react'
import { Link } from 'react-router-dom'
import "./home.module.css"

const Home = () => {
  return (
    <div className='text-5xl flex items-center justify-center h-screen'><Link to="/login">Login Page</Link></div>
  )
}

export default Home