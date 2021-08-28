import React, { useContext } from "react";
import Navbar from "../../Shared/Navbar/Navbar/Navbar";
import google from "../../../images/google-logo.png";
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";
import { UserContext } from "../../../App";
import { useHistory, useLocation } from "react-router";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../../../images/login-bg.gif";

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundImage: `url(${bg})`,
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const Login = () => {
  document.title = "Login || Painting Art";
  const [loggedUser, setLoggedUser] = useContext(UserContext);
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;
        sessionStorage.setItem("email", email);
        sessionStorage.setItem("photoURL", photoURL);
        sessionStorage.setItem("displayName", displayName);
        setLoggedUser({ name: displayName, email, photoURL });
        history.replace(from);
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <>
      <header>
        <Navbar using="loginPage" />
      </header>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} sm={4} md={7} className={classes.image} />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <div
              className="d-flex justify-content-center align-items-center"
              style={{ minHeight: "calc(100vh - 200px)" }}
            >
              <div className=" text-capitalize">
                <div className="d-flex flex-column justify-content-center align-items-center">
                  <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                  </Avatar>
                  <Typography
                    component="h2"
                    className="text-white"
                    variant="h5"
                  >
                    Sign in
                  </Typography>
                </div>
                <Button
                  size="small"
                  onClick={handleGoogleSignIn}
                  className="bg-white rounded-pill border-0 text-uppercase mt-3 px-4 d-flex justify-content-between"
                >
                  <img
                    src={google}
                    style={{ maxHeight: 45, marginLeft: "-14px" }}
                    alt="logo"
                  />{" "}
                  <span>continue with google</span>
                </Button>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
