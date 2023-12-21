import './styles/app.css'
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Crypto from './controllers/crypto';
function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' component={ Crypto } exact />
            </Switch>
        </BrowserRouter>
    );
}
export default App;