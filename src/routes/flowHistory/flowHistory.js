import React from 'react';
import { NavLink } from 'react-router-dom';
//css
import './flowHistory.css';


const FlowHisotry = () => {
        return (
            <div className="flow-history__nav">
                <NavLink className="flow-history__link-home" to="/home">Home</NavLink>
                <li className="flow-history__link">Results:</li>
                <NavLink className="flow-history__link" to="/artist">Artist</NavLink>
                <NavLink className="flow-history__link" to="/albums">Albums</NavLink>
                <NavLink className="flow-history__link" to="/songs">Songs</NavLink>
            </div>
        );

    };

export default FlowHisotry;
