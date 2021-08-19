import { createState, useState } from "@hookstate/core";

/*
(5) The store folder will hold our state. 
We’ll create a AuthStore file and it will implement a global state and will act as a Model in MVC Pattern.
Our stores will expose react hook: useAuthState() that can be used on our page later.
*/

const initialState = {
  isLoggedIn: false,
  me: {},
};

const authState = createState(initialState);

export const login = (username, password) => {
  // do network call to post login data
  // eg: axios.post()

  // fake login
  if (username === "user" && password === "password") {
    authState.set({
      ...initialState,
      // update me with data from network call
      me: { name: username },
      isLoggedIn: true,
    });
  }
};

export const logout = () => {
  // set authState to initial state
  authState.set(initialState);
};

// create react hook for consuming
export const useAuthState = () => {
  return useState(authState);
};