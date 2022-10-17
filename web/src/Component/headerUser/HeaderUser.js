import React from 'react'
import logo from '../../Assets/Landing/logo.png'
import { AppBar } from '@mui/material'
import './HeaderUser.css'
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
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';

const HeaderUser = () => {
    return (
        <div>
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

                        <Box display="flex" gap="50px" flexDirection="row" >
                            <Link to="/#">
                                <ShoppingCartIcon fontSize="small" sx={{ color: "#226957" }} />
                            </Link>
                            <Link to="/YourClasses">My Class
                            </Link>
                            <Link to="/#">Invoice
                            </Link>
                            <a style={{ color: 'black' }}>|</a>
                            <a><PersonIcon fontSize='small' sx={{ color: "#226957" }} /></a>
                            <Link>
                                <LogoutIcon fontSize="small" sx={{ color: 'red' }} />
                            </Link>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box >
        </div>
    )
}

export default HeaderUser
