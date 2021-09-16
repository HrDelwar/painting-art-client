import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../../../App";

const OrderList = () => {
  document.title = "Order List || Painting Art";
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [success, setSuccess] = useState(false);
  useEffect(() => {
    const url = `https://arcane-beach-78410.herokuapp.com/order/allOrders`;
    const email = loggedUser.email;
    fetch(url, {
      headers: {
        "content-type": "application/json",
        email: email,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [success, loggedUser.email]);

  const handleStatus = (id, status) => {
    const url = `https://arcane-beach-78410.herokuapp.com/order/updateOrder/${id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        email: loggedUser.email,
        status: status,
      },
    })
      .then((response) => response.json())
      .then((status) => {
        if (status) {
          setSuccess(!success);
        }
      });
  };

  return (
    <main className="container">
      <h2 className="text-brand text-capitalize text-center text-md-start">
        order lists
      </h2>
      <div className="table-responsive" style={{ minHeight: 500 }}>
        <table className="table">
          <thead className="text-capitalize">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Service</th>
              <th scope="col">PaymentId</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>{order?.user?.displayName || order?.user?.name}</td>
                <td>{order?.user?.email}</td>
                <td>{order?.service?.name}</td>
                <td>{order.paymentId}</td>
                <td>
                  <div className="dropdown">
                    <button
                      className={`btn text-uppercase w-100 dropdown-toggle ${
                        order.status === "pending"
                          ? "btn-danger"
                          : order.status === "done"
                          ? "btn-success"
                          : "bg-custom"
                      } `}
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      {order.status}
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li>
                        <button
                          onClick={() =>
                            handleStatus(`${order._id}`, "pending")
                          }
                          className="dropdown-item"
                        >
                          Pending
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() =>
                            handleStatus(`${order._id}`, "working")
                          }
                          className="dropdown-item"
                        >
                          Working
                        </button>
                      </li>
                      <li>
                        <button
                          onClick={() => handleStatus(`${order._id}`, "done")}
                          className="dropdown-item"
                        >
                          Done
                        </button>
                      </li>
                    </ul>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default OrderList;
