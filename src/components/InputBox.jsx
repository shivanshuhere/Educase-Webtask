import React from 'react'
import "../styles/InputBox.css"
function InputBox({ type, placeholder, title, defaultValue }) {
    return (
        <>
            <label className='input-title'>{title}</label>
            <input type={type} placeholder={placeholder} value={defaultValue} className='input-box' onChange={() => console.log("changed")} />
        </>
    )
}

export default InputBox