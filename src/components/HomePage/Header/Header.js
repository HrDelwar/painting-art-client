import React from 'react';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import HeaderMain from '../HeaderMain/HeaderMain';
import './Header.css'

const Header = () => {
    return (
        <header className="home-header">
            <Navbar />
            <HeaderMain />
        </header>
    );
};

export default Header;