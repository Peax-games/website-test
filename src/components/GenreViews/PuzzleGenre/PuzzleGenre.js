import React from 'react';
import './PuzzleGenre.css';
import { Link } from 'react-router-dom';
import '../genreViews.css';

import comingsoon from '../../../Pictures/comingsoon.png';

import Match3 from './../../../Pictures/Match 3jpeg.jpg';
import gemmatch from './../../../Pictures/gemmatchjpeg.jpg';
import memory from './../../../Pictures/memoryjpeg.jpg';
import simon from './../../../Pictures/simonjpeg.jpg';
import slidingpuzzle from './../../../Pictures/slidingpuzzlejpeg.jpg';

export default function PuzzleGenre(){

        return (
            <div className="arcade-root">
            <p className="arcade-genre-header">Puzzle Games Pg. 1</p>
            <div className="genreViewPageLinks">
                <Link to="/puzzle">&laquo;</Link>
                <Link className="active" to="/puzzle">1</Link>
                <Link to="/puzzle/page-2">2</Link>
                <Link to="/puzzle/page-3">3</Link>
                <Link to="/puzzle/page-3">&raquo;</Link>
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
                <Link to="/puzzle">&laquo;</Link>
                <Link className="active" to="/puzzle">1</Link>
                <Link to="/puzzle/page-2">2</Link>
                <Link to="/puzzle/page-3">3</Link>
                <Link to="/puzzle/page-3">&raquo;</Link>
            </div>
            <div className='spacer'></div>
        </div>
    )
}