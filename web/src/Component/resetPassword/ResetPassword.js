import React, { useState, useContext, useEffect } from 'react'
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { TokenContext } from '../context/TokenContext';
import Http from '../axios/Config';
import Header from '../header/Header';
import Button from '@mui/material/Button';
import { useLocation, useNavigate } from 'react-router-dom';
import { getListItemAvatarUtilityClass } from '@mui/material';

const ResetPassword = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const [confirmPassword, setConfirmPassword] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')
    const [errorMsg, setErrorMsg] = useState('')
    let mail = ''

    useEffect(() => {
        getEmail()
    }, [])

    const getEmail = () => {
        mail = location.state[0].email
        setEmail(mail)
    }

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        if (id === "confirmPassword") {
            setConfirmPassword(value)
        }
        if (id === "password") {
            setPassword(value)
        }
    }

    const clearData = () => {
        setErrorMsg('')
        setConfirmPassword('')
        setPassword('')
    }

    const handleSubmit = () => {
        if (password !== confirmPassword) {
            setErrorMsg('Password Does Not Match')
            return;
        }
        const userData = {
            email: email,
            password: password
        }
        clearData()
        Http.put('/Student/ResetPassword/NewPass', userData)
            .then((res) => {
                if (res.status === 200) {
                    console.log(userData)
                    navigate('/login')
                }
            }
            ).catch((err) => {
                if (err.response.status == 401) {
                    console.log('HELP!', err)
                }
            })
    }

    return (
        <div>
            <Header></Header>
            <Box sx={{
                mt: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <Box mt='3px' maxWidth='1000px'>

                    <Grid container display='flex' flexDirection='column' alignItems='flex-start' justifyContent='left'>
                        <Typography>Create Password</Typography>
                    </Grid>
                    <Grid container mt='10px' width='700px' rowSpacing={2}>
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
                                id='confirmPassword'
                                label='Confirm Password'
                                size='small'
                                value={confirmPassword}
                                onChange={(e) => handleInputChange(e)}
                            />
                        </Grid>
                    </Grid>
                    <p style={{ color: "red", textAlign: 'left', marginTop: '20px' }}>{errorMsg}</p>
                    <Grid container justifyContent='flex-end' gap={2}>
                        <Button href="/" sx={{ justifyContent: 'flex-end', bgcolor: '#EA9E1F', marginTop: '50px' }} variant='contained'>Cancel</Button>
                        <Button onClick={() => handleSubmit()} type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957', marginTop: '50px' }} variant='contained'>Confirm</Button>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default ResetPassword
