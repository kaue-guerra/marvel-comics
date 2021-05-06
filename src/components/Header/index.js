import React from 'react'
import './index.css'
import Logo from '../../img/marvel-logo.png'

const Header = () => {
    return (
        <header>
            <nav>
                <img src={Logo} alt="Marvel" className="logo" />
                <div className="header-actions">
                    <span className="total-hq">Hqs Selecionadas(0)</span>
                    <button>Enviar</button>
                </div>
            </nav>
        </header>
    )
}

export default Header
