import React from 'react';
import { Link } from 'react-router-dom';
import '../../genreViews.css';

import comingsoon from '../../../../Pictures/comingsoon.png';

export default function MultiPlayerGenreViewpg3() {

    return (
        <div className="arcade-root">
        <p className="arcade-genre-header">Multiplayer Games Pg. 3</p>
        <div className="genreViewPageLinks">
            <Link to="/multiplayer">&laquo;</Link>
            <Link to="/multiplayer">1</Link>
            <Link to="/multiplayer/page-2">2</Link>
            <Link className="active" to="/multiplayer/page-3">3</Link>
            <Link to="/multiplayer/page-3">&raquo;</Link>
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
            <Link to="/multiplayer">&laquo;</Link>
            <Link to="/multiplayer">1</Link>
            <Link to="/multiplayer/page-2">2</Link>
            <Link className="active" to="/multiplayer/page-3">3</Link>
            <Link to="/multiplayer/page-3">&raquo;</Link>
        </div>
        <div className='spacer'></div>
    </div>
)
}