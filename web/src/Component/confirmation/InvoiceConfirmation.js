import React from 'react'
import confirmed from './confirmed.png'
const InvoiceConfirmation = () => {

  return (
    <div align="center">
        <img src={confirmed}></img>
        <h3 font-color='dark green'>Purchase Successful</h3>
        <p>Thanks for buying our course! See you in the class!</p>
        <box>
          <button>Back to Home</button>
          <button>Open Invoice</button>
          </box>
        

    </div>
  )
}
export default InvoiceConfirmation