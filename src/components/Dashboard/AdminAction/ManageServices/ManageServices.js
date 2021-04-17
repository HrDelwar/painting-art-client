import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../../App';

const ManageServices = () => {
    document.title = "Manage Services || Painting Art";
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [services, setServices] = useState([])
    const [success, setSuccess] = useState(false)

    useEffect(() => {
        fetch('https://arcane-beach-78410.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => {
                console.log(err);
            })
    }, [success])

    const handleDeleteService = (id) => {
        console.log(id);
        const url = `https://arcane-beach-78410.herokuapp.com/deleteService/${id}`
        fetch(url, {
            method: 'DELETE',
            headers: {
                "content-type": "application/json",
                "email": loggedUser.email,
            },
        })
            .then(response => response.json())
            .then(success => {
                setSuccess(success);
            })
    }

    return (
        <main className="container">
            <h2 className="text-brand text-capitalize mb-5 text-center text-md-start">manage services</h2>
            <div className="table-responsive" style={{ minHeight: 500 }}>
                <table className="table" >
                    <thead className="text-capitalize">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Service id</th>
                            <th scope="col">name</th>
                            <th scope="col">charge</th>
                            <th scope="col">action</th>
                        </tr>
                    </thead>
                    <tbody >
                        {
                            services.map((service, index) =>
                                <tr key={service._id}>
                                    <td>{index + 1}</td>
                                    <td>{service?._id}</td>
                                    <td>{service?.name}</td>
                                    <td>{service?.charge}</td>
                                    <td>
                                        <button onClick={() => handleDeleteService(`${service._id}`)} className="btn text-uppercase btn-danger" type="button" >delete</button>
                                    </td>
                                </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </main>
    );
};

export default ManageServices;