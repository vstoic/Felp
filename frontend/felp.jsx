import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root.jsx'
import configureStore from './store/store';


document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById("root");

    // for the nav! Where can i move this??
    // window.onclick = function (e) {
    //     if (!e.target.matches('.dropbtn')) {
    //         let myDropdown = document.getElementById("myDropdown");
    //         if (myDropdown.classList.contains('show')) {
    //             myDropdown.classList.remove('show');
    //         }
    //     }
    // }
    
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

    ReactDOM.render(<Root store={store}/>, root);

});