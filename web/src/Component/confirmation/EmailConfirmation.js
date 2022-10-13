import React from 'react'
import confirmed from './confirmed.png'
const EmailConfirmation = () => {

  return (
    <div align="center">
        <img src={confirmed}></img>
        <h3 font-color='dark green'>Email Confirmation Success</h3>
        <p>Thanks for confirming your email. Please login first</p>
        <button>Login Here</button>

    </div>
  )
}
export default EmailConfirmation