import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import LandingPage from './pages/Landing/LandingPage.jsx'
import LoginMain from './pages/login/loginMain.jsx'
import CreateAccount from './pages/CreateAccount/CreateAccount.jsx'
import { StyleCreatorContext } from './components/styleContext.jsx'
import { RiErrorWarningLine } from "react-icons/ri";

function App() {
  const [passWarning, setPassWarning] = React.useState('')
  const [emailWarning, setEmailWarning] = React.useState('')
  const [inputValue, setInputValue] = React.useState()
  const [inputPassValue, setPassInputValue] = React.useState()
  const [button, setButton] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const [data, setData] = React.useState()
  const [email, setEmail] = React.useState()
  const [correctEmail, setCorrectEmail] = React.useState(false)

  React.useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data))
  }, [data])
  
  const handleAccount = (event) => {
    event.preventDefault()
    setData(email)
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (showPassword && inputPassValue === '' ) {
      setPassWarning(<p className='text-[#b90090] text-[13px] flex items-center gap-0 w-full m-0'><RiErrorWarningLine />Please enter your password</p>)
    }

    if (inputValue === '' && !showPassword || (showPassword && inputValue === '')) {
      setEmailWarning(<p className='text-[#b90090] text-[13px] flex items-center gap-0 w-full m-0'><RiErrorWarningLine />Please enter a valid email address</p>)
    }
    
    if(inputValue === JSON.parse(localStorage.getItem('userData'))){
      localStorage.setItem("In", JSON.stringify("Im in"))
      setCorrectEmail(prev => !prev)
    }

    console.log('Logging in with:', { email: inputValue, password: inputPassValue })
  }


  const style = {
    width: '100%',
    padding: '16px 24px',
    marginTop: '8px',
    fontSize: '16px',
    outline: 'none',
    border: '1px solid rgb(228, 228, 231)',
    borderRadius: '12px'
  }

  const styleTwo = {
    width: '100%',
    padding: '16px 24px',
    marginTop: '8px',
    fontSize: '16px',
    outline: 'none',
    border: '1px solid #b90090',
    borderRadius: '12px'
  }

  const btnStyle = "bg-[#18181B] mt-4 mb-5 text-white cursor-pointer p-4 rounded-xl w-full hover:opacity-[1] transition-opacity"

  return (
    <>
      <BrowserRouter>
        <StyleCreatorContext.Provider value={{
          inputValue,
          setInputValue,
          inputPassValue,
          setPassInputValue,
          button,
          setButton,
          showPassword,
          setShowPassword,
          handleSubmit,
          style,
          styleTwo,
          btnStyle,
          passWarning,
          emailWarning,
          handleAccount,
          email,
          setEmail,
          correctEmail,
          setCorrectEmail
        }}>
          <Routes>
            <Route path="/" element={<LandingPage />}/>
            <Route path="/login" element={<Login />}>
              <Route index element={<LoginMain />} />
              <Route path="create" element={<CreateAccount />} />
            </Route>
          </Routes>
        </StyleCreatorContext.Provider>
      </BrowserRouter>
    </>
  )
    
}

export default App
