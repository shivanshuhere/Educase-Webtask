import React from 'react'
import "../styles/Signin.css"
import InputBox from '../components/InputBox.jsx'
import Button from "../components/Button.jsx"
function Signin() {
    return (
        <>
            <section className='signin-container'>
                <h1 className='signin-title'>Signin to your PopX account</h1>
                <div className='sigin-text'>
                    <p>Lorem ipsum dolor sit amet,</p>
                    <p> consectetur adipiscing elit,</p>
                </div>
                <div>

                    <InputBox title={"Email Address"} type={"email"} placeholder={"Enter email address"} />
                    <InputBox title={"Password"} type={"password"} placeholder={"Enter password"} />
                    <Button type={"text"} />
                </div>
            </section>
        </>
    )
}

export default Signin