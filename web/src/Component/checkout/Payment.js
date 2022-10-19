import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import React, { useState } from 'react'
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { ListItemButton } from '@mui/material';

const paymentMethod = ['Gopay', 'OVO', 'DANA', 'Mandiri', 'BCA', 'BNI']

const SimpleDialog = (props) => {
    const { open } = props

    const [selectedIndex, setSelectedIndex] = useState()

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Dialog open={open}>
            <DialogTitle>Select Payment Method</DialogTitle>
            <List sx={{ pt: 0 }}>
                {paymentMethod.map((index) => (
                    <ListItemButton selected={selectedIndex === paymentMethod.index} onClick={(event) => handleListItemClick(event, paymentMethod.index)} key={index}>
                        <ListItemText primary={index} />
                    </ListItemButton>
                ))}
            </List>
        </Dialog>
    )
}

// SimpleDialog.propTypes = {
//     onClose: PropTypes.func.isRequired,
//     open: PropTypes.bool.isRequired,
//     selectedValue: PropTypes.string.isRequired,
// }

const Payment = () => {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(paymentMethod[1]);
    const [selectedIndex, setSelectedIndex] = useState(paymentMethod.index)

    const handleClickOpen = () => {
        setOpen(true);
    };


    return (
        <div>
            <SimpleDialog selectedIndex={selectedIndex}
                open={open} />
        </div>
    )
}

export default Payment
