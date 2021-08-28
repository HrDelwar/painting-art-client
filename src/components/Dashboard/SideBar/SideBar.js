import React from "react";
import "./Sidebar.css";
import logo from "../../../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartPlus,
  faChartLine,
  faHome,
  faListUl,
  faPlus,
  faThLarge,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { Button } from "@material-ui/core";
import { faCommentDots } from "@fortawesome/free-regular-svg-icons";
import { NavLink } from "react-router-dom";

const SideBar = ({ handleLogout, isAdmin }) => {
  return (
    <aside className="sidebar text-center">
      <div className="mt-5 mb-3">
        <NavLink to="/home">
          <img src={logo} alt="Logo" style={{ maxWidth: 120 }} />
        </NavLink>
      </div>
      <ul className="list-group text-start">
        <li className="list-group-item" aria-current="true">
          <NavLink className="text-decoration-none" to="/home">
            <FontAwesomeIcon className="me-2" icon={faHome} /> Home
          </NavLink>
        </li>
        {isAdmin ? (
          <>
            <li className="list-group-item" aria-current="true">
              <NavLink className="text-decoration-none" to="/admin/orderList">
                <FontAwesomeIcon className="me-2" icon={faChartLine} />{" "}
                Dashboard
              </NavLink>
            </li>
            <li className="list-group-item" aria-current="true">
              <NavLink className="text-decoration-none" to="/admin/orderList">
                <FontAwesomeIcon className="me-2" icon={faListUl} /> order list
              </NavLink>
            </li>
            <li className="list-group-item" aria-current="true">
              <NavLink className="text-decoration-none" to="/admin/addService">
                <FontAwesomeIcon className="me-2" icon={faPlus} /> add service
              </NavLink>
            </li>
            <li className="list-group-item" aria-current="true">
              <NavLink className="text-decoration-none" to="/admin/makeAdmin">
                <FontAwesomeIcon className="me-2" icon={faUserPlus} /> make
                admin
              </NavLink>
            </li>
            <li className="list-group-item" aria-current="true">
              <NavLink
                className="text-decoration-none"
                to="/admin/manageServices"
              >
                <FontAwesomeIcon className="me-2" icon={faThLarge} /> manage
                services
              </NavLink>
            </li>
          </>
        ) : (
          <>
            <li className="list-group-item" aria-current="true">
              <NavLink
                className="text-decoration-none"
                to="/admin/addBook/607adb8bd04c5314240fb001"
              >
                <FontAwesomeIcon className="me-2" icon={faCartPlus} /> book
                service
              </NavLink>
            </li>
            <li className="list-group-item" aria-current="true">
              <NavLink className="text-decoration-none" to="/admin/bookingList">
                <FontAwesomeIcon className="me-2" icon={faListUl} /> booking
                list
              </NavLink>
            </li>
            <li className="list-group-item" aria-current="true">
              <NavLink className="text-decoration-none" to="/admin/addReview">
                <FontAwesomeIcon className="me-2" icon={faCommentDots} /> review
              </NavLink>
            </li>
          </>
        )}
      </ul>
      <Button
        size="small"
        className="sidebar-btn"
        onClick={handleLogout}
        variant="contained"
      >
        logout
      </Button>
    </aside>
  );
};

export default SideBar;
