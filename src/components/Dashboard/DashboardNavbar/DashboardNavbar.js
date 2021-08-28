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
                    <Link className="navbar-brand m-0" to="/"><img style={{ maxWidth: 90 }} src={logo} alt="" /></Link>
                    <ul className="d-flex navbar-nav flex-row text-capitalize">
                        <li className="nav-item mx-1 d-none d-sm-block mx-sm-3">
                            <Link className="nav-link" to="/home">Home</Link>
                        </li>
                        <div className="dropdown text-capitalize">
                            <Link className="nav-link dropdown-toggle" to="/" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                action
                            </Link>
                            <ul className="dropdown-menu dropdown-menu-custom position-absolute bg-custom " aria-labelledby="dropdownMenuLink">
                                <li><Link className="dropdown-item d-sm-none" to="/home"><FontAwesomeIcon className="me-2" icon={faHome} />home</Link></li>
                                {isAdmin ?
                                    <>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/orderList"><FontAwesomeIcon className="me-2" icon={faChartLine} /> Dashboard</Link></li>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/orderList"><FontAwesomeIcon className="me-2" icon={faListUl} /> order list</Link></li>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/addService"><FontAwesomeIcon className="me-2" icon={faPlus} /> add service</Link></li>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/makeAdmin"><FontAwesomeIcon className="me-2" icon={faUserPlus} /> make admin</Link></li>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/manageServices"><FontAwesomeIcon className="me-2" icon={faThLarge} /> manage services</Link></li>
                                    </>
                                    :
                                    <>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/addBook/607adb8bd04c5314240fb001"><FontAwesomeIcon className="me-2" icon={faCartPlus} /> book service</Link></li>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/bookingList"><FontAwesomeIcon className="me-2" icon={faListUl} /> booking list</Link></li>
                                        <li className="dropdown-item" aria-current="true"><Link className="text-decoration-none" to="/admin/addReview"><FontAwesomeIcon className="me-2" icon={faCommentDots} /> review</Link></li>
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