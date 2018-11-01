import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './mainView.css';
//assets
import logo_spotify from '../../assets/logo_spotify.svg';

class MainView extends Component {

    constructor(props) {
		super();
		this.client_id = 'dd7eefdd7ddb4da0b76f1c3d085da2a4';
    	//this.client_secret = 'fb8486ec606f4eab9f7ea7640712f696';
    	this.redirect_uri = 'http:%2F%2Flocalhost%3A3000%2Fcallback';
    	this.response_type = 'token';
		this.scope = 'user-read-private user-read-email';

		const queryString = require('query-string');
      	var parsed = queryString.parse(props.location.hash);

		this.token = parsed.access_token;
		this.state = {data: [],
            }
        }
    render() {
        return (
			<article className="main-view">
                <header className="main-view__header">
                <Link to="/home"><img src={logo_spotify} className="main-view__logo" alt="logo"/></Link>
                </header>
                <div>
                    <div className="main-view__welcome">
                        <h4 className="main-view__subtitle">Welcome to</h4>
                        <h1 className="main-view__title">Spotisearch</h1>
                        <p className="main-view__paragraph">
                            Find your favorite artist and listen his songs!
                        </p>
                    </div>    
                </div>
            </article>
        );
    }
}

export default MainView;
