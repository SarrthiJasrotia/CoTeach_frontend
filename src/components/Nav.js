import React from 'react'
import { login, logout } from '../services/firebase';

const Nav = (props) => {
  return (
    <div className='nav'>
      <a href="/">HOME</a>
      <a href="/content/new">New</a>
      {
        props.user ?
          <>
            <div style={{ marginRight: '10px', color: 'white' }}>Welcome, {props.user.displayName}</div>
            <img src={props.user.photoURL} alt={props.user.name} style={{ height: '25px', marginRight: '10px' }} />
            <div
              onClick={logout}
              style={{
                cursor: 'pointer',
                marginRight: 10,
                color: 'white'
              }} >
              Logout
            </div>
          </>
          :
          <div
            onClick={login}
            style={{
              cursor: 'pointer',
              marginRight: 10,
              color: 'white'
            }} >
            Login
          </div>
      }

    </div >
  )
}

export default Nav