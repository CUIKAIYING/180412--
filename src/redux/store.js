import {createStore,applyMiddleware} from "redux"
import thunk from "redux-thunk"
//扩展插件
import {composeWithDevTools} from "redux-devtools-extension"

import reducers from "./reducers"

//创建store对象
export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));