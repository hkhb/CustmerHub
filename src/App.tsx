import { useState } from 'react'
import './App.css'
import Login from './components/login'
import Main from './components/main'

function App() {

  const [isLogin, setisLogin] = useState<boolean>(false);
  const login = () => {
    setisLogin(true);
  }
  const logout = () => {
    setisLogin(false)
  }

  return (
    <div className='page'>
      {isLogin? 
      <Main
        logout={logout}
      />
      :
      <Login
        login={login}
      />
    }
    </div>
  )
}

export default App
