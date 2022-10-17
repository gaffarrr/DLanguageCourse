import React from 'react'
import Header from '../header/Header'
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { maxWidth } from '@mui/system';

const Register = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    }

    return (
        <div alignItems='center'>
            <Header />
            <Container component='main'>
                <Box sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Grid container maxWidth='690px' display='flex' flexDirection='column' alignItems='flex-start' justifyContent='left'>
                        <Grid container alignItems='flex-start' justifyContent='left' gap='20px'>
                            <Typography>Lets Join</Typography>
                            <Typography>D'Language</Typography>
                        </Grid>
                        <Typography>Please register first</Typography>
                    </Grid>
                    <Box component='form' noValidate onSubmit={handleSubmit} mt='3px' maxWidth='1000px'>
                        <Grid mt='10px' width='700px'>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    name="name"
                                    required
                                    fullWidth
                                    id='name'
                                    label='Name'
                                    autoFocus
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mt='15px'>
                                <TextField
                                    name="email"
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email'
                                    autoFocus
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mt='15px'>
                                <TextField
                                    name="password"
                                    required
                                    fullWidth
                                    id='password'
                                    label='Password'
                                    autoFocus
                                    size='small'
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mt='15px'>
                                <TextField
                                    name="confPassword"
                                    required
                                    fullWidth
                                    id='confPassword'
                                    label='Confirm Password'
                                    autoFocus
                                    size='small'
                                />
                            </Grid>
                        </Grid>
                        <Grid container justifyContent='flex-end'>
                            <Button type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957', marginTop: '50px' }} variant='contained'>Sign Up</Button>
                        </Grid>
                        <Grid container mt='80px' justifyContent="center">
                            <Grid item>
                                Have account? {''}
                                <Link href="/login" variant="body2">
                                    Login here
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container >
        </div >
    )
}

export default Register
