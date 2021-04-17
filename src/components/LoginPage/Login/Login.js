import React, { useContext } from 'react';
import Navbar from '../../Shared/Navbar/Navbar/Navbar';
import google from '../../../images/google-logo.png';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';


if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
}

const Login = () => {
    document.title = "Login || Painting Art";
    const [loggedUser, setLoggedUser] = useContext(UserContext);

    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };

    const handleGoogleSignIn = async () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                sessionStorage.setItem('email', email);
                sessionStorage.setItem('photoURL', photoURL);
                sessionStorage.setItem('displayName', displayName);
                setLoggedUser({ name: displayName, email, photoURL });
                history.replace(from);
            }).catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    return (
        <header>
            <Navbar using="loginPage" />
            <div className="d-flex justify-content-center align-items-center" style={{ minHeight: 'calc(100vh - 200px)' }}>
                <div className="text-dark text-capitalize">
                    <h2 className="fw-bold text-center text-red">Login </h2>
                    <button onClick={handleGoogleSignIn} className="btn-custom text-uppercase mt-3 scale d-flex justify-content-between"><img src={google} style={{ maxHeight: 60, marginLeft: '-14px' }} alt="logo" /> <span>login with google</span></button>
                </div>
            </div>
        </header>
    );
};

export default Login;