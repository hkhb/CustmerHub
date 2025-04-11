import { useState } from 'react'
import './login.css'

interface loginProps{
  login: () => void;
}

function Login({login}:loginProps) {
  const user:string = "admin"
  const password:string = "password"

  const onLogin = () => {
    if(user === formUser && password === formPassword){
      login();
    }else {
      alert("ユーザー名またはパスワードが間違っています");
    }
  }

  const [formUser, setformUser] = useState<string>("");
  const [formPassword, setformPassword] = useState<string>("");

  return (
    <div>
      <div className='Login-area'>
        <h3>ユーザー名</h3>
        <input
          type="text"
          className='login-form, form'
          value={formUser}
          onChange={(e) => setformUser(e.target.value)}
        />
      </div>
      <div className='password-area'>
        <h3>パスワード</h3>
        <input
          type="text"
          className='password-form, form'
          value={formPassword}
          onChange={(e) => setformPassword(e.target.value)}
        />
      </div>
      <button onClick={onLogin}>ログイン</button>
    </div>
  )
}

export default Login