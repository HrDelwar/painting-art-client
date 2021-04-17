import { faFacebookF, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faAngleDoubleUp, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            setScroll(window.scrollY > 50);
        })
    }, [])

    return (
        <footer >
            <div className="container mt-5">
                <h2 className="py-5 text-capitalize text-center">Get ins touch</h2>
                <div className="row justify-content-center pb-3">
                    <div className="col-md-8 col-lg-6 d-flex justify-content-center">
                        <ul className="d-flex flex-wrap justify-content-center list-unstyled m-0  mb-lg-0 text-capitalize">
                            <li className="nav-item ms-xl-4 ms-3 mb-2">
                                <Link className="nav-link bg-custom rounded-circle icon fa-facebook" to="/home"><FontAwesomeIcon icon={faFacebookF} /></Link>
                            </li>
                            <li className="nav-item ms-xl-4 ms-3 mb-2">
                                <Link className="nav-link bg-custom rounded-circle icon" to="/home/about"><FontAwesomeIcon icon={faInstagram} /></Link>
                            </li>
                            <li className="nav-item ms-xl-4 ms-3 mb-2">
                                <Link className="nav-link bg-custom rounded-circle icon" to="/home/services"><FontAwesomeIcon icon={faTwitter} /></Link>
                            </li>
                            <li className="nav-item ms-xl-4 ms-3 mb-2">
                                <Link className="nav-link bg-custom rounded-circle icon" to="/home/contact"><FontAwesomeIcon icon={faLinkedin} /></Link>
                            </li>
                            <li className="nav-item ms-xl-4 ms-3 mb-2">
                                <Link className="nav-link bg-custom rounded-circle icon" to="/admin"><FontAwesomeIcon icon={faGlobe} /></Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="text-center pt-3" style={{ borderTop: '1px dashed' }}>Copyright © HrDelwar {new Date().getFullYear()}. All rights reserved. </div>
            </div>
            {scroll && <button onClick={() => window.scrollTo(0, 0)} className="btn-scroll-up bg-custom"><FontAwesomeIcon className="btn-scroll-icon-up" icon={faAngleDoubleUp} /></button>}
        </footer>
    );
};

export default Footer;