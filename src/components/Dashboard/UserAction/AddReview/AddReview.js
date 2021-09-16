import { TextField } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../../App';
const AddReview = () => {
    document.title = "Add Review || Paintings Art";
    const [loggedUser, setLoggedUser] = useContext(UserContext);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        const newData = { ...data, ...loggedUser, created: (new Date()).toString() }

        const url = `https://arcane-beach-78410.herokuapp.com/review/addReview`;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(success => {
                setSuccess(success);
            })
    };
    const rule = { ...register('description', { required: { value: 'true', message: 'Description is required' }, }) }
    const rating = {
        ...register('rating',
            {
                required: { value: 'true', message: 'Rating is required' },
                pattern: { value: /^[1-5]{1}$/, message: 'maximum Ratting 5 minimum 1' }
            })
    }
    return (
        <main className="container">
            <h2 className="text-brand text-capitalize text-center text-md-start mb-5">Add review</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h5 className="text-brand mt-5">Description</h5>
                <TextField error={errors?.description} helperText={errors?.description?.message} {...rule} variant="outlined" fullWidth margin="normal" />
                <h5 className="text-brand mt-5">Rating</h5>
                <TextField type="number" placeholder="5" error={errors?.rating} helperText={errors?.rating?.message} {...rating} variant="outlined" fullWidth margin="normal" />
                <input type="submit" className="btn-custom mt-3 text-capitalize" value="Add Review" />
            </form>
            <p className="text-capitalize text-center">{success ? 'review add successfully' : ''}</p>
        </main>
    );
};

export default AddReview;