import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './index.css';
import Logo from '../../img/marvel-logo.png';


const Header = () => {

    const length = useSelector(state => state.cart.length);

    return (
        <div className="header-prime">
            <nav className="l-header navbar navbar-expand-lg navbar-dark">
                <NavLink to="/" activeClassName="active" className="navbar-brand">
                    <img src={Logo} alt="Marvel" className="logo" />
                </NavLink>

                <div className="collapse navbar-collapse" id="navbarColor01">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/" activeClassName="active" className="nav-link">
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/cart" activeClassName="active" className="nav-link">
                                HQs Selecionadas
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <ul className="navbar-nav ml-md-auto">
                    <NavLink to="/cart" activeClassName="active" className="nav-item text-white">
                        <i className="fas fa-shopping-cart fa-2x" aria-hidden="true">
                            <span className="fa-counter">({length})</span>
                        </i>
                    </NavLink>
                </ul>
            </nav>
        </div>
    )
}

export default Header;