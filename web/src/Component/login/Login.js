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

const Login = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email'),
            password: data.get('password')
        })
    }

    return (
        <div className='divLogin'>
            <Header></Header>
            <Box sx={{
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Box component='form' noValidate onSubmit={handleSubmit} mt='3px' maxWidth='1000px'>

                    <Grid container display='flex' flexDirection='column' alignItems='flex-start' justifyContent='left'>
                        <Typography>Lets Join</Typography>
                        <Typography>D'Language</Typography>
                    </Grid>
                    <Grid mt='10px' width='700px'>
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
                    </Grid>
                    <Grid container mt='80px' justifyContent="left">
                        <Grid item>
                            Forgot Password? {''}
                            <Link href="/register" variant="body2">
                                Click Here
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='flex-end'>
                        <Button type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957', marginTop: '50px' }} variant='contained'>Login</Button>
                    </Grid>
                    <Grid container mt='80px' justifyContent="center">
                        <Grid item>
                            Dont have account? {''}
                            <Link href="/register" variant="body2">
                                Sign Up Here
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default Login
