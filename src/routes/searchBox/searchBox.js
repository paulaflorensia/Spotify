import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './searchBox.css';
//assets
import search_icon from '../../assets/search_icon.svg';


class SearchBox extends Component {
    render() {
        return (
            <div>
                <form className="search-box">
                        <input placeholder="Type the name of your favorite artist" className="search-box__input"></input>
                        <button type="submit" className="search-box__button">
                        <Link to="/results"className="search-box__link"><img src={search_icon} className="search-box__icon" alt="icon"/></Link>
                        </button>
                </form>
            </div>
        );
    }
}
export default SearchBox;
