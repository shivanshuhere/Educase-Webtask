import React from 'react'
import Button from '../components/Button.jsx'

function Welcome() {
    return (
        <>
            <div>
                <h1>Welcome to PopX</h1>
                <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</span>
                <Button text="Create Account" type="primary" />
            </div>
        </>
    )
}

export default Welcome