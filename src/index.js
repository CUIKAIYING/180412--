import React from "react"
import ReactDOM from "react-dom"
import {HashRouter,Switch,Route} from "react-router-dom"
import {Provider} from "react-redux"

// import App from "./App"
import store from "./redux/store";
import Login from "./containers/Login/login"
import Main from "./containers/Main/main"
import Regist from "./containers/regist/regist"


ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path="/login" component={Login}/>
                <Route path="/regist" component={Regist}/>
                <Route component={Main}/>
            </Switch>
        </HashRouter>
    </Provider>
), document.getElementById("root"));
