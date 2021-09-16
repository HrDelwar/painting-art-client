import { Button, Grid, TextField, Typography } from '@material-ui/core';
import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { IMAGE_BB_KEY } from '../../../../env';

const AddService = ({ loggedUser }) => {
    document.title = "Add Service || Paintings Art";

    const [success, setSuccess] = useState(false);
    const [uploadedImage, setUploadedImage] = useState({});
    const [imageRequired, setImageRequired] = useState({
        required: {
            value: true,
            message: 'Service photo is required'
        }
    });
    const { register, handleSubmit, formState: { errors } } = useForm();

    //service form and add service in database
    const onSubmit = data => {
        const newData = { ...data };
        newData.photo = uploadedImage.display_url;
        const url = `https://arcane-beach-78410.herokuapp.com/service/addService`;
        const userEmail = loggedUser.email;
        fetch(url, {
            method: 'POST',
            headers: {
                "content-type": "application/json",
                user: userEmail,
            },
            body: JSON.stringify(newData)
        })
            .then(res => res.json())
            .then(result => {
                setSuccess(result.status);
                setUploadedImage({});
            })
            .catch(err => {
                // console.log(err);
            })

    };
    const uploadImage = event => {
        const imageData = new FormData()
        imageData.set('key', IMAGE_BB_KEY);
        imageData.append('image', event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imageData)
            .then(function (res) {
                setUploadedImage(res.data.data)
                setImageRequired({
                    required: {
                        value: false,
                        message: ''
                    }
                })
            })
            .catch(function (error) {
                // console.log(error);
            });
    }


    return (
        <main className="container">
            <h2 className="text-brand text-capitalize text-center text-md-start mb-5">Add service</h2>

            <form onSubmit={handleSubmit(onSubmit)}>
                <TextField name="name"
                    error={errors.name}
                    helperText={errors.name && errors.name.message}
                    {...register("name", {
                        required: {
                            value: true,
                            message: 'Service name is required'
                        }
                    })} placeholder="Service name" fullWidth variant="outlined" margin="normal" />

                <TextField name="description"
                    error={errors.description}
                    helperText={errors.description && errors.description.message}
                    {...register("description", {
                        required: {
                            value: true,
                            message: 'Service Description is required'
                        }
                    })}
                    placeholder="Description" fullWidth variant="outlined" margin="normal" />

                <TextField name="charge"
                    error={errors.charge}
                    type='number'
                    helperText={errors.charge && errors.charge.message}
                    {...register("charge", {
                        required: {
                            value: true,
                            message: 'Service charge is required'
                        }
                    })}
                    placeholder="Service charge" fullWidth variant="outlined" margin="normal" />

                <input hidden type="text" name="photo" defaultValue={uploadedImage.display_url}
                    {...register("photo", {
                        ...imageRequired
                    })}
                />

                {uploadedImage.display_url && <Grid container justify="center" style={{ maxWidth: '200px' }}>
                    <img style={{ width: '100%', padding: '5px', boxShadow: '2px 2px 12px #999' }} src={uploadedImage.display_url} alt="" />
                </Grid>}
                <TextField
                    error={errors.photo && (uploadedImage.display_url ? false : errors.photo)}
                    helperText={errors.photo && (uploadedImage.display_url ? '' : errors.photo.message)}
                    onChange={uploadImage} placeholder="Service Cover photo" type="file" fullWidth variant="outlined" margin="normal" />

                <Button type="submit" style={{ color: '#333' }} variant="outlined" >Add Service</Button>
            </form>
            { success && <Typography variant="h4" variantMapping={{ h4: 'h1' }} align="center">Service add successfully!</Typography>}
        </main>
    );
};

export default AddService;