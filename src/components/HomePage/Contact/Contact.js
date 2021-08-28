import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact pt-4">
            <div className="container pt-5">
                <div className="text-center text-white mb-5">
                    <h5 className="text-primary text-uppercase">Contact</h5>
                    <h2 className="lined text-brand text-center text-capitalize pb-2">Let's talk about your painting</h2>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" required placeholder="Email Address *" />
                        </div>
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" required placeholder="Subject *" />
                        </div>
                        <div className="input-group mb-3">
                            <textarea name="" className="form-control" required id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="input-group mb-3 text-center">
                            <button type="submit" className="btn-custom"> Submit </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;