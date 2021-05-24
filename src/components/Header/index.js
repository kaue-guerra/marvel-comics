import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';

import './index.css';
import Logo from '../../img/marvel-logo.png';


const Header = () => {

    const length = useSelector(state => state.cart.length);

    return (
        <header>
            <nav>
                <Link to="/">
                    <img src={Logo} alt="Marvel" className="logo" />
                </Link>
                <Link className="float-right mt-4" to="/cart"> Carrinho({length})</Link>
            </nav>
        </header>
    )
}

export default Header;