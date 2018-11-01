import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Results extends Component {
    render() {
        return (
            <div>
                <nav className="Results">
                    <ul>
                        <li><Link to="/artist">Artist</Link></li>
                        <li><Link to="/albums">Album</Link></li>
                        <li><Link to="/songs">songs</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Results;

