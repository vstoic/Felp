import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Components/root.jsx'
import configureStore from './Store/store.js';

document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    window.store = store
    ReactDOM.render(<Root store={store}/>, root);
});