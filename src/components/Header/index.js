import React from 'react'
import './index.css'
import Logo from '../../img/marvel-logo.png'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Marvel" className="logo" />
            </nav>
        </header>
    )
}

export default Header
