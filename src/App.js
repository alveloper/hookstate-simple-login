import { BrowserRouter as Router, Switch } from "react-router-dom";
import { PrivateRoute, PublicRoute } from "./Routes";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";

// (1) We use react-route-dom to do navigation.
const App = () => {
  return (
    <Router>
      <Switch>
        <PublicRoute path="/login" component={Login} />
        <PrivateRoute exact path="/" component={Homepage} />
      </Switch>
    </Router>
  );
};

export default App;