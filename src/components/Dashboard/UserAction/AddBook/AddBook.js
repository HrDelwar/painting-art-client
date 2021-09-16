import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { UserContext } from '../../../../App';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const AddBook = () => {
    document.title = "Book Service || Painting Art";
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [service, setService] = useState({});
    const [isPlaceOrder, setIsPlaceOrder] = useState(false);
    const { bookId } = useParams();

    useEffect(() => {
        const url = `https://arcane-beach-78410.herokuapp.com/service/singleService/${bookId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => {
                console.log(err);
            })
    }, [bookId])

    const handleOrderPlace = (paymentId) => {
        const orderInfo = { paymentId, service, user: loggedUser, status: 'pending' }
        const url = `https://arcane-beach-78410.herokuapp.com/order/addOrder`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(orderInfo)
        })
            .then(res => res.json())
            .then(status => setIsPlaceOrder(status))
            .catch(err => {
                console.log(err);
            })
    }

    return (
        <main className="container">
            <h2 className="text-brand text-capitalize text-center my-3 text-md-start">book services</h2>
            <h6 className="text-capitalize mt-5"><strong className="me-3">your name</strong>{loggedUser.displayName}</h6>
            <h6 className="text-capitalize "><strong className="me-3">your email</strong>{loggedUser.email}</h6>
            {service.name && <h6 className="text-capitalize "><strong className="me-3">services name</strong>{service.name}</h6>}
            {service.charge && <h6 className="text-capitalize "><strong className="me-3">your service charge will be</strong>${service.charge}</h6>}
            <PaymentProcess handleOrderPlace={handleOrderPlace} />
            <p className="text-center">{isPlaceOrder ? 'Order place successfully' : ''}</p>
        </main>
    );
};

export default AddBook;