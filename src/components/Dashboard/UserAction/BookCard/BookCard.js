import { Button } from '@material-ui/core';
import React from 'react';

const BookCard = ({ order }) => {
    const { service, status } = order;
    return (
        <div className="col-md-12 col-lg-6 col-xl-4 d-flex justify-content-center">
            <div className="card text-start justify-content-center text-center" style={{ maxWidth: "18rem" }}>
                <div className="overflow-hidden  align-self-center" style={{ maxHeight: '12rem', maxWidth: '12rem' }}>
                    <img className="card-img-top service-img tada" src={service.photo} alt={service.name} />
                </div>
                <div className="card-body text-start">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="card-title py-2 text-capitalize">{service.name}</h5>
                        {status && <Button size="small" className={`${status === 'pending' ? 'bg-danger': status === 'done' ? 'bg-success' : 'bg-custom'}`}>{status}</Button>}
                    </div>
                    <p className="mt-2 text-start">{service.description}</p>
                </div>
            </div>
        </div>
    );
};

export default BookCard;