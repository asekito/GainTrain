import React from "react";

interface IHomeProps {
  isLoggedIn: boolean;
}

const Home = ({ isLoggedIn }: IHomeProps) => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;
