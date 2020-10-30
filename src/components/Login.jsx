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
    const usuario = {
      nombre: response.name,
      email: response.email,
      imagen: response.picture.data.url,
    };
    dispatch(autenticarUsuario(response.accessToken, usuario));
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
