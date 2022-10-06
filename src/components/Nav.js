import React from 'react'
import { login, logout } from '../services/firebase';

const Nav = (props) => {
  // If user is not logged in, show the login button in the nav bar.
  // If the user is logged in, show the welcome [Name], Google avatar, and the logout button
  return (
    <div className='nav'>
      <a href="/"><h3>CoTeach</h3></a>
      {props.user ? <a href="/content/new">New</a> : ''}

      {(!props.user) ?
        <>
          <div
            onClick={login}>
            <p>Login</p>
          </div>
        </>
        :
        <>
          <div className='welcomeTag'> <img src={props.user.photoURL} alt={props.user.name} style={{ height: '55px', marginRight: '10px' }} /><p>Welcome, {props.user.displayName}</p></div>
         
          <div
            onClick={logout}
            >
            <p>Logout</p>
          </div>
        </>}
    </div >
  )
}

export default Nav;