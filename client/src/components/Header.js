import React from 'react'
import "./Header.css"
function Header(props) {
    return (
        <header>
            <h2>{props.turn}'s turn</h2>
            
        </header>
    )
}

export default Header
