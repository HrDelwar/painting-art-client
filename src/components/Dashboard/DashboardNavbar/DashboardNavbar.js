import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faChartLine, faCommentDots, faHome, faListUl, faPlus, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';

const DashboardNavbar = ({ handleLogout, isAdmin }) => {

    return (
        <div className="fixed-top bg-custom">
            <nav className="navbar navbar-light w-100">
                <div className="container justify-content-between align-items-center">
                    <a className="navbar-brand m-0" href="/"><img style={{ maxWidth: 90 }} src={logo} alt="" /></a>
                    <ul className="d-flex navbar-nav flex-row text-capitalize">
                        <li className="nav-item mx-1 d-none d-sm-block mx-sm-3">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <div className="dropdown text-capitalize">
                            <a className="nav-link dropdown-toggle" href="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                action
                            </a>
                            <ul className="dropdown-menu dropdown-menu-custom position-absolute bg-custom " aria-labelledby="dropdownMenuLink">
                                <li><a className="dropdown-item d-sm-none" href="/home"><FontAwesomeIcon className="me-2" icon={faHome} />home</a></li>
                                {isAdmin ?
                                    <>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/orderList"><FontAwesomeIcon className="me-2" icon={faChartLine} /> Dashboard</a></li>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/orderList"><FontAwesomeIcon className="me-2" icon={faListUl} /> order list</a></li>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/addService"><FontAwesomeIcon className="me-2" icon={faPlus} /> add service</a></li>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/makeAdmin"><FontAwesomeIcon className="me-2" icon={faUserPlus} /> make admin</a></li>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/manageServices"><FontAwesomeIcon className="me-2" icon={faThLarge} /> manage services</a></li>
                                    </>
                                    :
                                    <>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/addBook/607adb8bd04c5314240fb001"><FontAwesomeIcon className="me-2" icon={faCartPlus} /> book service</a></li>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/bookingList"><FontAwesomeIcon className="me-2" icon={faListUl} /> booking list</a></li>
                                        <li className="dropdown-item" aria-current="true"><a className="text-decoration-none" href="/admin/addReview"><FontAwesomeIcon className="me-2" icon={faCommentDots} /> review</a></li>
                                    </>
                                }
                            </ul>
                        </div>
                    </ul>
                    <Button size="small" className="" onClick={handleLogout} variant="contained">logout</Button>
                </div>
            </nav>
        </div>
    );
};

export default DashboardNavbar;