import React from 'react';
import { Link } from 'react-router-dom';
import '../../genreViews.css';

import comingsoon from '../../../../Pictures/comingsoon.png';

export default function ShootersGenreViewpg3() {

    return (
        <div className="arcade-root">
            <p className="arcade-genre-header">Shooter Games Pg. 3</p>
            <div className="genreViewPageLinks">
                <Link to="/shooters">&laquo;</Link>
                <Link to="/shooters">1</Link>
                <Link to="/shooters/page-2">2</Link>
                <Link className="active" to="/shooters/page-3">3</Link>
                <Link to="/shooters/page-3">&raquo;</Link>
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
                <Link to="/shooters">&laquo;</Link>
                <Link to="/shooters">1</Link>
                <Link to="/shooters/page-2">2</Link>
                <Link className="active" to="/shooters/page-3">3</Link>
                <Link to="/shooters/page-3">&raquo;</Link>
            </div>
            <div className='spacer'></div>
        </div>
    )
}