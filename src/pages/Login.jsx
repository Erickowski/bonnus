import React from "react";
import styled from "@emotion/styled";

import LoginComponent from "../components/Login";

const LoginContainer = styled.main`
  min-height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Login = () => {
  return (
    <LoginContainer>
      <LoginComponent />
    </LoginContainer>
  );
};

export default Login;
