import React from 'react'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/material/Menu'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import '@fontsource/montserrat'
import { borderRadius } from '@mui/system'
import { AppBar } from '@mui/material'
import './Footer.css'
import { Insta, Telegram, Youtube, Email, Phone } from '../../Assets/image'


const Footer = () => {

    return (
        <div>
            <Box sx={{ bgcolor: '#226957', display: 'flex', flexDirection: 'row', padding: '80px 60px', bottom: '0' }} component="footer">
                <Box sx={{ width: '350px', marginLeft: '95px' }}>
                    <Typography sx={{ color: 'white', textTransform: 'none', fontFamily: 'Montserrat' }}>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', textAlign: 'left' }}>About Us</Typography>
                        <p className='par'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. </p>
                    </Typography>
                </Box>
                <Box sx={{ width: '228px', height: '146px', marginLeft: '120px' }}>
                    <Typography sx={{ color: 'white', textTransform: 'none', fontWeight: 'bold', fontFamily: 'Montserrat' }}>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', textAlign: 'left' }}>Product</Typography>
                        <div className='divUl'>
                            <ul className='ul'>
                                <li>Arabic</li>
                                <li>English</li>
                                <li>Indonesian</li>
                                <li>Mandarin</li>
                                <li>Deutsch</li>
                                <li>French</li>
                                <li>Japanese</li>
                                <li>Melayu</li>
                            </ul>
                        </div>
                    </Typography>
                </Box>
                <Box sx={{ width: '370px', height: '172px', marginLeft: '110px' }}>
                    <Typography sx={{ color: 'white', textTransform: 'none', fontWeight: 'bold', fontFamily: 'Montserrat' }}>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', textAlign: 'left' }}>Address</Typography>
                        <p className='par'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
                        <Typography sx={{ fontWeight: 'bold', fontFamily: 'Montserrat', textAlign: 'left', marginTop: '20px' }}>Contact Us</Typography>
                        <div className='divImg'>
                            <button><img src={Phone} /></button>
                            <button><img src={Insta} /></button>
                            <button><img src={Youtube} /></button>
                            <button><img src={Telegram} /></button>
                            <button><img src={Email} /></button>
                        </div>
                    </Typography>
                </Box>
            </Box>
        </div>
    )
}

export default Footer
