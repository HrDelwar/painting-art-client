import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useForm } from "react-hook-form";
import { UserContext } from '../../../../App';

const MakeAdmin = () => {
    document.title = "Make Admin || Painting Art";
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const [success, setSuccess] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const userEmail = loggedUser.email;

    const onSubmit = data => {
        const newData = { ...data, created: (new Date()).toString() }
        const url = `https://arcane-beach-78410.herokuapp.com/admin/addAdmin`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                user: userEmail,
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(status => {
                setSuccess(status);
            })
    };

    const email = {
        ...register('email',
            {
                required: { value: 'true', message: 'Email is required' },
                pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: 'Enter correct email address'
                }
            })
    };
    return (
        <main className="container">
            <h2 className="text-brand text-capitalize text-center text-md-start">make admin</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="text-brand mt-5">Email</h5>
                <TextField placeholder="Email" error={errors?.email} helperText={errors?.email?.message} {...email} variant="outlined" fullWidth margin="normal" />
                <input type="submit" className="btn-custom mt-3 text-capitalize" value="Make Admin" />
            </form>
            <p className="text-capitalize text-center">{success ? 'successfully make admin' : ''}</p>
        </main>
    );
};

export default MakeAdmin;