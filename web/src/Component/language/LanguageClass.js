import React, { useState, component } from "react";
import { Grid, Box, Card, CardActionArea, CardMedia, CardContent } from "@mui/material";
import './language.css'
import Header from "../header/Header";
import HeaderUser from "../headerUser/HeaderUser";
import Footer from "../footer/Footer";

function LanguageClass() {
    const [language, setLanguage] = useState([
        {
            name: 'English',
            description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
            banner_file: '/English.png'
        }
    ])
    const [courses, setcourses] = useState([
        {
            language_name: 'English',
            course_name: 'Basic English for Junior',
            price: 400000,
            image_file: '/EC1.png'
        },
        {
            language_name: 'English',
            course_name: 'Complete Package - Expert English, TOEFL and IELT',
            price: 2000000,
            image_file: '/EC2.png'
        }
    ])

    return (
        <div align="center">
            <HeaderUser />
            <img src={"images/banners" + language[0].banner_file} className="banner"></img>
            <h1 align="left">
                {language[0].name}
            </h1>
            <p>
                {language[0].description}
            </p>
            <h3>Class you may like:</h3>

            <Box container align="center" marginBottom={5} sx={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
                {
                    courses.map((item, index) =>
                        <Grid item key={index}>
                            <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardMedia>
                                        <img src={"images/thumbnail" + item.image_file}></img>
                                    </CardMedia>
                                    <CardContent>
                                        <h6 align="left">{item.language_name}</h6>
                                        <h5 align="left">{item.course_name}</h5>
                                        <p align="left">IDR {item.price}</p>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )
                }
            </Box>
            <Footer></Footer>
        </div>
    );
}
export default LanguageClass