import { Link } from "react-router-dom";
import logout from './actions/userLogout';
import {useEffect, useState} from 'react'

const Navbar = () => {
const user = localStorage.getItem('userInfo');


const [isLoggedIn, setIsLoggedIn]=useState('')



useEffect(() => {
  if(user){
  setIsLoggedIn(true)
  }else{
  setIsLoggedIn(false)
  }


		// eslint-disable-next-line
	}, [isLoggedIn,user]);

const logoutHandler = () => {
setIsLoggedIn(false)
localStorage.removeItem('userInfo')
}
  



  return (
    <nav className="navbar">
      <h1>The Dojo Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>

        {isLoggedIn &&(
        <Link
          to="/create"
          style={{
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </Link>
        )}

        {isLoggedIn &&(<Link to="#" onClick={logoutHandler}>Logout</Link>)}
        
        
        {!isLoggedIn &&(
        <>
        <Link to="/login" >Login</Link>
        <Link to="/registration">Sign Up</Link>
        </>
        )}
        
      </div>
    </nav>
  );
};

export default Navbar;
