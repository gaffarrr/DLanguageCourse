import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '@fontsource/montserrat'
import { borderRadius } from '@mui/system'
import { AppBar, CardActionArea, cardClasses } from '@mui/material'
import Container from '@mui/system/Container'
import Background from '../../Assets/Landing/bgLanding.png'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'
import Stack from '@mui/material/Stack'
import People from '../../Assets/Landing/people.png'
import flagMedia from '../flag/flagMedia'
import Footer from '../footer/Footer'
import Header from '../header/Header'
import HeaderUser from '../headerUser/HeaderUser'

const Body = () => {
    const [courseData, setCourseData] = useState([]);

    const [language, setLanguage] = useState([
        {
            name: 'Arabic',
            flag_file: '/Arabic.png'
        },
        {
            name: 'Deutsch',
            flag_file: '/Deutsch.png'
        },
        {
            name: 'English',
            flag_file: '/English.png'
        },
        {
            name: 'French',
            flag_file: '/French.png'
        },
        {
            name: 'Indonesian',
            flag_file: '/Indonesian.png'
        },
        {
            name: 'Japanese',
            flag_file: '/Japanese.png'
        },
        {
            name: 'Mandarin',
            flag_file: '/Mandarin.png'
        },
        {
            name: 'Melayu',
            flag_file: '/Melayu.png'
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


    const styles = {
        heroContainer: {
            backgroundImage: 'url(' + Background + ')',
            backgroundSize: 'cover',
            padding: '30px'
        }
    }
    return (
        <div>
            <Header></Header>
            <Box style={styles.heroContainer}>
                <Box align='center'>
                    <Typography
                        marginTop='50px'
                        component="h1"
                        variant="h4"
                        align="center"
                        color="white"
                        maxWidth="sm"
                        fontFamily="Montserrat"
                        fontWeight="bold"
                    >
                        Learn different language to hone your communication skills
                    </Typography>
                    <Typography variant='h5' align='center' paragraph marginTop='50px' marginBottom='70px' maxWidth='1000px' fontFamily="Montserrat" color='white'>
                        All the languages ​​you are looking for are available here, so what are you waiting for
                        and immediately improve your language skills
                    </Typography>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', pt: '50px', gap: '100px' }}>
                <Box maxWidth='250px'>
                    <Typography color='#226957' fontWeight='bold' variant='h3' fontFamily='Montserrat'>100+</Typography>
                    <Typography mt='30px' fontFamily='Montserrat'>Choose the class you like and get the skills</Typography>
                </Box>
                <Box maxWidth='250px'>
                    <Typography color='#226957' fontWeight='bold' variant='h3' fontFamily='Montserrat'>50+</Typography>
                    <Typography mt='30px' fontFamily='Montserrat'>Having teachers who are highly skilled and competent in the language</Typography>
                </Box>
                <Box maxWidth='250px'>
                    <Typography color='#226957' fontWeight='bold' variant='h3' fontFamily='Montserrat'>10+</Typography>
                    <Typography mt='30px' fontFamily='Montserrat'>Many alumni become ministry employees because of their excellent language skills</Typography>
                </Box>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Typography marginBottom={4} color='#226957' fontWeight='bold' variant='h6' fontFamily='Montserrat'>Recommended Class</Typography>
                <Grid container spacing={4}>
                    {courses.map((item, index) =>
                        <Grid item key={index} xs={12} sm={6} md={4}>
                            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardMedia>
                                        <CardMedia>
                                            <img src={"images/thumbnail" + item.image_file} style={{ height: '175px' }}></img>
                                        </CardMedia>
                                        <CardContent>
                                            <h6 align="left">{item.language_name}</h6>
                                            <h5 align="left">{item.course_name}</h5>
                                            <p align="left">IDR {item.price}</p>
                                        </CardContent>
                                    </CardMedia>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
            <Box bgcolor='#EA9E1F' padding='100px' pt='65px' pb='65px' display='flex' flexDirection='row'>
                <Box maxWidth='900px' align='left'>
                    <Typography color='white' fontWeight='bold' variant='h4' fontFamily='Montserrat'>Gets your best benefit</Typography>
                    <Typography color='white' fontFamily='Montserrat' align='justify' mt='30px'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                        totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione
                        voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                        sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</Typography>
                </Box>
                <Box ml='50px'>
                    <img src={People} width='350px' />
                </Box>
            </Box>
            <Container sx={{ py: 8 }} maxWidth="md">
                <Grid container spacing={1}>
                    {language.map((item, index) =>
                        <Grid item key={index} xs={12} sm={6} md={3}>
                            <Card sx={{ height: '90%', width: '90%', display: 'flex', flexDirection: 'column' }}>
                                <CardActionArea>
                                    <CardMedia>
                                        <CardMedia>
                                            <img src={"images/flags" + item.flag_file} style={{ height: '110px', marginTop: '10px' }}></img>
                                        </CardMedia>
                                        <CardContent>
                                            <h2 align="center" style={{ fontFamily: 'Montserrat' }}>{item.name}</h2>
                                        </CardContent>
                                    </CardMedia>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Container>
            <Footer></Footer>
        </div >
    )
}

export default Body
