import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import './App.css';

function App() {
    return (
        <div className='app'>
            <Router>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/signup' component={SignUp} />
                    <Route exact path='/login' component={Login} />
                    <Route path='*' component={PageNotFound} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
