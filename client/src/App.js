import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import "./App.css";
import "./global.css";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
            <Route path="/profile/:username">
              <Profile />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
