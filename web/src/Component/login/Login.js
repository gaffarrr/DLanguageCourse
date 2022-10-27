import React, { useContext, useState } from 'react'
import Header from '../header/Header'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import { ValidateEmail } from '../register/Validation';
import Http from '../axios/Config';

const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const { setToken } = useContext(TokenContext)

    const handleInputChange = (e) => {
        const { id, value } = e.target
        if (id === "email") {
            setEmail(value)
        }
        if (id === "password") {
            setPassword(value)
        }
    }
    const clearData = () => {
        setErrorMsg('')
        setEmail('')
        setPassword('')
    }

    const handleSubmit = () => {
        if (ValidateEmail(email) === false) {
            setErrorMsg('Email Invalid!')
            return
        }

        const userData = {
            email: email,
            password: password
        }
        clearData()
        Http.post('Student/Login', userData)
            .then((res) => {
                if (res.status === 200) {
                    setToken(res.data.token)
                    navigate('/')
                }
            }).catch((err) => {
                if (err.response.status === 401) {
                    setErrorMsg('Email or Password Invalid')
                    console.log('HELP!', err)
                }
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
                <Box mt='3px' maxWidth='1000px'>

                    <Grid container display='flex' flexDirection='column' alignItems='flex-start' justifyContent='left'>
                        <Typography>Lets Join</Typography>
                        <Typography>D'Language</Typography>
                    </Grid>
                    <Grid mt='10px' width='700px'>
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
                        <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                    </Grid>
                    <Grid container mt='80px' justifyContent="left">
                        <Grid item>
                            Forgot Password? {''}
                            <Link href="/ForgotPassword" variant="body2">
                                Click Here
                            </Link>
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='flex-end'>
                        <Button onClick={() => handleSubmit()} type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957' }} variant='contained'>Login</Button>
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
