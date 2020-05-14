import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom'

import Logon from './Components/pages/logon'
import Register from './Components/pages/Register'
import Profile from './Components/pages/Profile'
import NewIncident from './Components/pages/NewIncident'

export default function Routes() {
    
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Logon}/>
                <Route path="/register" component={Register}/>
                <Route path="/profile" component={Profile}/>
                <Route path="/incidents/new" component={NewIncident}/>
            </Switch>
        </BrowserRouter>
    );
}