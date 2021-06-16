import React from 'react'

import { GoogleOutlined } from '@ant-design/icons'

import firebase from 'firebase/app'

import { auth } from '../firebase'

export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Chào bạn đến với Unichat!</h2>

        <div
          className='login-button google'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Đăng nhập qua Google
        </div>

        <br />
        <br />

        {/* <div
          className='login-button facebook'
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider())
          }
        >
          <FacebookOutlined /> Đăng nhập qua Facebook
        </div> */}
      </div>
    </div>
  )
}
