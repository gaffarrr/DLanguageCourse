import React from 'react'
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
import Header from '../header/Header';
import Body from '../body/Body';

const ForgotPassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        console.log({
            email: data.get('email')
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
                        <Typography>Reset Password</Typography>
                        <Typography>Please enter your email addres</Typography>
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
                    </Grid>
                    <Grid container justifyContent='flex-end' gap={2}>
                        <Button href="/" sx={{ justifyContent: 'flex-end', bgcolor: '#EA9E1F', marginTop: '50px' }} variant='contained'>Cancel</Button>
                        <Button href="/forgotpassword/reset" type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957', marginTop: '50px' }} variant='contained'>Confirm</Button>
                    </Grid>
                </Box>
            </Box>
        </div >
    )
}

export default ForgotPassword
