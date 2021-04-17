import React from 'react';

const ReviewItem = ({ item, index }) => {
    const { photoURL, description, displayName, name } = item;
    return (
        <div className={`carousel-item  ${index === 0 ? 'active' : ''}`}>
            <div className="row  justify-content-center align-items-center">
                <div className="text-center mt-3" style={{ maxWidth: "18rem", minHeight: '20rem' }}>
                    <p className="text-muted text-start">{description}</p>
                    <img src={photoURL} className="d-block rounded-circle mx-auto" width="120" height="120" alt="..." />
                    <h5>{displayName || name}</h5>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;