import React from 'react';
import { Route, Switch, } from 'react-router-dom';

// Container Components
import Results from './results/Results';

// Presentational Components
import MainView from './mainView/mainView';
import HomeView from './homeView/homeView';
import LoginView from './loginView/loginView';
//-----------------
import SearchBox from './searchBox/searchBox';
import ListResults from './searchResult/listResults';
import Selection from './searchResult/selection';
import SongsList from './searchResult/songsList';
import FlowHistory from './flowHistory/flowHistory';


const getRoutes=() => {
    return (
        <div>
            <Route name="Main" component={MainView} />
            <FlowHistory />
            <Switch>
                <Route exact strict path="/" component={LoginView} />
                <Route exact path="/callback" component={HomeView}  />
                <Route path="/home" component={SearchBox} />
                <Route path="/results" component={Results} />
                <Route path="/artist" component={ListResults} />
                <Route path="/albums" component={Selection} />
                <Route path="/songs" component={SongsList} />
            </Switch>
        </div>
    )
};

export default getRoutes;

