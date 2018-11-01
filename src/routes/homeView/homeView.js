import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './homeView.css';
//assets
import logo_spotify from '../../assets/logo_spotify.svg';


class homeView extends Component {
    render() {
        return (
            <article className="home-view">
                <header className="home-view__header">
                <Link to="/"><img src={logo_spotify} className="home-view__logo" alt="logo"/></Link>
                </header>
                <div>
                    <div className="home-view__welcome">
                        <h4 className="home-view__subtitle">Welcome to</h4>
                        <h1 className="home-view__title">Spotisearch</h1>
                        <p className="home-view__paragraph">
                            Search your favorite songs over Spotify, just enter an artist's name in the
                            following search box and enjoy!
                        </p>
                    </div>    
                </div>
            </article>
        );
    }
}

export default homeView;
