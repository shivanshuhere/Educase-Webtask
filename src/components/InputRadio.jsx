import React from 'react'
import "../styles/InputRadio.css"
function InputRadio({ title, values, name }) {
    return (
        <>
            <label className='input-radio-title'>{title}</label>
            {values.map((item, index) => {
                <input type="radio" name={name} value={item} className='input-radio' />
            })}
        </>
    )
}

export default InputRadio