import React from 'react';
import { Link } from 'react-router-dom';
import '../../genreViews.css';

import comingsoon from '../../../../Pictures/comingsoon.png';

export default function ActionGenreViewpg2() {

    return (
        <div className="arcade-root">
            <p className="arcade-genre-header">Action Games Pg. 2</p>
            <div className="genreViewPageLinks">
                <Link to="/action">&laquo;</Link>
                <Link  to="/action">1</Link>
                <Link className="active" to="/action/page-2">2</Link>
                <Link to="/action/page-3">3</Link>
                <Link to="/action/page-3">&raquo;</Link>
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
                <Link to="/action">&laquo;</Link>
                <Link  to="/action">1</Link>
                <Link className="active" to="/action/page-2">2</Link>
                <Link to="/action/page-3">3</Link>
                <Link to="/action/page-3">&raquo;</Link>
            </div>
            <div className='spacer'></div>
        </div>
    )
}