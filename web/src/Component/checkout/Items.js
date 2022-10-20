import { Button } from '@mui/material'
import React from 'react'

const Items = (props) => {
    const { item, onItemDelete } = props

    return (
        <div>
            <div>
                <div>
                    <a>{item.schedule.getDate()} - </a>
                    <a>{item.schedule.getMonth()} - </a>
                    <a>{item.schedule.getFullYear()}</a>
                </div>
                <div>
                    <span>{`${item.language}`}</span>
                    <span style={{ fontWeight: 'bold' }}>{`${item.course}`}</span>
                    {/* <span>{`${item.schedule.getDate().getMonth().getFullYear()}`}</span> */}
                    <span>{`${item.price}`}</span>
                </div>
            </div>
            <Button variant='contained' color='error' onClick={onItemDelete}>{`Delete`}</Button>
        </div>
    )
}

export default Items
