import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
    const store = configureStore();
    // window.login = login;
    
    window.getState = store.getState;
    window.dispatch = store.dispatch;

    const root = document.getElementById("root");
    // ReactDOM.render(<h1>Welcome to Felp</h1>, root);
    ReactDOM.render(<Root store={store}/>, root);

});