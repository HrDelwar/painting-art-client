import { Button, Drawer, IconButton, } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import ResponsiveNavbar from '../ResponsiveNavbar/ResponsiveNavbar';
import { Link } from 'react-router-dom';
import logo from '../../../../images/logo.png';
import { UserContext } from '../../../../App';

const Navbar = ({ using }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        setScroll(window.pageYOffset > 200);
        window.addEventListener("scroll", () => {
            setScroll(window.scrollY > 200);
        });
    }, []);

    useEffect(() => {
        fetch('https://arcane-beach-78410.herokuapp.com/admin', {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'email': loggedUser.email
            },
        })
            .then(res => res.json())
            .then(status => setIsAdmin(status))
    }, [loggedUser.email]);

    const toggleResponseSidebar = open => event => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setIsOpen(open);
    };
    const handleLogout = () => {
        setLoggedUser({})
        sessionStorage.setItem('email', '')
        sessionStorage.setItem('displayName', '')
        sessionStorage.setItem('photoURL', '')
    }
    return (
        <div className={`fixed-top ${scroll ? ' bg-custom' : ''} ${using === 'loginPage' ? 'bg-custom' : ''}`}>
            <nav className="navbar navbar-expand-lg navbar-light w-100">
                <div className="container justify-content-between align-items-center">
                    <a className="navbar-brand m-0" href="/"><img style={{ maxWidth: 90 }} src={logo} alt="" /></a>
                    <IconButton onClick={toggleResponseSidebar(true)} className="d-lg-none" aria-label="menu">
                        <MenuIcon style={{ fontSize: '3rem' }} className="text-white" />
                    </IconButton>
                    <div className="collapse navbar-collapse justify-content-center" >
                        <ul className="navbar-nav  mb-lg-0 text-capitalize">
                            <li className="nav-item ms-xl-5 ms-lg-3">
                                <Link onClick={() => window.scrollTo(0, 0)} className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item ms-xl-5 ms-lg-3">
                                <a className="nav-link px-sm-0 px-lg-1" href={using === 'loginPage' ? "/home#recent-works" : '#recent-works'}>Recent Work</a>
                            </li>
                            <li className="nav-item ms-xl-5 ms-lg-3">
                                <a className="nav-link" href={using === 'loginPage' ? "/home#services" : '#services'}>services</a>
                            </li>
                            <li className="nav-item ms-xl-5 ms-lg-3">
                                <a className="nav-link" href={using === 'loginPage' ? "/home#blogs" : '#blogs'}>blog</a>
                            </li>
                            <li className="nav-item ms-xl-5 ms-lg-3">
                                <a className="nav-link" href={using === 'loginPage' ? "/home#contact" : '#contact'}>contact</a>
                            </li>
                            <li className="nav-item ms-xl-5 ms-lg-3">
                                <Link className="nav-link" to={`/admin/${isAdmin?'orderList':'bookingList'}`}>Dashboard</Link>
                            </li>
                        </ul>
                    </div>
                    {!loggedUser.email ?
                        <Button className="" variant="contained"><Link className="text-decoration-none text-dark" to="/login">Login</Link></Button>
                        : <Button className="" onClick={handleLogout} variant="contained">logout</Button>
                    }
                </div>
            </nav>
            <Drawer anchor="right" open={isOpen} onClose={toggleResponseSidebar(false)}>
                <ResponsiveNavbar isAdmin={isAdmin} toggleResponseSidebar={toggleResponseSidebar} using={using} />
            </Drawer>
        </div>

    );
};

export default Navbar;