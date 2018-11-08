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
                    'Authorization': 'Bearer BQAF7XB3KZgETEhhz226YBxtlEnyv-ZA0IVWm3dAseUkyi8Uuki1mFfvqUTfjbuk0dCPfGPu6Zfk44BVP_gjESlEJ6FNBXNDGvtzKYYPDyuTYlp5lsIDZzR__efV7TD1M5n_Bi6P0p0mmrGjztNZQLM5UZhe_-EzDxYVVsFcRykWz0d7q7aenP0g62UeyxM77GN2Y4M5eSiqcM-2_UZIzZVJ3fESMbx4GUd9f-wNYJUGALEPSdO4rVIlD2a0BPTmx3Rpb3rYL54'
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
