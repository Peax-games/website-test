import React from 'react';
import { Link } from 'react-router-dom';
import '../../genreViews.css';

import comingsoon from '../../../../Pictures/comingsoon.png';

export default function BoardGenreViewpg3() {

    return (
        <div className="arcade-root">
        <p className="arcade-genre-header">Board Games Pg. 3</p>
        <div className="genreViewPageLinks">
            <Link to="/board">&laquo;</Link>
            <Link  to="/board">1</Link>
            <Link to="/board/page-2">2</Link>
            <Link className="active" to="/board/page-3">3</Link>
            <Link to="/board/page-3">&raquo;</Link>
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
            <Link to="/board">&laquo;</Link>
            <Link  to="/board">1</Link>
            <Link to="/board/page-2">2</Link>
            <Link className="active" to="/board/page-3">3</Link>
            <Link to="/board/page-3">&raquo;</Link>
        </div>
        <div className='spacer'></div>
    </div>
)
}