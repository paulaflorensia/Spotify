import React, { Component } from 'react';
import SearchBox from '../searchBox/searchBox';
import FlowHistory from '../flowHistory/flowHistory';

class SongsList extends Component {
    render() {
        return (
            <div>
                <SearchBox></SearchBox>
                <FlowHistory></FlowHistory>
                <article className="song-list">
                Song list
                </article>
                <button type="search" className="prueba">Play</button>
            </div>
        );
    }
}

export default SongsList;
