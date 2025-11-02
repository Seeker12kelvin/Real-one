import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Login from './pages/login/login.jsx'
import Home from './pages/Home/home.jsx'
import LoginMain from './pages/login/loginMain.jsx'
import CreateAccount from './pages/CreateAccount/CreateAccount.jsx'
import { StyleCreatorContext } from './pages/login/styleContext.jsx'

function App() {
  const [inputValue, setInputValue] = React.useState('')
  const [inputPassValue, setPassInputValue] = React.useState('')
  const [button, setButton] = React.useState(false)
  const [showPassword, setShowPassword] = React.useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    setButton(true)
    
    if (inputValue && !showPassword) {
      setShowPassword(false)
    }

    if (inputValue && inputPassValue && showPassword) {
      // Add your login logic here
      console.log('Logging in with:', { email: inputValue, password: inputPassValue })
    }
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
          styleTwo
        }}>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/login" element={<Login />}>
              <Route index element={<LoginMain />} />
              <Route path='create' element={<CreateAccount />} />
            </Route>
          </Routes>
        </StyleCreatorContext.Provider>
      </BrowserRouter>
    </>
  )
    
}

export default App
