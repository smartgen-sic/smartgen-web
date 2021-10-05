import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import Homepage from "./components/homepage/Homepage";
import Register from "./components/register";
import Signup from "./components/signup";
import Sukses from "./components/sukses";
import Psikologg from "./components/pilih psikolog";

import Pembayaran from "./components/pembayaran";
import Jurnal from "./components/jurnal";
import Fitur from "./components/fitur";
import Bot from "./components/bot";
import Buka from "./components/buka";
import Artikel from "./components/artikel";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Buka />
                </Route>
                <Route exact path="/homepage">
                    <Homepage />
                </Route>
                <Route exact path="/login">
                    <Login />
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
                < Route exact path="/psikologg">
                    <Psikologg />
                </Route>
                <Route exact path="/pembayaran">
                    <Pembayaran />
                </Route>
                <Route exact path="/fitur">
                    <Fitur />
                </Route>
                <Route exact path="/jurnal">
                    <Jurnal />
                </Route>
                <Route exact path="/bot">
                    <Bot />
                </Route>
                <Route exact path="/artikel">
                    <Artikel />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
