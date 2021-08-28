import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
    document.title = "404 || Painting Art";
    const history = useHistory()
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 100px)' }}>
            <div className=" text-center">
                <h1 className="text-center text-brand ">404</h1>
                <h2 className="text-center text-brand text-capitalize">Page Not Found!</h2>
                <button onClick={history.goBack} className="btn-custom text-uppercase mt-3">back</button>
            </div>
        </div>
    );
};

export default NotFound;