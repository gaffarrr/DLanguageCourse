import React, { useState, component } from "react";
import { Grid, Box ,Link,List,Collapse,ListItemButton,ListItemText} from "@mui/material";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Header from '../header/Header'
import HeaderUser from "../headerUser/HeaderUser";
import Axios from 'axios';
import { useEffect} from 'react'
import {useParams} from "react-router-dom"

const CourseClass = () => {
    let id=useParams()
    const [open,setOpen]=React.useState(false)
    const [course, setCourseName] = useState([])
    const [othercourses, setothercourses] = useState([])
    const [schedule,setSchedules]=useState([])
    const GetCourseName=(id)=>{
        Axios.get('http://localhost:5000/api/course/detail/'+id).
            then((response)=>
            {
                if(response.status===200){
                    console.log(response.data)
                    setCourseName(response.data)
                }
            }).catch((err)=>{
                console.log(err)
            })
    }
    const GetOtherCourseName=(langid,id)=>{
        Axios.get('http://localhost:5000/api/course/'+langid+'/except/'+id).
            then((response)=>
            {
                if(response.status===200){
                    console.log(response.data)
                    setothercourses(response.data)
                }
            }).catch((err)=>{
                console.log(err)
            })
    }
    const GetSchedules=(id)=>{
        Axios.get('http://localhost:5000/api/schedule/'+id).
            then((response)=>
            {
                if(response.status===200){
                    console.log(response.data)
                    setSchedules(response.data)
                }
            }).catch((err)=>{
                console.log(err)
            })
    }
    const handleClick=()=>{
        setOpen(!open);
    }
    useEffect(()=>{
        console.log(id.id)
        GetCourseName(id.id)
        GetOtherCourseName(id.langid,id.id)
        GetSchedules(id.id)
    },[])
    return (
        <div>
            <Header />
            <img src={"/images/thumbnail" + course.image_file}></img>
            <h6>{course.language_name}</h6>
            <h4>{course.course_name}</h4>
            <List>
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary="Select Schedule"></ListItemText>
                    {open? <ExpandLess/>:<ExpandMore/>}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                {
                    schedule.map((item, index) =>
                        <List item key={index} component="div" disablePadding>
                            <ListItemButton>
                                {item.schedule}
                            </ListItemButton>
                        </List>
                    )
                }
                   
                </Collapse>
            </List>


            <h3>Description</h3>
            <p>{course.description}</p>
            <h5>Another class for you</h5>

            <Box container align="center" sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    othercourses.map((item, index) =>
                        <Grid item key={index}>
                            <Link href={"/Languages/"+item.language_id+"/course/"+item.id}>
                                <img src={"/images/thumbnail" + item.image_file}></img>
                                <h6 align="left">{item.language_name}</h6>
                                <h5 align="left">{item.course_name}</h5>
                                <p align="left">IDR {item.price}</p>
                            </Link>
                        </Grid>
                    )
                }
            </Box>
        </div>

    );
}
export default CourseClass;
