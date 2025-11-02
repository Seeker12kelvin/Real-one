import React from 'react'
import { useContext } from 'react'
import { StyleCreatorContext } from '../login/styleContext'
import "./createAccount.module.css"

const CreateAccount = () => {

 const {style, styleTwo, button, inputValue} = useContext(StyleCreatorContext)
  
  return (
    <div className='text-black'>
      <h1>Member signup</h1>
      <p>It all starts with 100+ lab tests. <br/> All for $199 per year with no hidden fees.</p>
      <input style={button && !inputValue ? styleTwo:style} type="text" placeholder='Your email' />
    </div>
  )
}

export default CreateAccount