import React, { useEffect, useState } from 'react';
import ReviewItem from './ReviewItem';

const Review = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://arcane-beach-78410.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
            .catch(err => {
                console.log(err);
            })
    }, [])


    return (
        <section id="services" className=" pt-5 pb-2 text-center">
            <h5 className="text-primary text-uppercase pt-5">review</h5>
            <h2 className="lined text-brand text-center mb-5 pb-2">What Our Client Say</h2>
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    {/* <div className="carousel-item active">
                        <h5>item1</h5>
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <h5>item2</h5>
                        <img src="..." className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <h5>item3</h5>
                        <img src="..." className="d-block w-100" alt="..." />
                    </div> */}
                    {
                        reviews.map((review, index) => <ReviewItem index={index} key={review._id} item={review} />)
                    }
                </div>
                <button className="carousel-control-prev bg-custom" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next bg-custom" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </section>
    );
};

export default Review;