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
            console.log(this.state.artist)

        };

        handleSubmit = (event) => {
            event.preventDefault()
            console.log(this.state);
        };
        
    
        getArtist = async () => {     
                var api_search = 'https://api.spotify.com/v1/search?q=';
                var type = '&type=artist'
                var artist = 'queen'
                const response = await fetch(api_search+artist+type, {
                method: 'get',
                headers: new Headers({
                    'Authorization': 'Bearer BQBnAgTiviUTc7MC_-97mIv5c4gOok_IgKFUDV87iYkFYOT8EPA5A-1YcBxIRelMbzM0_LIJFnzMnUhLlhyvEzotC_WdfLlydR91FR-S_sJwTyCKyudKUlOvXuJHl36Lz6H9FU9dmHjbdKAsNxbe0CcQhYo5uGuF1h0XPTBPMbNqo6FfmE4oVNg9sJuLfehhFbrIGwB9wyglJKqEcmGoR0Ff5cSN0QZDm1gE3g1f0VAYhPipVsu1NC2XQDGcrRnpdne5ay5kEX8'
                })
            }) 
            const data = await response.json();
                console.log("reply: ", data)

            return (data.artists.items[0])
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
                                className="search-box__button">
                                <Link to="/artist" className="search-box__button-link"><img src={search_icon} className="search-box__button-icon" alt="icon"/></Link>
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
                            <img src={this.getArtist()} alt="artist"/>
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
