import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home/Home';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import './App.css';

import store from './store/store';
import { loadUser } from './store/actions/auth';
// import setAuthToken from './utils/setAuthToken';

// if (localStorage.token) {
//     setAuthToken(localStorage.token);
// }

function App() {
    useEffect(() => {
        store.dispatch(loadUser());
    }, []);

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
