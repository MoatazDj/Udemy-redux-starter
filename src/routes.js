import React from "react";
import {Route, IndexedRoute} from "react-router";
import App from './Components/App'
import HomePage from './Components/Home/Homepage'
import AboutPage from './Components/About/Aboutpage'

export default (
    <Route path="/" component={App}>
        <IndexedRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>    
)