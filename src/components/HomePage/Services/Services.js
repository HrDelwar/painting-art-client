import React, { useEffect, useState } from 'react';

const Services = () => {
    const [services, setService] = useState([])
    useEffect(() => {
        fetch('https://arcane-beach-78410.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setService(data))
            .catch(err => {
                console.log(err);
            })
    }, [])
    return (
        <section id="services" className="container pt-5 pb-2 text-center">
            <h5 className="text-primary text-uppercase pt-5">services</h5>
            <h2 className="lined text-brand text-center pb-2">Our Services</h2>
            <div className="row justify-content-center pt-5">
                {
                    services.map(service => (
                        <div key={service.name} className="col-md-4 d-flex justify-content-center text-center mb-3">
                            <div className="card text-start justify-content-center text-center" style={{ maxWidth: "18rem" }}>
                                <div className="overflow-hidden  align-self-center" style={{ maxHeight: '12rem', maxWidth: '12rem' }}>
                                    <img className="card-img-top service-img tada" src={service.photo} alt={service.name} />
                                </div>
                                <div className="card-body text-start">
                                    <h5 className="card-title py-2 text-capitalize">{service.name}</h5>
                                    <small><strong>Service charge</strong> ${service.charge}</small>
                                    <p className="mt-2 text-start">{service.description}</p>
                                </div>

                                <a href={`/admin/addBook/${service._id}`}><button className="btn-custom text-capitalize">get service</button></a>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="btn-custom text-capitalize">See more</button><br /><br />
        </section >
    );
};

export default Services;