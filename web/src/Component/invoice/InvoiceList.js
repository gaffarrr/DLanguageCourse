import React, { useState,Component } from 'react'
import { List,Box } from "@mui/material";

const InvoiceList =()=>{
    const [invoices,setInvoices]=useState([])
    return (
      <div>
        <h4 align="left">Home &gt; Invoice</h4>
        <h5 align="left">Menu Invoice</h5>
        <Box container align="center" sx={{display:'list-item'}}>
            {
                invoices.map((item,index)=>
                    <List item key={index}>
                        <img src={"images/thumbnail"+item.id}></img>
                        <h6 align="left">{item.date}</h6>
                        <h5 align="left">{item.total_course}</h5>
                        <p align="left">SCHEDULE: {item.total_price}</p>
                    </List>
                )
            }
        </Box>
      </div>
    )
  }


export default InvoiceList