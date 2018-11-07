import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';
// css
import './listResult.css';
//assets
import artist from '../../assets/artist.png';


class ListResults extends Component {
    
   
    render() {
        return (
            <div>
                <SearchBox>
                </SearchBox>
                <FlowHistory/>
                <div className="list-results__cont">
                    <ul className="list-results">
                        <li className="list-result__list-artist">
                            <img src={artist} className="list-result__list-artist-image" alt="artist"/>
                            <Link to="/albums" className="list-results__link">
                                <h4 className="list-result__list-artist-title">Artist Name</h4>
                            </Link>
                        </li>
                        <li className="list-result__list-artist">
                            <img src={artist} className="list-result__list-artist-image" alt="artist"/>
                            <Link to="/albums" className="list-results__link">
                                <h4 className="list-result__list-artist-title">Artist Name</h4>
                            </Link>
                        </li>
                    </ul>
                    <ul className="list-results">    
                        <li className="list-result__list-artist">
                            <img src={artist} className="list-result__list-artist-image" alt="artist"/>
                            <Link to="/albums" className="list-results__link">
                                <h4 className="list-result__list-artist-title">Artist Name</h4>
                            </Link>
                        </li>
                        <li className="list-result__list-artist">
                            <img src={artist} className="list-result__list-artist-image" alt="artist"/>
                            <Link to="/albums" className="list-results__link">
                                <h4 className="list-result__list-artist-title">Artist Name</h4>
                            </Link>
                        </li>                       
                    </ul>
                </div>
            </div>
        );
    }
}

export default ListResults;

/*<button type="select" className="list-results__button">
                        <Link to="/albums" className="list-results__link">Result</Link>
                    </button>*/
