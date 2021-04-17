import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import banner from '../../../images/banner.png';


const HeaderMain = () => {


    return (
        <main className="pt-5 container z-05">
            <div className="row text-white align-items-center justify-content-center pt-5" style={{ minHeight: 800 }}>
                <div className="col-md-6">
                    <div className="" style={{ maxWidth: 500, maxHeight: 500 }}>
                        <img src={banner} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="">
                        <h1>We Deliver Best Paintings</h1>
                        <p>Are you ready to show your art in galleries? Learn what it takes in an online, on-demand workshop from Xanadu Gallery owner and Reddotblog publisher Jason Horejs.</p>
                        <button className="btn-custom text-uppercase explore">Explore more <FontAwesomeIcon className="explore-icon" icon={faArrowRight} /> </button>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default HeaderMain;