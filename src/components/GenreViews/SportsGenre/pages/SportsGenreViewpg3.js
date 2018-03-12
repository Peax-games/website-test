import React from 'react';
import { Link } from 'react-router-dom';
import '../../genreViews.css';

import comingsoon from '../../../../Pictures/comingsoon.png';

export default function SportsGenreViewpg3() {

    return (
        <div className="arcade-root">
        <p className="arcade-genre-header">Sports Games Pg. 3</p>
        <div className="genreViewPageLinks">
            <Link to="/sports">&laquo;</Link>
            <Link to="/sports">1</Link>
            <Link to="/sports/page-2">2</Link>
            <Link className="active" to="/sports/page-3">3</Link>
            <Link to="/sports/page-3">&raquo;</Link>
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
            <Link to="/sports">&laquo;</Link>
            <Link to="/sports">1</Link>
            <Link to="/sports/page-2">2</Link>
            <Link className="active" to="/sports/page-3">3</Link>
            <Link to="/sports/page-3">&raquo;</Link>
        </div>
        <div className='spacer'></div>
    </div>
)
}