import React, { useState } from "react";

const Login = () => {
  // Making Hooks using UseState
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = () => {
    console.warn("clicked");
  };

  return (
    // Making a FORM
    <>
      <form>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter Your Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button  className="btn"  onClick={submitHandler}>Login</button>
      </form>
    </>
  );
};

export default Login;
