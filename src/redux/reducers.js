/*reducers文件——可以包含n个reducer函数的模块，combineReducers专门用来整合reducer（整合成一个）*/
import {combineReducers} from "redux"

const initxxx = [];
function xxx(state = initxxx, action) {
    switch (action.type){
        default :
            return state
    }
}


const inityyy = {};
function yyy(state = inityyy, action) {
    switch (action.type){
        default :
            return state
    }
}

export default combineReducers({
    xxx,
    yyy
})