import React from 'react'
import Button from "../components/Button.jsx"
import "../styles/Welcome.css"
function Welcome() {
    return (
        <>
            <section className='welcome-container'>
                <div className='welcome'>
                    <h1 className='welcome-title'>Welcome to PopX</h1>
                    <div className='welcome-text'><p>Lorem ipsum dolor sit amet,</p> <p>consectetur adipiscing elit,</p></div>
                    <div className='btn-container'>

                        <Button type={"primary"} >Create Account </Button>
                        <Button type={"secondary"}>Already Registered? Login </Button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Welcome