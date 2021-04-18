import React from 'react';
import moment from 'moment';
import blog1 from '../../../images/blog-1.jpg';
import blog2 from '../../../images/blog-2.jpg';
import blog3 from '../../../images/blog-3.jpg';

const blogs = [
    {
        name: 'Say something new ',
        description: 'You have to rely on your preparation. You got to really be passionate and try to prepare more than anyone else, and put yourself in a position to succeed, and when',
        image: blog1,
        created: new Date(2021, 3, 13)
    },
    {
        name: 'Keep Calm And Be Prepared',
        description: 'You have to rely on your preparation. You got to really be passionate and try to prepare more than anyone else, and put yourself in a position to succeed, and when',
        image: blog2,
        created: new Date(2021, 1, 14)
    },
    {
        name: 'Pencil Sketch ',
        description: 'You have to rely on your preparation. You got to really be passionate and try to prepare more than anyone else, and put yourself in a position to succeed, and when',
        image: blog3,
        created: new Date(2021, 2, 22)
    },
];

const Blogs = () => {
    return (
        <section id="blogs" className="container pt-5 pb-2 text-center">
            <h5 className="text-primary text-uppercase pt-5">Blogs</h5>
            <h2 className="lined text-brand text-center pb-2">Just Blogging</h2>
            <div className="row justify-content-center pt-5">
                {
                    blogs.map(blog => (
                        <div key={blog.name} className="col-md-4 d-flex justify-content-center mb-3">
                            <div className="card text-start" style={{ maxWidth: "18rem" }}>
                                <div className="overflow-hidden" style={{ maxWidth: "18rem", maxHeight: "18rem" }}>
                                    <img className="card-img-top tada" src={blog.image} alt={blog.name} />
                                </div>
                                <div className="card-body">
                                    <h5 className="card-title text-capitalize">{blog.name}</h5>
                                    <small>{moment(blog.created).format('DD MMMM yyyy')}</small>
                                    <p className="mt-2">{blog.description.length < 100 ? blog.description : <span>{blog.description.slice(0, 100)}...<button className="border-0 text-capitalize text-brand">read more</button></span>}</p>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
            <button className="btn-custom text-capitalize">See more</button><br /><br />
        </section >
    );
};

export default Blogs;