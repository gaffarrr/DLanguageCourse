import React from 'react'
import logo from '../../Assets/logo.png'
import { AppBar } from '@mui/material'
import './Header.css'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '@fontsource/montserrat'
import { borderRadius } from '@mui/system'

const Header = () => {
    return (
        // <div>
        //     <AppBar className='AppBar' position='static'>
        //         <img src={logo} className="logo" alt="logo" />
        //         <a>Language</a>
        //     </AppBar>
        // </div>
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ bgcolor: 'white' }}>
                <Toolbar className='Toolbar'>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <img src={logo} className="logo" alt="logo" />
                        <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black', fontFamily: 'Montserrat' }}>
                            Language
                        </Typography>
                    </IconButton>
                    <Box>
                        <Button sx={{
                            bgcolor: '#226957',
                            color: 'white',
                            fontFamily: 'Montserrat',
                            marginRight: '16px',
                            textTransform: 'none',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            width: '86px',
                            height: '40px'
                        }}>Login</Button>
                        <Button sx={{
                            bgcolor: '#EA9E1F',
                            color: 'white',
                            fontFamily: 'Montserrat',
                            textTransform: 'none',
                            padding: '10px 20px',
                            borderRadius: '8px',
                            width: '105px',
                            height: '40px'
                        }}>Sign Up</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header
