import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import '@fontsource/montserrat/400.css'

const GreenButton = styled(Button)({
    fontWeight: 500,
    textTransform: 'none',
    display: 'flex',
    flexDirection: 'row',
    textDecoration: 'none',
    justifyContent: 'center',
    alignItems: 'flex-start',
    color: 'white',
    backgroundColor: '#226957',
    width: '140px',
    height: '38px',
    fontSize: 15,
    padding: '6px 12px',
    border: '1px solid #226957',
    borderRadius: '8px',
    fontFamily: 'Montserrat',
    '&:hover': {
        color: 'white',
        backgroundColor: '#226957',
        borderColor: '#226957',
        boxShadow: '2px 2px rgba(150,150,150,.75)',
    },
    '&:active': {
        boxShadow: 'none',
        backgroundColor: '#226957',
        borderColor: '#226957',
    },
    '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(150,150,150,.5)',
    },
});

export default function CustomizedButtons(props) {
    const { greenButton, type, onClick } = props
    return (
        <Stack marginTop='20px' spacing={2} justifyContent='center' direction="row">
            <GreenButton onClick={onClick} type={type} variant="contained" disableRipple>{greenButton}</GreenButton>
        </Stack>
    );
};
