import React from 'react'
import logo from "../header-img.png"

export default function Header() {

    const imgStyle = {
        width: "60%",
        margin: "20px 0 0 0"
    }

    const headerStyle = {
        fontSize: "2rem"
    }

    return (
        <div>
          <img style={ imgStyle } src={ logo } alt="Space Odyssey Blog Logo" />
          <h1 style={ headerStyle }>NASA Photo of the Day</h1> 
        </div>
    )
}
