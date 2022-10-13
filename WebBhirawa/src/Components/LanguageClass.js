import React,{useState, component} from "react";
import { Grid,Box } from "@mui/material";
import './style.css'

function LanguageClass(){
    const [language,setLanguage]=useState([
        {
            name:'English',
            description:'Lorem Ipsum',
            banner_file:'/English.png'
        }
    ])
    const [courses,setcourses]=useState([
        {
            language_name:'English',
            course_name:'Basic English for Junior',
            price:0,
            image_file:'/EC1.png'
        },
        {
            language_name:'English',
            course_name:'Complete Package - Expert English, TOEFL and IELT',
            price:2000000,
            image_file:'/EC2.png'
        }
    ]
    )
    const count=0
    
    return(
        <div align="center">
            <img src={"images/banners"+language[0].banner_file} className="banner"></img> 
            <h1 align="left">
                {language[0].name}
            </h1>
            <p>
                {language[0].description}
            </p>
            <h3>Class you may like:</h3>
            
            <Box container align="center" sx={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
                {
                   courses.map((item,index)=>
                    <Grid item key={index}>
                        <img src={"images/thumbnail"+item.image_file}></img>
                        <h6 align="left">{item.language_name}</h6>
                        <h5 align="left">{item.course_name}</h5>
                        <p align="left">IDR {item.price}</p>
                    </Grid>
                   )
                }
            </Box>
        </div>
    );
}
export default LanguageClass