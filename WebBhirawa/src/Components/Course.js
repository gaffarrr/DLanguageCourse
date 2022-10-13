import React,{useState, component} from "react";
import { Grid } from "@mui/material";

const CourseClass=()=>{
    const [course,setCourseName]=useState([
        {
            language_name:'English',
            course_name:'Basic English for Junior',
            price:0,
            image_file:'/English.png',
            description:'LOREM IPSUM DOLOR SIT AMET'
        }
    ])
    const [othercourses,setothercourses]=useState([
        {
            
        }
    ])
    return(
        <div>
            <h6>{course[0].language_name}</h6>
            <h4>{course[0].course_name}</h4>


            <h3>Description</h3>
            <p>{course[0].description}</p>
            <h5>Another class for you</h5>
            
            <Box container align="center" sx={{display:'grid',gridTemplateColumns:'repeat(3,1fr)'}}>
                {
                   othercourses.map((item,index)=>
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
export default CourseClass;