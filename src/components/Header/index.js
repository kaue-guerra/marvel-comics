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

                <Link to="/" className="display-4 ml-5 align-middle text-white" >Home</Link>
                <Link className="float-right mt-4 text-white align-middle" to="/cart"> <i class="fas fa-shopping-cart">({length})</i></Link>
            </nav>
        </header>
    )
}

export default Header;