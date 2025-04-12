import { useState } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material';
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
    
    <Box
      component="form"
      onSubmit={onLogin}
      sx={{
        maxWidth: 400,
        margin: 'auto',
        padding: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        backgroundColor: '#fff',
        borderRadius: 2,
        boxShadow: 3,
        mt: 8,
      }}
    >
      <Typography variant="h5" textAlign="center" color="black">
        ログイン
      </Typography>
      <TextField
        label="ユーザー名"
        variant="outlined"
        fullWidth
        value={formUser}
        onChange={(e) => setformUser(e.target.value)}
      />
      <TextField
        label="パスワード"
        type="password"
        variant="outlined"
        fullWidth
        value={formPassword}
        onChange={(e) => setformPassword(e.target.value)}
      />
      <Button type="submit" variant="contained" color="primary">
        ログイン
      </Button>
    </Box>
  )
}

export default Login