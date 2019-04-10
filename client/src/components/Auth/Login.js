import React from "react";
import { GoogleLogin } from 'react-google-login';
import { withStyles } from "@material-ui/core/styles";
// import Typography from "@material-ui/core/Typography";

const Login = ({ classes }) => {

  function onSuccess(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    console.log('google user ----> ', idToken )
  }

  return <GoogleLogin 
      clientId="421757943354-2tve5sr13b7utfgo0g88k6s0k2s7v09c.apps.googleusercontent.com"
      onSuccess={onSuccess}
      isSignedIn={true}
    />;
};

const styles = {
  root: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center"
  }
};

export default withStyles(styles)(Login);
