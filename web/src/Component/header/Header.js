import React, { useContext } from 'react'
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
import { Link, useNavigate } from 'react-router-dom'
import { TokenContext } from '../context/TokenContext'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogoutIcon from '@mui/icons-material/Logout';
import PersonIcon from '@mui/icons-material/Person';


const Header = () => {
    const { token, setToken } = useContext(TokenContext)
    const navigate = useNavigate()

    const handleClick = () => {
        setToken('')
        localStorage.removeItem('tl')
        navigate('/login')
    }
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
                    {token &&
                        <Box display="flex" gap="50px" flexDirection="row" >
                            <Link to="/Checkout">
                                <ShoppingCartIcon fontSize="small" sx={{ color: "#226957" }} />
                            </Link>
                            <Link to="/YourClasses">My Class
                            </Link>
                            <Link to="/Invoice">Invoice
                            </Link>
                            <a style={{ color: 'black' }}>|</a>
                            <a><PersonIcon fontSize='small' sx={{ color: "#226957" }} /></a>
                            <Link to='/login' onClick={() => handleClick()}>
                                <LogoutIcon fontSize="small" sx={{ color: 'red' }} />
                            </Link>
                        </Box>
                    }{!token &&
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
                    }
                </Toolbar>
            </AppBar>
        </Box >
    )
}

export default Header
