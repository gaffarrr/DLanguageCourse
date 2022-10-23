import React, { useState, Component,useEffect} from 'react'
import { List, Box } from "@mui/material";
import Axios from 'axios';
import {useParams} from "react-router-dom"
import Header from '../header/Header';
import Footer from '../footer/Footer'


const InvoiceList = () => {
  const [invoices, setInvoices] = useState([])
  const GetInvoices=(id)=>{
    Axios.get("http://localhost:5000/api/invoice/display/"+id).
      then((response)=>
      {
          if(response.status===200){
              console.log(response.data)
              setInvoices(response.data)
          }
      }).catch((err)=>{
          console.log(err)
      })
    }
    useEffect(()=>{
      GetInvoices(1)//must be user id for final
    },[])
  return (
    <div>
      <Header></Header>
      <h4 align="left">Home &gt; Invoice</h4>
      <h5 align="left">Menu Invoice</h5>
      {/* <>{if(typeof invoices !=='undefined' ){

      }}
      </> */}
      <Box container align="center" sx={{ display: 'list-item' }}>
        {
          invoices.map((item, index) =>
            <List item key={index}>
              <img src={"images/thumbnail" + item.id}></img>
              <h6 align="left">{item.date}</h6>
              <h5 align="left">{item.total_course}</h5>
              <p align="left">SCHEDULE: {item.total_price}</p>
            </List>
          )
        }
      </Box>
      <Footer></Footer>
    </div>

  )
}


export default InvoiceList