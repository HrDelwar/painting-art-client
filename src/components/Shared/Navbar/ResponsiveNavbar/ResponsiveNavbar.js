import { Button, IconButton } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import ClearIcon from '@material-ui/icons/Clear';

const ResponsiveNavbar = ({ toggleResponseSidebar, using, isAdmin }) => {
    return (
        <div
            className="p-3 text-uppercase"
            style={{ minWidth: 280 }}
            role="presentation"
            onClick={toggleResponseSidebar(false)}
            onKeyDown={toggleResponseSidebar(false)}
        >
            <ul className="navbar-nav text-center mb-lg-0">
                <li className="nav-item my-5">
                    <Button onClick={() => toggleResponseSidebar(false)} className="tada rounded-circle p-3" variant="contained" color="secondary" ><ClearIcon /></Button>
                </li>
                <li className="nav-item ">
                    <Link onClick={() => window.scrollTo(0, 0)} className="nav-link" to="/home">Home</Link>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href={using === 'loginPage' ? "/home#recent-works" : '#recent-works'}>Recent Work</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href={using === 'loginPage' ? "/home#services" : '#services'}>services</a>
                </li>
                <li className="nav-item ">
                    <a className="nav-link" href={using === 'loginPage' ? "/home#blogs" : '#blogs'}>blog</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href={using === 'loginPage' ? "/home#contact" : '#contact'}>contact</a>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={`/admin/${isAdmin ? 'orderList' : 'bookingList'}`}>Dashboard</Link>
                </li>
            </ul>

        </div>
    );
};

export default ResponsiveNavbar;