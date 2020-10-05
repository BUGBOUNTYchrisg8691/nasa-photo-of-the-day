import { findByLabelText } from '@testing-library/react'
import React from 'react'

export default function Login() {

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const btnStyle = {
        color: "whitesmoke",
        backgroundColor: "darkblue",
        width: "15%",
        borderRadius: "10px",
        border: "5px solid lightblue",
        margin: "5px 0",
        padding: "5px 15px"
    }

    return (
        <div style={ divStyle }>
            <button style={btnStyle} className="btn login">Login</button> 
            <button style={btnStyle} className="btn sign-up">Sign Up</button>
        </div>
    )
}
