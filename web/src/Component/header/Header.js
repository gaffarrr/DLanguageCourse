import React from 'react'
import logo from '../../Assets/Landing/logo.png'
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
import shadows from '@mui/material/styles/shadows'
import { Link } from 'react-router-dom'

const Header = () => {
    return (

        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" elevation={0} sx={{ bgcolor: 'white' }}>
                <Toolbar className='Toolbar'>
                    <Link to="/">
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
                    </Link>
                    <Box>
                        <Link to="/login">
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
                        </Link>
                        <Link to="/register">
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
                        </Link>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Header
