import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "./components/login";
import Homepage from "./components/homepage/Homepage";
import Register from "./components/register";
import Signup from "./components/signup";
import Sukses from "./components/sukses";
import Psikolog from "./components/psikolog";
import Psikologg from "./components/pilih psikolog";
import Pembukaan from "./components/pembukaan";
import Pembayaran from "./components/pembayaran";
import Jurnal from "./components/jurnal";
import Fitur from "./components/fitur";
import Chat from "./components/chat";
import Profil from "./components/profil";
import Bot from "./components/bot";

function App() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Pembukaan />
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
                <Route exact path="/psikolog">
                    <Psikolog />
                </Route>
                <Route exact path="/psikologg">
                    <Psikologg />
                </Route>
                <Route exact path="/pembayaran">
                    <Pembayaran />
                </Route>
                <Route exact path="/fitur">
                    <Fitur />
                </Route>
                <Route exact path="/chat">
                    <Chat />
                </Route>
                <Route exact path="/profil">
                    <Profil />
                </Route>
                <Route exact path="/jurnal">
                    <Jurnal />
                </Route>
                <Route exact path="/bot">
                    <Bot />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
