import React from "react";
import { Route } from "react-router-dom";

const App = () => (

    <div>
        <Route exact path="/" component={SplashPage} />
    </div>

);

export default App;