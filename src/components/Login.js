import React from 'react'
import styled from "styled-components"
import { Button } from "reactstrap"
// import { Button } from "@material-ui/core"

const MyBtn = styled(Button)`
    background-color: ${props => props.theme.primaryColor};
    color: ${props => props.theme.tertiaryColor};
    border: ${props => props.theme.secondaryColor};
    &:hover {
        transform: scale(1.2);
        transition-duration: 0.4s;
    }
`

const SignUpBtn = styled(MyBtn)`
    background-color: ${props => props.theme.tertiaryColor};
    color: ${props => props.theme.primaryColor};
`

export default function Login() {

    const divStyle = {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }

    const btnStyle = {
        borderRadius: "10px",
        width: "10%",
        margin: "5px 0",
        padding: "8px",
        fontSize: "1.2rem"
    }

    return (
        <div style={ divStyle }>
            <MyBtn style={btnStyle} className="btn login">Login</MyBtn> 
            <SignUpBtn style={btnStyle} className="btn sign-up">Sign Up</SignUpBtn>
        </div>
    )
}
