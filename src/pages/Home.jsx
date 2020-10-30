import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Home = () => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.token);
  if (!token) {
    history.push("/");
  }

  return <h1>Home</h1>;
};

export default Home;
