import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';
import BookCard from '../BookCard/BookCard';

const Bookings = () => {
    document.title = "Bookings || Painting Art";
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [orders, setOrders] = useState([])
    useEffect(() => {
        const url = `https://arcane-beach-78410.herokuapp.com/order/orders`;
        const email = loggedUser.email;
        fetch(url, {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                email: email
            },
        })
            .then(res => res.json())
            .then(data => setOrders(data))
            .catch(err => {
                console.log(err);
            })
    }, [loggedUser.email])

    return (
        <main className="container">
            <h2 className="text-brand text-capitalize text-center text-md-start mb-5">Booking list</h2>
            <div className="row">
                {
                    orders.map(order => <BookCard key={order._id} order={order} />)
                }
            </div>
        </main>
    );
};

export default Bookings;