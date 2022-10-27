import React, { useState, useContext } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Header from '../header/Header';
import { useNavigate } from 'react-router-dom';
import { TokenContext } from '../context/TokenContext';
import Http from '../axios/Config';
import { ValidateEmail } from '../register/Validation';

const ForgotPassword = (props) => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "email") {
            setEmail(value)
        }
    }

    const clearData = () => {
        setErrorMsg('')
        setEmail('')
    }

    const handleSubmit = () => {
        if (ValidateEmail(email) === false) {
            setErrorMsg('Email Invalid!')
            return;
        }
        const userData = {
            email: email
        }
        let stateData = {
            email: '',
            password: ''
        }
        clearData()
        Http.post('/Student/ResetPassword', userData)
            .then((res) => {
                stateData = res.data
                navigate('ResetPassword', { state: stateData })
            }).catch((err) => {
                if (err.response.status == 401) {
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
                        <Typography>Reset Password</Typography>
                        <Typography>Please enter your email addres</Typography>
                    </Grid>
                    <Grid mt='10px' width='700px'>
                        <Grid item xs={12} sm={6} mt='15px'>
                            <TextField
                                required
                                fullWidth
                                id='email'
                                label='Email'
                                size='small'
                                value={email}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                        <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                    </Grid>
                    <Grid container justifyContent='flex-end' gap={2}>
                        <Button href="/" sx={{ justifyContent: 'flex-end', bgcolor: '#EA9E1F', marginTop: '50px' }} variant='contained'>Cancel</Button>
                        <Button onClick={() => handleSubmit()} type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957', marginTop: '50px' }} variant='contained'>Confirm</Button>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default ForgotPassword
