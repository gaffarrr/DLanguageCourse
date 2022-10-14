import React from 'react'
import { Link } from 'react-router-dom'
import confirmed from './confirmed.png'
const EmailConfirmation = () => {

  return (
    <div align="center">
        <img src={confirmed}></img>
        <h3 font-color='dark green'>Email Confirmation Success</h3>
        <p>Thanks for confirming your email. Please login first</p>
        <Link to="/register">
          <button>Login Here</button>
        </Link>
    </div>
  )
}
export default EmailConfirmation