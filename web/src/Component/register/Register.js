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
import { useNavigate, Link } from 'react-router-dom';
import { ValidateEmail } from './Validation';

const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const { setToken } = useContext(TokenContext)

    const navigate = useNavigate()

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
                                navigate('/')
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
        <div align='center'>
            <Header />
            <Container component='main'>
                <Box sx={{
                    mt: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <Grid container maxWidth='690px' display='flex' flexDirection='column' align='flex-start' justifyContent='left'>
                        <Grid container justifyContent='left' gap='20px'>
                            <Typography>Lets Join</Typography>
                            <Typography>D'Language</Typography>
                        </Grid>
                        <Typography>Please register first</Typography>
                    </Grid>
                    <Box mt='3px' maxWidth='1000px'>
                        <Grid container mt='10px' maxWidth='700px' rowSpacing={2}>
                            <Grid item xs={20}>
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
                            <Grid item xs={20}>
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
                            <Grid item xs={20}>
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
                            <Grid item xs={20}>
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

                            {/* <InputUser id="name" type="text" text='Name' value={name} onChange={(e) => handleInputChange(e)}></InputUser>
                            <InputUser id='email' type="email" text='Email' value={email} onChange={(e) => handleInputChange(e)}></InputUser>
                            <InputUser id='password' type="password" text='Password' value={password} onChange={(e) => handleInputChange(e)}></InputUser>
                            <InputUser id='confirm' type="password" text='Confirm Password' value={confirmPassword} onChange={(e) => handleInputChange(e)}></InputUser> */}
                            <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                        </Grid>
                        <Grid container justifyContent='flex-end'>
                            <Button onClick={() => handleSubmit()} type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957' }} variant='contained'>Sign Up</Button>
                            {/* <SingleButton onClick={() => handleSubmit()} type='submit' greenButton={'Sign Up'}></SingleButton> */}
                        </Grid>
                        <Grid container mt='80px' justifyContent="center">
                            <Grid item>
                                Have account? {''}
                                <Link to="/login" variant="body2">
                                    Login Here
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
