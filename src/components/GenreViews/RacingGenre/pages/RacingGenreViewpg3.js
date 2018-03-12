import React from 'react';
import { Link } from 'react-router-dom';
import '../../genreViews.css';

import comingsoon from '../../../../Pictures/comingsoon.png';

export default function RacingGenreViewpg3() {

    return (
        <div className="arcade-root">
        <p className="arcade-genre-header">Racing Games Pg. 3</p>
        <div className="genreViewPageLinks">
            <Link to="/racing">&laquo;</Link>
            <Link to="/racing">1</Link>
            <Link to="/racing/page-2">2</Link>
            <Link className="active" to="/racing/page-3">3</Link>
            <Link to="/racing/page-3">&raquo;</Link>
        </div>
        <div className="gamesArea">
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
            <a href="#"><div>
                <h5>Coming Soon...</h5>
                <img src={comingsoon} />
            </div>
            </a>
        </div>
        <div className="genreViewPageLinks">
            <Link to="/racing">&laquo;</Link>
            <Link to="/racing">1</Link>
            <Link to="/racing/page-2">2</Link>
            <Link className="active" to="/racing/page-3">3</Link>
            <Link to="/racing/page-3">&raquo;</Link>
        </div>
        <div className='spacer'></div>
    </div>
)
}