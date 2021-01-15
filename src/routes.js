import React from "react";
import {Route, IndexRoute} from "react-router";
import App from './Components/App'
import HomePage from './Components/Home/Homepage'
import AboutPage from './Components/About/Aboutpage'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
    </Route>    
)