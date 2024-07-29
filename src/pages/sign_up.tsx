import React from "react";
import { Register } from "../services/authentication/register";
import { Footer } from "../components/footer";
import { NavBar } from "../components/navbar";

export const Sign_up = () => {
  return (
    <>
    <NavBar/>
      <Register />
      <Footer/>
    </>
  );
};
