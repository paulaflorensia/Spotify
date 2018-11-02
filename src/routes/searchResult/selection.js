import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';

class Selection extends Component {
    render() {
        return (
            <div>
                <SearchBox></SearchBox>
                <FlowHistory></FlowHistory>
                <article className="selection">
                Album
                </article>
                <button type="search" className="prueba">
                        <Link to="/songs" className="prueba2">Select Album</Link>
                </button>
            </div>
        );
    }
}

export default Selection;
