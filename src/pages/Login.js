import { useEffect } from "react";
import { useState } from "@hookstate/core";
import { useHistory } from "react-router-dom";
import { login, useAuthState } from "../stores/AuthStore";

/*
(3) Login.js file will be self-explanatory. 
We use useEffect to do a redirect, usually, you can do this on handleLogin function, 
but for this tutorial, I want to show you how the state change and inform our page that something is changing.
*/
const Login = () => {
  const history = useHistory();
  const authState = useAuthState();
  const username = useState("");
  const password = useState("");

  // check if global state is already change, and redirect us to homepage
  useEffect(() => {
    if (authState.isLoggedIn.value) {
      history.replace("/");
    }
    // eslint-disable-next-line
  }, [authState.isLoggedIn.value]);

  const handleLogin = () => {
    // you can do redirect here base on result from login function instead of using useEffect()
    login(username.get(), password.get());
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: 200 }}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        value={username.get()}
        onChange={e => username.set(e.target.value)}
        type="text"
        placeholder="username"
      />
      <br />
      <label htmlFor="password">Passowrd</label>
      <input
        id="password"
        value={password.get()}
        onChange={e => password.set(e.target.value)}
        type="password"
        placeholder="password"
      />
      <br />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;