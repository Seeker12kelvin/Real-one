import React, {useState} from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import LoginPage from './pages/login/login.jsx'
import LoginMain from './pages/login/loginMain.jsx'
import LandingPage from './pages/Landing/LandingPage.jsx'
import CreateAccount from './pages/CreateAccount/CreateAccount.jsx'
import HomePage from './pages/Home/homePage.jsx'
import { StyleCreatorContext } from './components/styleContext.jsx'
import { RiErrorWarningLine } from "react-icons/ri"

function App() {
  const [passWarning, setPassWarning] = useState('')
  const [emailWarning, setEmailWarning] = useState('')
  const [inputValue, setInputValue] = useState()
  const [inputPassValue, setPassInputValue] = useState()
  const [button, setButton] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const [data, setData] = useState()
  const [email, setEmail] = useState()
  const [correctEmail, setCorrectEmail] = useState(false)
  const navigate = useNavigate()

  React.useEffect(() => {
    localStorage.setItem('userData', JSON.stringify(data))
  }, [data])
  
  const dataUser = {
    mail: email,
    name: 'kelvin',
    age: 20,
    image: 'c07d803f-3a2d-4dae-8a60-e4b8191b6378.jpg'
  }

  const handleAccount = (event) => {
    event.preventDefault()
    setData(dataUser)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const userData = JSON.parse(localStorage.getItem('userData'))

    if (showPassword && inputPassValue === '' ) {
      setPassWarning(<p className='text-[#b90090] text-[13px] flex items-center gap-0 w-full m-0'><RiErrorWarningLine />Please enter your password</p>)
    }

    if (inputValue === '' && !showPassword || (showPassword && inputValue === '')) {
      setEmailWarning(<p className='text-[#b90090] text-[13px] flex items-center gap-0 w-full m-0'><RiErrorWarningLine />Please enter a valid email address</p>)
    }
    
    if(inputValue === userData?.mail) {
      localStorage.setItem("In", JSON.stringify("Im in"))
      setCorrectEmail(prev => !prev)
      navigate('/home', {state: {data: userData.name, age: userData.age, image: userData.image}})
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
          <Route path="/home" element={<HomePage />}/>
          <Route path="/login" element={<LoginPage />}>
            <Route index element={<LoginMain />} />
            <Route path="create" element={<CreateAccount />} />
          </Route>
        </Routes>
      </StyleCreatorContext.Provider>
    </>
  )
    
}

export default App
