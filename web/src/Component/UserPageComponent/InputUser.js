import * as React from 'react';
import { styled } from '@mui/material/styles';
import '@fontsource/montserrat/400.css'
import { Input, Stack } from '@mui/material';

const InputU = styled(Input)({
    marginTop: '20px',
    fontFamily: 'Montserrat',
    paddingLeft: '10px',
    width: '616px',
    height: '33px',
    border: '1px solid rgba(150,150,150,.50)',
    borderRadius: '4px',
    '&:active': {
        border: 'none',
        boxShadow: '0 0 0 0.2rem rgba(150,150,150,.75)',
    }
});

export default function InputUser(props) {
    const { text, id, type, value, onChange } = props
    return (
        <Stack>
            <InputU onChange={onChange} value={value} id={id} type={type} placeholder={text}></InputU>
        </Stack>
    );
};