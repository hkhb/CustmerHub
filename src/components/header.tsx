import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Tooltip } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import "./header.css"
import { yellow } from '@mui/material/colors';

  interface header {
    logout: () => void;
  }
  
  const Header : React.FC<header>  = ({logout}) => {

    const onLogout = () => {
      const confirm = window.confirm("ログアウトしますか？");
      confirm? logout() : ""
      
    }

    return(
      <AppBar
      position="static"
      color="default"
      elevation={2}
      sx={{
        position: "fixed",
        width: '100vw',      // 横幅MAX
        left: 0,
        right: 0,
        top: 0,
        borderRadius: 0,
        backgroundColor: '#ffd000'
      }}
    >
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          顧客一覧
        </Typography>
        <Tooltip title="ログアウト">
          <IconButton color="error" onClick={onLogout}>
            <LogoutIcon />
          </IconButton>
        </Tooltip>
      </Toolbar>
    </AppBar>
    )
}
export default Header;
