import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Home from './Home.js'
import WelcomePage from './WelcomePage.js'
import Notes from './Notes.js'
import Rattrapages from './Rattrapages.js'
import { createBrowserHistory} from 'history';
const history = createBrowserHistory({forceRefresh:true});


export default class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                     
                    <Route exact path="/" component={Home} />
                    <Route exact path="/WelcomePage" component={WelcomePage} />
                    <Route exact path="/Notes" component={Notes} />
                    <Route exact path="/Rattrapages" component={Rattrapages} />
                  
                    
                </Switch>
            </Router>
        )
    }
}

