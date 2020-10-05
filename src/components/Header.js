import React from 'react'
import logo from "../header-img.png"

export default function Header() {
    return (
        <div>
          <img src={ logo } alt="Space Odyssey Blog Logo" />
          <h1>NASA Photo of the Day</h1> 
        </div>
    )
}
