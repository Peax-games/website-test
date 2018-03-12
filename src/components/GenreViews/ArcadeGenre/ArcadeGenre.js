import React from 'react';
import './ArcadeGenre.css';
import { Link } from 'react-router-dom';
import '../genreViews.css';

import comingsoon from '../../../Pictures/comingsoon.png';

import breakout from './../../../Pictures/breakoutjpeg.jpg';
import gemmatch from './../../../Pictures/gemmatchjpeg.jpg';
import pong from './../../../Pictures/ponggamejpeg.jpg';
import invaders1 from './../../../Pictures/invaders1jpeg.jpg';
import invaders2 from './../../../Pictures/invaders2jpeg.jpg';
import Match3 from './../../../Pictures/Match 3jpeg.jpg';
import asteroids from './../../../Pictures/asteroidsjpeg.jpg';
import defender from './../../../Pictures/defenderjpeg.jpg';
import cyberorb from './../../../Pictures/cyberorbjpeg.jpg';
import snake from './../../../Pictures/snakejpeg.jpg';


export default function ArcadeGenre(){
        return (
            <div className="arcade-root">
            <p className="arcade-genre-header">Arcade Games Pg. 1</p>
            <div className="genreViewPageLinks">
                <Link to="/arcade">&laquo;</Link>
                <Link className="active" to="/arcade">1</Link>
                <Link to="/arcade/page-2">2</Link>
                <Link to="/arcade/page-3">3</Link>
                <Link to="/arcade/page-3">&raquo;</Link>
            </div>
            <div className="gamesArea">
                <a href="/lobby:pong"><div>
                    <h5>Pong</h5>
                    <img src={pong} />
                </div>
                </a>
                <a href="/lobby:snake"><div>
                    <h5>Snake</h5>
                    <img src={snake} />
                </div>
                </a>
                <a href="/lobby:asteroids"><div>
                    <h5>Asteroids</h5>
                    <img src={asteroids} />
                </div>
                </a>
                <a href="/lobby:breakout"><div>
                    <h5>Breakout</h5>
                    <img src={breakout} />
                </div>
                </a>
                <a href="/lobby:invaders-two"><div>
                    <h5>Invaders-Two</h5>
                    <img src={invaders2} />
                </div>
                </a>
                <a href="/lobby:tetris"><div>
                    <h5>Tetris</h5>
                    <img src={comingsoon} />
                </div>
                </a>
                <a href="/lobby:brickbreaker"><div>
                    <h5>Brick-Breaker</h5>
                    <img src={comingsoon} />
                </div>
                </a>
                <a href="/lobby:invaders"><div>
                    <h5>Invaders</h5>
                    <img src={invaders2} />
                </div>
                </a>
                <a href="#"><div>
                    <h5>Coming Soon...</h5>
                    <img src={comingsoon} />
                </div>
                </a>
            </div>
            <div className="genreViewPageLinks">
                <Link to="/arcade">&laquo;</Link>
                <Link  className="active" to="/arcade">1</Link>
                <Link to="/arcade/page-2">2</Link>
                <Link to="/arcade/page-3">3</Link>
                <Link to="/arcade/page-3">&raquo;</Link>
            </div>
            <div className='spacer'></div>
        </div>
    )
}