import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';
// css
import './listResult.css';

class ListResults extends Component {
    
   
    render() {
        return (
            <div>
                <SearchBox />
                <FlowHistory />
                <div className="list-results">
                    <button type="select" className="list-results__button">
                        <Link to="/albums" className="list-results__link">Result</Link>
                    </button>
                </div>
            </div>
        );
    }
}

export default ListResults;
