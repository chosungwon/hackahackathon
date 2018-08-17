import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Register from "./Register";
import Login from "./Login";
import Main from './Main'
import Hackathon from "./Hackathon";

class Root extends Component{
    render(){
        return(
            <Fragment>
                <Router>
                    <Fragment>
                        <Route exact={true} path={'/'} component={Main}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/login'} component={Login}/>
                        <Route path={'/hackathon'} component={Hackathon}/>
                    </Fragment>
                </Router>
            </Fragment>
        )
    }
}

export default Root;