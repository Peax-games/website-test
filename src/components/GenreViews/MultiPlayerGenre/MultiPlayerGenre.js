import React, {Component} from 'react';
import './MultiPlayerGenre.css';
import { Link } from 'react-router-dom';
import '../genreViews.css';

import comingsoon from '../../../Pictures/comingsoon.png';

import ships from './../../../Pictures/shipsjpeg.jpg';
import tanks1 from './../../../Pictures/tanks1jpeg.jpg';
import tanks2 from './../../../Pictures/tanks2jpeg.jpg';

export default function MultiPlayerGenreView() {

    return (
        <div className="arcade-root">
        <p className="arcade-genre-header">Multiplayer Games Pg. 1</p>
        <div className="genreViewPageLinks">
            <Link to="/multiplayer">&laquo;</Link>
            <Link className="active" to="/multiplayer">1</Link>
            <Link to="/multiplayer/page-2">2</Link>
            <Link to="/multiplayer/page-3">3</Link>
            <Link to="/multiplayer/page-3">&raquo;</Link>
        </div>
        <div className="gamesArea">
            <a href="/lobby:ships"><div>
                <h5>Ships</h5>
                <img src={ships} />
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
            <Link className="active" to="/multiplayer">1</Link>
            <Link to="/multiplayer/page-2">2</Link>
            <Link to="/multiplayer/page-3">3</Link>
            <Link to="/multiplayer/page-3">&raquo;</Link>
        </div>
        <div className='spacer'></div>
    </div>
)
}