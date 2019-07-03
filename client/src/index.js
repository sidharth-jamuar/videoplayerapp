import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore,applyMiddleware,combineReducers} from "redux";
import {Provider} from "react-redux"
import reduxThunk from "redux-thunk"
import AppRouter from "./approuter/approuter"
import * as serviceWorker from './serviceWorker';
import reducers from './reducers';
const store=createStore(reducers,{},applyMiddleware(reduxThunk));

if(localStorage.getItem("token")){
    store.dispatch({type:"IS_AUTH",payload:true})
}
const Jsx=()=>{
    return (
        <Provider store={store}>
        <AppRouter />
        </Provider>
    )
}
ReactDOM.render(<Jsx />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
