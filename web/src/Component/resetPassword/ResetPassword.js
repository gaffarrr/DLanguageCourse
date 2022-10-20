import React from 'react'
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
import Button from '@mui/material/Button';

const ResetPassword = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget)
        console.log({
            newPassword: data.get('newPassword'),
            confNewPassword: data.get('confNewPassword')
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
                <Box component='form' noValidate onSubmit={handleSubmit} mt='3px' maxWidth='1000px'>

                    <Grid container display='flex' flexDirection='column' alignItems='flex-start' justifyContent='left'>
                        <Typography>Create Password</Typography>
                    </Grid>
                    <Grid mt='10px' width='700px'>
                        <Grid item xs={12} sm={6} mt='15px'>
                            <TextField
                                type='password'
                                name="newPassword"
                                required
                                fullWidth
                                id='newPassword'
                                label='New Password'
                                autoFocus
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={12} sm={6} mt='15px'>
                            <TextField
                                type='password'
                                name="confNewPassword"
                                required
                                fullWidth
                                id='confNewPassword'
                                label='Confirm New Password'
                                autoFocus
                                size='small'
                            />
                        </Grid>
                    </Grid>
                    <Grid container justifyContent='flex-end' gap={2}>
                        <Button href="/" sx={{ justifyContent: 'flex-end', bgcolor: '#EA9E1F', marginTop: '50px' }} variant='contained'>Cancel</Button>
                        <Button type='submit' sx={{ justifyContent: 'flex-end', bgcolor: '#226957', marginTop: '50px' }} variant='contained'>Confirm</Button>
                    </Grid>
                </Box>
            </Box>
        </div>
    )
}

export default ResetPassword
