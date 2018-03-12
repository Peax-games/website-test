import React from 'react';
import { Link } from 'react-router-dom';
import '../genreViews.css';

import comingsoon from '../../../Pictures/comingsoon.png';

export default function MobileGenreView() {

    return (
        <div className="arcade-root">
            <p className="arcade-genre-header">Mobile Games Pg. 1</p>
            <div className="genreViewPageLinks">
                <Link to="/mobile">&laquo;</Link>
                <Link className="active" to="/mobile">1</Link>
                <Link to="/mobile/page-2">2</Link>
                <Link to="/mobile/page-3">3</Link>
                <Link to="/mobile/page-3">&raquo;</Link>
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
                <Link to="/mobile">&laquo;</Link>
                <Link className="active" to="/mobile">1</Link>
                <Link to="/mobile/page-2">2</Link>
                <Link to="/mobile/page-3">3</Link>
                <Link to="/mobile/page-3">&raquo;</Link>
            </div>
            <div className='spacer'></div>
        </div>
    )
}