import { logout, useAuthState } from "../stores/AuthStore";

// (4) make Homepage component
export const Homepage = () => {
  const authState = useAuthState();
  return (
    <div>
      <p>
        Hi, {authState.me.get().name}! <br /> Welcome to our homepage
      </p>
      <button onClick={logout}>Logout</button>
    </div>
  );
};
export default Homepage;