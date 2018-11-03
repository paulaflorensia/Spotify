import React, { Component } from 'react';
import { Link } from 'react-router-dom';




class ListResults extends Component {

    state = {
        searching: true,
        artist: null,
    };
    
    async componentDidMount() {
        const url = "https://api.randomuser.me/"
        const response = await fetch(url);
        const data = await response.json();
        this.setState({artist: data.results[0], searching: false })
    }

    render() {
        return (
            <div>
                <button type="select" className="list-results__button">
                    <Link to="/albums" className="list-results__link">
                        <article className="list-results">
                            {this.state.searching || !this.state.artist ? (<div>Searching...</div>
                            ) : (
                                <div>
                                    <div>{this.state.artist.name.first}</div>
                                    <img src={this.state.artist.picture.large} alt="cover"/>
                                </div>
                            )}
                        </article>
                    </Link>
                </button>
            </div>
        );
    }
}

export default ListResults;
