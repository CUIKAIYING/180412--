import React from "react";
import ReactDOM from "react-dom";
import {HashRouter,Switch,Route} from "react-router-dom";
import {Provider} from "react-redux";

import login from "./container/login/login";
import main from "./container/main/main";
import regist from "./container/regist/regist";
import store from "./redux/store"

ReactDOM.render((
    <Provider store={store}>
        <HashRouter>
            <Switch>
                <Route path='/login' component={login}/>
                <Route path="./regist" component={regist} />
                <Route component={main} />
            </Switch>
        </HashRouter>
    </Provider>
    ),document.getElementById("root"));