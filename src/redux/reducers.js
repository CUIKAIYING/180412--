//combineReducers专门用来整合reducers函数模块
import {combineReducers} from "redux";

//管理xxx状态的reducer
const initxxx = [];
function xxx(state = initxxx, action) {
    switch (action.type){
        default:
            return state
    }
}

const inityyy = {};
function yyy(state = inityyy, action) {
    switch (action.type){
        default:
            return state
    }
}

export default combineReducers({
    xxx,
    yyy
})