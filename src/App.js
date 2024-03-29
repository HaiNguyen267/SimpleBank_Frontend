import './App.css';
import Header from "./components/Header"
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegiterPage';

import Homepage from './components/HomePage';
import { UserContext } from './components/context/UserContext'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios';

// testing
import UserProfilePage from './components/UserProfilePage';
import RegistrationConfirmPage from './components/shared-components/RegistrationConfirmPage';


function App() {
  const BACKEND_URL = 'https://simplebankbackend-production-7596.up.railway.app'
  const CLIENT_ID = '1041545973974-6fhlfpt6pv44fukk40s34qh86j5pj6uk.apps.googleusercontent.com'
  const [jwtToken, setJwtToken] = useState(null)
  const navigate = useNavigate()
  const [user, setUser] = useState({
    name: "Anounymous",
    balance: 0,
    isAuthenticated: false,
    accountNo: 0,
    enabled: false,
    profileImage: null
  })


  useEffect(() => {
    if (localStorage.hasOwnProperty('jwtToken')) {
      const data = JSON.parse(localStorage.getItem("jwtToken"))
      if (data.jwtToken) {
        setJwtToken(data.jwtToken)
      }
    }
  }, [])

  useEffect( () => {
    const fecthUserInfo = async () => {
      const data = {
        jwtToken: jwtToken
      }

      const response = await axios.post(`${BACKEND_URL}/userinfo`, data)
      if (response.data.success) {
        const userInfo = response.data

        setUser({
          name: userInfo.fullName,
          accountNo: userInfo.accountNo,
          enabled: userInfo.enabled,
          balance: userInfo.balance,
          profileImage: userInfo.profileImage,
          isAuthenticated: true
        })

      } else {
        setUser({
          name: "Anounymous",
          balance: 0,
          isAuthenticated: false,
          accountNo: 0,
          enabled: false,
          profileImage: null
        })
      }
    }

    // store jwtToken in local storage
    fecthUserInfo()
    const data = JSON.stringify({ jwtToken: jwtToken })
    localStorage.setItem('jwtToken', data)

  }, [jwtToken])

  const RedirectToHome = () => {
    navigate('/')
    return (
      <>
        <p className='page-name'>Redirect to Home</p>
      </>
    )
  }
  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser, jwtToken, setJwtToken]}>
        <Header />
        <div className="main">
          <Routes>
            <Route path='/' element={<Homepage />}></Route>
            {/* <Route path='/' element={<TransactionDetailPage />}></Route> */}
            <Route path='/profile' element={<UserProfilePage />}></Route>
            <Route path='/login' element={<LoginPage />} />
            <Route path='/register' element={<RegisterPage />} />
            <Route path='/confirm' element={<RegistrationConfirmPage />} />
            <Route path='/admin' element={<RedirectToHome />}></Route>
            <Route path='*' element={<RedirectToHome />}></Route>
          </Routes>
        </div>
      </UserContext.Provider>
    </div>
  )
}

export default App;
