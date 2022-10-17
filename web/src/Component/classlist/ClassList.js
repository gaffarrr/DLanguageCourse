import React, { useState } from 'react'
import {Box,List} from "@mui/material";

const ClassList = () => {
    const [yourClass,setYourClass]=useState([])

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