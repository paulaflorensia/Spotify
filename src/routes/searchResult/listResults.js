import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class ListResults extends Component {

    render() {
        return (
            <div>
                <article className="list-results">
                    Artist
                </article>
                <button type="search" className="prueba">
                        <Link to="/albums" className="prueba2">Select Artist</Link>
                </button>
            </div>
        );
    }
}

export default ListResults;
