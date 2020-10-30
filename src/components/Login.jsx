import React from "react";
import FacebookLogin from "react-facebook-login";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { autenticarUsuario } from "../actions/authActions";

const Login = () => {
  const history = useHistory();

  const dispatch = useDispatch();

  const token = useSelector((state) => state.auth.token);

  if (token) {
    history.push("/home");
  }

  const responseFacebook = (response) => {
    dispatch(autenticarUsuario(response.accessToken));
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
