import React, { Component } from 'react';
//css
import './homeView.css';
//cmp
import SearchBox from '../searchBox/searchBox';



class homeView extends Component {

    render() {
        return (
            <article className="home-view">
                <div>
                    <div className="home-view__welcome">
                        <p className="home-view__paragraph">
                        Well done, just enter an artist's name in the following search box and enjoy!
                        </p>
                        <SearchBox></SearchBox>
                    </div>   
                </div>
            </article>

        );
    }
}

export default homeView;
