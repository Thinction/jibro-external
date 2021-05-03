import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect, } from "react-router-dom";
import Splash from '../Routes/Splash';
import Main from '../Routes/Main';
import Login from '../Routes/Login';
import SignUp from '../Routes/SignUp';
import FindPassId from '../Routes/FindPassId';

const LoggedInRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Main} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

const LoggedOutRoutes = () => (
    <Router>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/SignUp" component={SignUp} />
            <Route path="/FindId" component={FindPassId} />
            <Route path="/FindPw" component={FindPassId} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
);

const AppRouter = () => {
    //Enter App
    const [ isSplash, setIsSplash ] = useState(true);

    //Auth Check
    const beforeLoggedIn = false;

    setTimeout(() => {
        setIsSplash(false);
    }, 3000);

    return isSplash ?
        <Splash />
        :
        (beforeLoggedIn && <LoggedInRoutes />)
        ||
        (!beforeLoggedIn && <LoggedOutRoutes />);
}

export default AppRouter;