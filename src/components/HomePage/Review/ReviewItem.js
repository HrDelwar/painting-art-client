import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({ item, index }) => {
    const { photoURL, description, displayName, name, rating } = item;
    const rattingArr = [...Array(5).keys()];

    return (
        <div className={`carousel-item  ${index === 0 ? 'active' : ''}`}>
            <div className="row  justify-content-center align-items-center">
                <div className="text-center mt-3" style={{ maxWidth: "18rem", minHeight: '20rem' }}>
                    <p className="text-muted text-start">{description}</p>
                    <div className="">
                        {
                            rattingArr.map((star) => <FontAwesomeIcon key={star} className={(star < Number(rating) ? "star-icon-enabled " : "star-icon-disabled ") + " mx-1  scale"} icon={faStar} />)
                        }
                    </div>
                    <img src={photoURL} className="d-block mt-3 rounded-circle mx-auto" width="120" height="120" alt="..." />
                    <h5>{displayName || name}</h5>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;