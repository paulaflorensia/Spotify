import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './flowHistory.css';


class FlowHisotry extends Component {
    render() {
        return (
            <div>
                <nav className="flow-history__nav">
                    <ul className="flow-history__ul">
                        <li className="flow-history__li"><Link className="flow-history__link" to="/home">> Home</Link></li>
                        <li className="flow-history__li"><Link className="flow-history__link" to="/artist">> Artist</Link></li>
                        <li className="flow-history__li"><Link className="flow-history__link" to="/albums">> Album</Link></li>
                        <li className="flow-history__li"><Link className="flow-history__link" to="/songs">> Song</Link></li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default FlowHisotry;
