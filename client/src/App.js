import React from 'react';

import './App.css';
import Navigation from './components/Navigation/Navigation';
import HeroBar from './components/HeroBar/HeroBar';
import Socials from './components/Socials/Socials';

function App() {
    return (
        <div className="app">
            <div className="hero_img">
                <Navigation />
                <Socials />
                <HeroBar heroText='Create your own endless journey with Pokemon' />
            </div>
        </div>
    );
}

export default App;
