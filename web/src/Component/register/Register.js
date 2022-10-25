import React, { useContext, useState } from 'react'
import Header from '../header/Header'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { TokenContext } from '../context/TokenContext';
import Http from '../axios/Config';
import { Navigate, Link } from 'react-router-dom';
import { ValidateEmail } from './Validation';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const { setToken } = useContext(TokenContext)

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "name") {
            setName(value)
        }
        if (id === "email") {
            setEmail(value)
        }
        if (id === "password") {
            setPassword(value)
        }
        if (id === "confirm") {
            setConfirmPassword(value)
        }
    }

    const clearData = () => {
        setConfirmPassword('')
        setName('')
        setErrorMsg('')
        setPassword('')
        setEmail('')
    }

    const handleSubmit = () => {
        if (name === '' || email === '' || password === '') {
            setErrorMsg('Field Cannot Be Empty!')
            return;
        }
        if (password !== confirmPassword) {
            setErrorMsg('Password Does Not Match!')
            return;
        }
        if (ValidateEmail(email) === false) {
            setErrorMsg('Email Format Invalid!')
            return;
        }
        const userData = {
            name: name,
            email: email,
            password: password
        }
        console.log(userData)
        clearData() 
        Http.post('Student/Register', userData)
            .then((res) => {
                if (res.status === 200) {
                    Http.post('Student/Login', userData)
                        .then((response) => {
                            if (response.status === 200) {
                                setToken(response.data.token)
                                Navigate('/')
                            }
                        }
                        ).catch((error) => {
                            if (error) {
                                console.log(error)
                            }
                        })
                }
            }).catch((err) => {
                console.log('There was an error!', err)
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
                                    required
                                    fullWidth
                                    id='name'
                                    label='Name'
                                    size='small'
                                    value={name}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mt='15px'>
                                <TextField
                                    type='email'
                                    required
                                    fullWidth
                                    id='email'
                                    label='Email'
                                    size='small'
                                    value={email}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mt='15px'>
                                <TextField
                                    type='password'
                                    required
                                    fullWidth
                                    id='password'
                                    label='Password'
                                    size='small'
                                    value={password}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6} mt='15px'>
                                <TextField
                                    type='password'
                                    required
                                    fullWidth
                                    id='confirm'
                                    label='Confirm Password'
                                    size='small'
                                    value={confirmPassword}
                                    onChange={(e) => handleInputChange(e)}
                                />
                            </Grid>
                            <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
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
