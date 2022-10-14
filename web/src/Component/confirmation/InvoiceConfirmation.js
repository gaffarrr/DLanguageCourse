import React from 'react'
import { Link } from 'react-router-dom'
import confirmed from './confirmed.png'
const InvoiceConfirmation = () => {

  return (
    <div align="center">
        <img src={confirmed}></img>
        <h3 font-color='dark green'>Purchase Successful</h3>
        <p>Thanks for buying our course! See you in the class!</p>
        <box>
          <Link to="/">
            <button >Back to Home</button>
          </Link>
          <Link to="/invoicelist">
            <button>Open Invoice</button>
          </Link>
          </box>
        

    </div>
  )
}
export default InvoiceConfirmation