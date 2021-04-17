import React from 'react';
import './Sidebar.css'
import logo from '../../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faChartLine, faHome, faListUl, faPlus, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@material-ui/core';
import { faCommentDots } from '@fortawesome/free-regular-svg-icons';

const SideBar = ({ handleLogout, isAdmin }) => {
    return (
        <aside className="sidebar text-center">
            <div className="mt-5 mb-3">
                <a href="/"><img src={logo} alt="Logo" style={{ maxWidth: 120 }} /></a>
            </div>
            <ul className="list-group text-start">
                <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/home"><FontAwesomeIcon className="me-2" icon={faHome} /> Home</a></li>
                {isAdmin ?
                    <>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/orderList"><FontAwesomeIcon className="me-2" icon={faChartLine} /> Dashboard</a></li>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/orderList"><FontAwesomeIcon className="me-2" icon={faListUl} /> order list</a></li>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/addService"><FontAwesomeIcon className="me-2" icon={faPlus} /> add service</a></li>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/makeAdmin"><FontAwesomeIcon className="me-2" icon={faUserPlus} /> make admin</a></li>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/manageServices"><FontAwesomeIcon className="me-2" icon={faThLarge} /> manage services</a></li>
                    </>
                    :
                    <>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/addBook/607adb8bd04c5314240fb001"><FontAwesomeIcon className="me-2" icon={faCartPlus} /> book service</a></li>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/bookingList"><FontAwesomeIcon className="me-2" icon={faListUl} /> booking list</a></li>
                        <li className="list-group-item" aria-current="true"><a className="text-decoration-none" href="/admin/addReview"><FontAwesomeIcon className="me-2" icon={faCommentDots} /> review</a></li>
                    </>
                }

            </ul>
            <Button size="small" className="sidebar-btn" onClick={handleLogout} variant="contained">logout</Button>
        </aside>
    );
};

export default SideBar;