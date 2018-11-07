import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';
//assets
import cover from '../../assets/cover.png';
import artist from '../../assets/artist.png';

// css
import './listResult.css';
import './selection.css';

class Selection extends Component {
    render() {
        return (
            <div>
                <SearchBox></SearchBox>
                <FlowHistory></FlowHistory>
                <article className="selection">
                    <div className="selecion__artist-selected">
                            <img src={artist} className="selecion__artist-selected-image" alt="artist"/>
                            <Link to="/artist" className="selection__link">
                                <h4 className="selecion__artist-selected-title">Artista Selected</h4>
                            </Link>
                    </div>
                </article>
                <div className="list-results__cont">
                    <ul className="list-results">
                        <li className="list-result__list-artist">
                            <img src={cover} className="list-result__list-artist-image" alt="artist"/>
                            <Link to="/songs" className="list-results__link">
                                <h4 className="list-result__list-artist-title">Album</h4>
                            </Link>
                        </li>
                        <li className="list-result__list-artist">
                            <img src={cover} className="list-result__list-artist-image" alt="artist"/>
                            <Link to="/songs" className="list-results__link">
                                <h4 className="list-result__list-artist-title">Album</h4>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Selection;
