import React from 'react';
import { Route, Switch, } from 'react-router-dom';

// Container Components
import MainView from './mainView/mainView';
import Results from './results/Results';

// Presentational Components
//import FlowHistory from './flowHistory/flowHistory';
import SearchBox from './searchBox/searchBox';
//-----------------
import HomeView from './homeView/homeView';
import LoginView from './loginView/loginView';
//-----------------
import ListResults from './searchResult/listResults';
import Selection from './searchResult/selection';
import SongsList from './searchResult/songsList';



const getRoutes=() => {
    return (
        <div>

            <Route name="Main" component={MainView} />
            <Switch>
                <Route exact strict path="/" component={LoginView} />
                <Route exact path="/home" component={HomeView} />
                <Route path="/callback" component={HomeView} />
            </Switch>

            <Route name="Search" component={SearchBox} />
            <Switch>
                <Route path="/results" component={Results} />
            </Switch>

            <Route name="Results" component={Results} />
            <Switch>
                <Route path="/artist" component={ListResults} />
                <Route path="/albums" component={Selection} />
                <Route path="/songs" component={SongsList} />
            </Switch>

            
        </div>
    )
};

export default getRoutes;

