
import { useParams } from "react-router-dom"
import { Grid, Box, Card, CardActionArea, CardMedia, CardContent, Link } from "@mui/material";
import './language.css'
import Header from "../header/Header";
import HeaderUser from "../headerUser/HeaderUser";
import Footer from "../footer/Footer";
import Axios from 'axios';
import React, { useEffect, useState } from 'react'

import '@fontsource/montserrat'
function LanguageClass() {
    let id = useParams()
    const [language, setLanguage] = useState([])
    const [courses, setcourses] = useState([])
    const GetLanguage = (id) => {
        Axios.get('http://localhost:5000/api/language/' + id).
            then((response) => {
                if (response.status === 200) {
                    console.log(response.data.banner_file)
                    setLanguage(response.data)
                }
            }).catch((err) => {
                console.log(err)
            })
    }
    const GetCourses = (id) => {
        Axios.get('http://localhost:5000/api/course/' + id).
            then((resp) => {
                if (resp.status === 200) {
                    setcourses(resp.data)
                }
            }).catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        console.log(id.id)
        GetLanguage(id.id)
        GetCourses(id.id)
    }, [])
    return (
        <div align="center">

            <img src={"/images/banners" + language.banner_file} className="banner"></img>
            <h1 align="left">
                {language.language_name}
            </h1>
            <p>
                {language.description}
            </p>
            <h3>Class you may like:</h3>

            <Box container align="center" marginBottom={5} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    courses.map((item, index) =>
                        <Grid item key={index}>
                            <Link href={"/Languages/" + item.language_id + "/course/" + item.id}>
                                <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                    <CardActionArea>
                                        <CardMedia>
                                            <img src={"/images/Thumbnail" + item.image_file} style={{ height: '175px' }}></img>
                                        </CardMedia>
                                        <CardContent>
                                            <h6 align="left">{item.language_name}</h6>
                                            <h5 align="left">{item.course_name}</h5>
                                            <p align="left">IDR {item.price}</p>
                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Link>
                        </Grid>
                    )
                }
            </Box>
            <Footer></Footer>
        </div>
    );

}
export default LanguageClass