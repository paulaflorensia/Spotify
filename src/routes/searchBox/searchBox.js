import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//css
import './searchBox.css';
//assets
import search_icon from '../../assets/search_icon.svg';

class SearchBox extends Component {
    
        state = {
            artist: '',
            searching: true
        };

        handleChange = (event) => {
            this.setState({ artist: event.target.value});
            this.setState ({[event.target.artist]: event.target.value});
        };

        handleSubmit = (event) => {
            event.preventDefault()
        };
        
    
        getArtist = async () => {     
                var api_search = 'https://api.spotify.com/v1/search?q=';
                var type = '&type=artist'
                var artist = this.state.artist
                var limit = '&limit=7'
                const response = await fetch(api_search+artist+type+limit, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer BQBjnbn7U1UL2kDpVnJuguMkzzb6xiOZDJqsp8G6hRXjLEd4H5i53BZfxFnbIicL9G3kczm1IMHnq311J8mqxtH67T9KKTCxVtInfkDM9FnM02VkQfZJPbWaHNXtv-jPy0xCqyZ7thzJTluxs4FRBXR7qRTP49jNYZ14FxTgwZw-wqwa8WgIQv39x2WOsWkM1dhyWK60sljUd8fkH7pVYlKBFq-Cf-8Kco-lW-2qoXGICbVQbL33FtfRtIv4peTzc7iYHalGp00'
                })
            }) 
            const data = await response.json();
                console.log("reply: ", data)
        };

    render() {
        const {artist}= this.state
        return (
            <div>
                <form 
                    onSubmit={this.handleSubmit}
                    type="submit"
                    className="search-box">
                        <input  
                                placeholder="Type the name of your favorite artist"
                                className="search-box__input"
                                type="text"
                                onChange={this.handleChange} 
                                value={this.state.artist}
                            />
                        <button 
                                onClick={this.handleSubmit}
                                type="submit"
                                className="search-box__button"
                                value={this.state.artist}>

                                <Link 
                                        to={{pathname: '/artist', state: {
                                        artist: this.state.artist}}}
                                        className="search-box__button-link">
                                        <img src={search_icon} className="search-box__button-icon"                                     alt="icon"/>
                                </Link>
                        </button>
                        <div className="search-box__searching">
                            {this.state.artist || !this.state.searching ? (
                                <div>
                                    <p>Your current search: <strong>{artist}</strong></p>
                                </div>
                                ) : (<p></p>)}
                        </div>
                    </form>
                    <div>
                        <img src={this.getArtist()} alt=""/>
                    </div>
            </div>
        );
    }
}

export default SearchBox;

/*    <div>
    <img src={this.getArtist()} alt="artist"/>
    </div>
*/
