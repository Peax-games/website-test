import React from 'react';
import { Link } from 'react-router-dom';
import '../genreViews.css';

import comingsoon from '../../../Pictures/comingsoon.png';

export default function ShootersGenreView() {

    return (
        <div className="arcade-root">
            <p className="arcade-genre-header">Shooter Games Pg. 1</p>
            <div className="genreViewPageLinks">
                <Link to="/shooters">&laquo;</Link>
                <Link className="active" to="/shooters">1</Link>
                <Link to="/shooters/page-2">2</Link>
                <Link to="/shooters/page-3">3</Link>
                <Link to="/shooters/page-3">&raquo;</Link>
            </div>
            <div className="gamesArea">
                <a href="/lobby:defender"><div>
                    <h5>Defender</h5>
                    <img src={comingsoon} />
                </div>
                </a>
                <a href="/lobby:tanks"><div>
                    <h5>Tanks</h5>
                    <img src={comingsoon} />
                </div>
                </a>
                <a href='/lobby:tanks-two'><div>
                    <h5>Tank Two</h5>
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
                <Link to="/shooters">&laquo;</Link>
                <Link className="active" to="/shooters">1</Link>
                <Link to="/shooters/page-2">2</Link>
                <Link to="/shooters/page-3">3</Link>
                <Link to="/shooters/page-3">&raquo;</Link>
            </div>
            <div className='spacer'></div>
        </div>
    )
}