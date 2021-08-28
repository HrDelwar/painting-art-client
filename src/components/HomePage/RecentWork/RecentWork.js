import React from 'react';
import sweetCouple from '../../../images/sweet-couple.jpg';
import maskOfTheArt from '../../../images/mask-of-art.jpg';
import redGrownGirl from '../../../images/red-gown-girl.jpg';

const recentWorks = [
    {
        name: 'sweet couple',
        image: sweetCouple
    },
    {
        name: 'red gown girl',
        image: redGrownGirl
    },
    {
        name: 'the mask ot art',
        image: maskOfTheArt
    },
];

const RecentWork = () => {

    return (
        <section id="recent-works" className="container pt-4 text-center">
            <h5 className="text-primary text-uppercase pt-5">recent works</h5>
            <h2 className="lined text-brand text-center pb-2">See Our Latest Works</h2>
            <div className="row justify-content-center pt-5">
                {
                    recentWorks.map(recentWork => (
                        <div key={recentWork.name} className="col-md-4 d-flex justify-content-center mb-3">
                            <div className="card" style={{ maxWidth: "18rem" }}>
                                <div className="overflow-hidden" style={{ maxWidth: "18rem", maxHeight: "18rem" }}>
                                    <img className="card-img-top scale" src={recentWork.image} alt={recentWork.name} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-capitalize">{recentWork.name}</h5>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="btn-custom text-capitalize mt-3">See more</button>
        </section >
    );
};

export default RecentWork;