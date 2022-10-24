import React, { Component,useState,useEffect} from 'react'
import { List,Box } from "@mui/material";
import Axios from 'axios'
import {useParams} from "react-router-dom"

const InvoiceDetail =(id_invoice,date,total_price)=> {

    const [invoice,setInvoice]=useState([])
    const GetInvoiceDetail=(id)=>{
        Axios.get("http://localhost:5000/api/invoice/detail/"+id).
      then((response)=>
      {
          if(response.status===200){
              console.log(response.data)
              setInvoice(response.data)
          }
      }).catch((err)=>{
          console.log(err)
      })
    }
    useEffect(()=>{
      GetInvoiceDetail()//must be invoice id that is string for final
    },[])
    return (
        <div>
            <h4 align="left">Home &gt; Invoice &gt; Details Invoice</h4>
            <h5 align="left">Details Invoice</h5>
            <p>No. Invoice : {id_invoice}</p>
            <p>Date: {date}</p>
            <p>Total Price : {total_price}</p>
            <Box container align="center" sx={{display:'list-item'}}>
                {
                    invoice.map((item,index)=>
                        <List item key={index}>
                            <p align="left">{index}</p>
                            <p align="left">{item.course_name}</p>
                            <p align="left">{item.language_name}</p>
                            <p align="left">{item.schedule}</p>
                            <p align="left">{item.price}</p>
                        </List>
                    )
                }
            </Box>
      </div>    
      )
  }


export default InvoiceDetail