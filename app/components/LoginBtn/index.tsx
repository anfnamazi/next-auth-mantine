"use client"
import React from 'react';
import {signIn} from "next-auth/react";

function LoginBtn() {
  const handleClick = () => {
    signIn("github")
  }

  return (
    <button onClick={handleClick}>agsgsddg</button>
  );
}

export default LoginBtn;