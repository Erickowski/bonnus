import React from "react";
import styled from "@emotion/styled";

import Login from "../components/Login";

const HomeContainer = styled.main`
  min-height: 82vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Login />
    </HomeContainer>
  );
};

export default Home;
