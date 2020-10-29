import React from "react";
import FacebookLogin from "react-facebook-login";

const Login = () => {
  const responseFacebook = (response) => {
    console.log(response);
  };
  return (
    <FacebookLogin
      appId="773759290147154"
      autoLoad={false}
      fields="name,email,picture"
      callback={responseFacebook}
      textButton="Logueate con Facebook"
    />
  );
};

export default Login;
