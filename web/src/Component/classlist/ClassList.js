import React, { useState,useEffect } from 'react'
import {Box,List} from "@mui/material";
import Axios from 'axios'

const ClassList = () => {
    let id=3
    const [yourClass,setYourClass]=useState([])
    const GetYourClasses=(id)=>{
        Axios.get('http://localhost:5000/api/studentclass/'+id).
            then((response)=>{
                if(response.status===200){
                    console.log(response.data)
                    setYourClass(response.data)
                }
            }).catch((err)=>{
                console.log(err)
            })
    }
    useEffect(()=>{
        GetYourClasses()//must be student id for final
    })
    return (
        <div align="center">
            <Box container align="center" sx={{display:'list-item'}}>
                {
                    yourClass.map((item,index)=>
                        <List item key={index}>
                            <img src={"images/thumbnail"+item.image_file}></img>
                            <h6 align="left">{item.language_name}</h6>
                            <h5 align="left">{item.course_name}</h5>
                            <p align="left">SCHEDULE: {item.schedule}</p>
                        </List>
                    )
                }
            </Box>

        </div>
    )
}
export default ClassList