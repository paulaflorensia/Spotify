import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './searchBox.css';
//assets
import search_icon from '../../assets/search_icon.svg';


class SearchBox extends Component {

    state = {
        artist: ''
    };

    handleChange = (event) => {
        this.setState({ artist: event.target.value});
    };

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state);
    };

        render() {
            console.log(this.state.artist)
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                    className="search-box">
                        <input 
                                placeholder="Type the name of your favorite artist"
                                className="search-box__input"
                                onChange={this.handleChange} 
                                value={this.state.artist}
                            />
                        <button 
                                onClick={this.handleSubmit}
                                type="submit"
                                className="search-box__button">
                                <Link to="/results"className="search-box__link">
                                    <img src={search_icon} className="search-box__icon" alt="icon"/>
                                </Link>
                        </button>
                </form>
            </div>
        );
    }
}
export default SearchBox;
