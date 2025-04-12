import React from 'react';
import "./list.css"

  interface header {
    logout: () => void;
  }
  
  const Header : React.FC<header>  = ({logout}) => {

    const onLogout = () => {
      const confirm = window.confirm("ログアウトしますか？");
      confirm? logout() : ""
      
    }

    return(
      <header>
        <p>顧客一覧</p>
        <button onClick={onLogout}></button>
      </header>

    )
}
export default Header;
