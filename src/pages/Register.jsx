import React from 'react'
import "../styles/Register.css"
import InputBox from '../components/InputBox.jsx'
import Button from "../components/Button.jsx"
function Register() {
    const [isAgency, setIsAgency] = React.useState(false)
    return (
        <>
            <form className='register-container'>
                <div className='btn-container'>
                    <h1 className='register-title'>Create your PopX account</h1>
                    <InputBox title={"Full Name"} type={"text"} placeholder={"Enter full name"} defaultValue={"Marry Doe"} />
                    <InputBox title={"Phone number"} type={"text"} placeholder={"Enter phone number"} defaultValue={"Marry Doe"} />
                    <InputBox title={"Email address"} type={"email"} placeholder={"Enter email address"} defaultValue={"Marry Doe"} />
                    <InputBox title={"Password"} type={"password"} placeholder={"Enter password"} />
                    <InputBox title={"Company name"} type={"text"} placeholder={"Enter company name"} defaultValue={"Marry Doe"} />
                    <div className='register-agency'>
                        <p>Are you an agency?</p>
                        <div>
                            <input type='radio' name='agency' onChange={() => setIsAgency(true)} value={isAgency} defaultChecked />
                            <label>Yes</label>
                            <input type='radio' name='agency' value={isAgency} onChange={() => setIsAgency(false)} />
                            <label>No</label>
                        </div>
                    </div>
                </div>
                <Button type={"primary"} className="btn"  >Create Account</Button>
            </form>
        </>
    )
}

export default Register