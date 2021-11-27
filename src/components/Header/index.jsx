import React from 'react';
import { Link } from 'react-router-dom';
import './index.css'

const Header = () => {
    return (
        <header className="home-header">

            <Link to="/" className="home-header-link">
                <span className="home-header-option">Produtos</span>
            </Link>

            <Link to="/compras" className="home-header-link">
                <span className="home-header-option">Compras</span>
            </Link>
        </header>
    );
};

export default Header;