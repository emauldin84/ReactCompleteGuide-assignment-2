import React from 'react'
import './Char.css'

export default function Char(props) {
    return (
        <div className='char' onClick={props.click} >
            <p>{props.char}</p>
        </div>
    )
}