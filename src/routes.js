import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { DataContext } from './containers/Dashboard';
import Overview from './containers/Overview';
import Reports from './containers/Reports';
import Settings from './containers/Settings';

const Routes = () => {
    const dataContext = useContext(DataContext);
    return (
        <div className={dataContext.state.darkMode ? 'content dark-mode' : 'content light-mode'}>
            <Switch>
                <Route exact path='/' component={ Overview } />
                <Route path='/reports' component={ Reports } />
                <Route path='/settings' component={ Settings } />
                <Route component={() => {return <Redirect to={{pathname:'/'}} />}} />
            </Switch>
        </div>
    );
};

export default Routes;