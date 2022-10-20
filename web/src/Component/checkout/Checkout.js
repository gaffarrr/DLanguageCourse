import { BottomNavigation, Button, Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import HeaderUser from '../headerUser/HeaderUser'
import Grid from '@mui/material/Grid'
import Payment from './Payment'
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PropTypes from 'prop-types';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText';
import DeleteIcon from '@mui/icons-material/DeleteForever';
import IconButton from '@mui/material/IconButton'
import Items from './Items'

const paymentMethod = ['Gopay', 'OVO', 'DANA', 'Mandiri', 'BCA', 'BNI']

const SimpleDialog = (props) => {
    const { onClose, selectedValue, open } = props

    const handleClose = () => {
        onClose();
    };
    const [selectedIndex, setSelectedIndex] = useState(1)
    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Dialog open={open}>
            <DialogTitle>Select Payment Method</DialogTitle>
            <List sx={{ pt: 0 }}>
                {paymentMethod.map((index) => (
                    <ListItemButton selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)} key={index}>
                        <ListItemText primary={index} />
                    </ListItemButton>
                ))}
            </List>
            <Grid container justifyContent='center' gap='10px' marginBottom='20px'>
                <Button onClick={handleClose} variant='contained' sx={{ bgcolor: '#EA9E1F' }}>Cancel</Button>
                <Button href="/invoiceconfirmation" variant='contained' sx={{ bgcolor: '#226957' }}>Pay Now</Button>
            </Grid>
        </Dialog>

        // const handleListItemClick = (value) => {
        //     onClose(value);
        // };

        // return (
        //     <Dialog onClose={handleClose} open={open}>
        //         <DialogTitle>Select Payment Method</DialogTitle>
        //         <List sx={{ pt: 0 }}>
        //             {paymentMethod.map((method) => (
        //                 <ListItem button onClick={() => handleListItemClick(method)} key={method}>
        //                     <ListItemText primary={method} />
        //                 </ListItem>
        //             ))}
        //         </List>
        //     </Dialog>
    )
}

SimpleDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
}

const getFormattedPrice = (price) => `IDR ${price.toFixed(2)}`;

const Checkout = () => {
    const [open, setOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState(paymentMethod[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    const [listCourse, setList] = useState(
        [
            {
                id: '001',
                language: 'English',
                course: 'Basic English for Junior',
                schedule: new Date('2022-07-29'),
                price: 400.000
            },
            {
                id: '002',
                language: 'Japanese',
                course: 'Japanese Course : Kanji',
                schedule: new Date('2022-07-30'),
                price: 300.000
            },
            {
                id: '003',
                language: 'Mandarin',
                course: 'Level 1 Mandarin',
                schedule: new Date('2022-07-27'),
                price: 200.000
            }
        ]
    )

    const [checkedState, setCheckedState] = useState(
        new Array(listCourse.length).fill(false)
    )

    const [total, setTotal] = useState(0)

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
            index === position ? !item : item
        );

        setCheckedState(updatedCheckedState);

        const totalPrice = updatedCheckedState.reduce(
            (sum, currentState, index) => {
                if (currentState === true) {
                    return sum + listCourse[index].price;
                }
                return sum;
            },
            0
        );

        setTotal(totalPrice);
    };

    const deleteItem = (index) => {
        const listCourseTemp = [...listCourse]
        listCourseTemp.splice(index, 1)
        setList(listCourseTemp)
    }

    return (
        <div>
            <HeaderUser />
            {/* {
                listCourse.map((item, index) =>
                    <Items
                        key={item.id}
                        item={item}
                        index={index}
                        onItemDelete={() => deleteItem(item)}>
                    </Items>
                )

            } */}

            {listCourse.map(({ language, course, schedule, price }, index) => {
                return (
                    <ul key={index}>
                        <div className="toppings-list-item">
                            <div className="left-section">
                                <input
                                    type="checkbox"
                                    id={`custom-checkbox-${index}`}
                                    name={course}
                                    value={course}
                                    checked={checkedState[index]}
                                    onChange={() => handleOnChange(index)}
                                />
                                <label htmlFor={`custom-checkbox-${index}`}>{course}</label>
                            </div>
                            <div className="right-section">{getFormattedPrice(price)}
                                <IconButton onClick={() => deleteItem(index)}><DeleteIcon /></IconButton>
                            </div>
                        </div>
                    </ul>
                );
            })}
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={4}>
                <Box height='70px' paddingLeft={10} paddingRight={10}>
                    <Grid justifyContent='space-between' display='flex' flexDirection='row'>
                        <Box display='flex' flexDirection='row' gap={3}>
                            <Typography>Total Price</Typography>
                            <Typography>{getFormattedPrice(total)}</Typography>
                        </Box>
                        <Button variant='contained' height={5} onClick={handleClickOpen}>Pay Now</Button>
                        <SimpleDialog selectedValue={selectedValue}
                            open={open}
                            onClose={handleClose} />
                    </Grid>
                </Box>
            </Paper>
        </div >
    )
}

export default Checkout
