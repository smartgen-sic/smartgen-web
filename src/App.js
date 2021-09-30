import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login";
import Homepage from "./components/homepage/Homepage";
import Register from "./components/register";
import Signup from "./components/signup";
import Sukses from "./components/sukses";
import Psikolog from "./components/psikolog";
import Psikologg from "./components/pilih psikolog";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Login />
                </Route>
                <Route exact path="/homepage">
                    <Homepage />
                </Route>
                <Route exact path="/register">
                    <Register />
                </Route>
                <Route exact path="/signup">
                    <Signup />
                </Route>
                <Route exact path="/sukses">
                    <Sukses />
                </Route>
                <Route exact path="/psikolog">
                    <Psikolog />
                </Route>
                <Route exact path="/psikologg">
                    <Psikologg />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;