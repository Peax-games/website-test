import React from 'react';
import { Link } from 'react-router-dom';
import '../genreViews.css';

import comingsoon from '../../../Pictures/comingsoon.png';

export default function PlatformGenreView() {

    return (
        <div className="arcade-root">
            <p className="arcade-genre-header">Platform Games Pg. 1</p>
            <div className="genreViewPageLinks">
                <Link to="/platform">&laquo;</Link>
                <Link className="active" to="/platform">1</Link>
                <Link to="/platform/page-2">2</Link>
                <Link to="/platform/page-3">3</Link>
                <Link to="/platform/page-3">&raquo;</Link>
            </div>
            <div className="gamesArea">
                <a href="/lobby:star-platformer"><div>
                    <h5>Star Platformer</h5>
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
                <Link to="/platform">&laquo;</Link>
                <Link className="active" to="/platform">1</Link>
                <Link to="/platform/page-2">2</Link>
                <Link to="/platform/page-3">3</Link>
                <Link to="/platform/page-3">&raquo;</Link>
            </div>
            <div className='spacer'></div>
        </div>
    )
}