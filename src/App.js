import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import Login from "./components/login";
import Homepage from "./components/homepage/Homepage";
import Register from "./components/register";

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
            </Switch>
        </Router>
    );
}

export default App;
