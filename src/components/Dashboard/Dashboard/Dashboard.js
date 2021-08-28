import React, { useContext, useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import { UserContext } from "../../../App";
import NotFound from "../../Shared/NotFound/NotFound";
import AddService from "../AdminAction/AddService/AddService";
import MakeAdmin from "../AdminAction/MakeAdmin/MakeAdmin";
import ManageServices from "../AdminAction/ManageServices/ManageServices";
import OrderList from "../AdminAction/OrderList/OrderList";
import DashboardNavbar from "../DashboardNavbar/DashboardNavbar";
import SideBar from "../SideBar/SideBar";
import AddBook from "../UserAction/AddBook/AddBook";
import AddReview from "../UserAction/AddReview/AddReview";
import Bookings from "../UserAction/Bookings/Bookings";
import "./Dashboard.css";

const Dashboard = () => {
  document.title = "Dashboard || Painting Art";
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [isAdmin, setIsAdmin] = useState(false);
  const handleLogout = () => {
    setLoggedUser({});
    sessionStorage.setItem("email", "");
    sessionStorage.setItem("displayName", "");
    sessionStorage.setItem("photoURL", "");
  };
  useEffect(() => {
    fetch("https://arcane-beach-78410.herokuapp.com/admin", {
      method: "GET",
      headers: {
        "content-type": "application/json",
        email: loggedUser.email,
      },
    })
      .then((res) => res.json())
      .then((status) => setIsAdmin(status));
  }, [loggedUser.email]);

  return (
    <div className="row">
      <div className="col-md-3 p-0 col-xl-2 d-none d-md-block bg-dark d-flex position-relative justify-content-center align-items-center vh-100">
        <SideBar isAdmin={isAdmin} handleLogout={handleLogout} />
      </div>
      <div className="col-12 pb-5 d-md-none">
        <DashboardNavbar isAdmin={isAdmin} handleLogout={handleLogout} />
      </div>
      <div className="col-md-9 col-xl-10 pt-5 pt-md-3 px-4">
        <Switch>
          <Route path="/admin/addService">
            {isAdmin && <AddService loggedUser={loggedUser} />}
          </Route>
          <Route path="/admin/manageServices">
            {isAdmin && <ManageServices />}
          </Route>
          <Route path="/admin/makeAdmin">{isAdmin && <MakeAdmin />}</Route>
          <Route path="/admin/orderList">{isAdmin && <OrderList />}</Route>
          <Route path="/admin/bookingList">{!isAdmin && <Bookings />}</Route>
          <Route path="/admin/addReview">{!isAdmin && <AddReview />}</Route>
          <Route path="/admin/addBook/:bookId">
            {!isAdmin ? <AddBook /> : <NotFound />}
          </Route>
          <Route path="/admin/*">
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
};

export default Dashboard;
