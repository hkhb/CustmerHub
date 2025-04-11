import { useState } from 'react'
import './App.css'
import Login from './components/login'

function App() {

  const [isLogin, setisLogin] = useState<boolean>(true);
  const change = () => {
    setisLogin(false);
  }

  return (
    <>
      {isLogin? 
      <Login
        sucsess={change}
      />
      :
      <p>ooo</p>
    }
    </>
  )
}

export default App
