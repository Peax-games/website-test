import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './Landing.css';
//game images
import comingsoon from './../../Pictures/comingsoon.png';
import pong from './../../Pictures/ponggamejpeg.jpg';
import ships from './../../Pictures/shipsjpeg.jpg';
import simon from './../../Pictures/simonjpeg.jpg';


import breakout from './../../Pictures/breakoutjpeg.jpg';
import invaders2 from './../../Pictures/invaders2jpeg.jpg';
import asteroids from './../../Pictures/asteroidsjpeg.jpg';


import cyberorb from './../../Pictures/cyberorbjpeg.jpg';
import starplat from './../../Pictures/starjpeg.jpg';
import gemmatch from './../../Pictures/gemmatchjpeg.jpg';
import matchingpairs from './../../Pictures/memoryjpeg.jpg';
import slidingpuzzle from './../../Pictures/slidingpuzzlejpeg.jpg';
import tanks1 from './../../Pictures/tanks1jpeg.jpg';
import tanks2 from './../../Pictures/tanks2jpeg.jpg';
import defender from './../../Pictures/defenderjpeg.jpg';

export default function GameSelector() {


    const CHECKSSTYLE = {
        display: "none",
    }
    const LABELSSTYLES = {
        cursor: 'pointer',
        borderTop: '3px solid #5762D5',
        borderLeft: '3px solid #5762D5',
        margin: '5px',
        padding: '10px',
        width: '250px',
        trasition: '0.3s',
    }
    const LABELTITLES = {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        width: '150px',
    }
    const PANELS = {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '70%',
        height: '1000px',
        overflow: 'hidden',

        flexWrap: 'wrap',
    }
    const GAMESDISPLAY = {
        border: '3px solid #5762D5',
        width: '825px',
        height: '750px',
        flexWrap: 'wrap',
    }
    return (
        <div style={PANELS} className='panels' >

            <input id={'newGames'} type="radio" name="Vpanel_select" defaultChecked style={CHECKSSTYLE} />
            <input id={'action'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'adventure'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'arcade'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'board'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'card'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'mmo'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'mobile'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'multiplayer'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'platform'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'puzzle'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'racing'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'shooters'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'sports'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <input id={'strategy'} type="radio" name="Vpanel_select" style={CHECKSSTYLE} />
            <nav style={LABELTITLES}>
                <label style={LABELSSTYLES} htmlFor={'newGames'}>New Games</label>
                <label style={LABELSSTYLES} htmlFor={'action'}>Action</label>
                <label style={LABELSSTYLES} htmlFor={'adventure'}>Adventure</label>
                <label style={LABELSSTYLES} htmlFor={'arcade'}>Arcade</label>
                <label style={LABELSSTYLES} htmlFor={'board'}>Board</label>
                <label style={LABELSSTYLES} htmlFor={'card'}>Card</label>
                <label style={LABELSSTYLES} htmlFor={'mmo'}>MMO</label>
                <label style={LABELSSTYLES} htmlFor={'mobile'}>Mobile</label>
                <label style={LABELSSTYLES} htmlFor={'multiplayer'}>Multiplayer</label>
                <label style={LABELSSTYLES} htmlFor={'platform'}>Platform</label>
                <label style={LABELSSTYLES} htmlFor={'puzzle'}>Puzzle</label>
                <label style={LABELSSTYLES} htmlFor={'racing'}>Racing</label>
                <label style={LABELSSTYLES} htmlFor={'shooters'}>Shooters</label>
                <label style={LABELSSTYLES} htmlFor={'sports'}>Sports</label>
                <label style={LABELSSTYLES} htmlFor={'strategy'}>Strategy</label>
            </nav>
            <div id={'newGamesPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="/lobby:ships"><div>
                    <h5>Ships</h5>
                    <img src={ships} />
                </div>
                </a>
                <a href="/lobby:simon"><div>
                    <h5>Simon</h5>
                    <img src={simon} />
                </div>
                </a>
                <a href="/lobby:tetris"><div>
                    <h5>Tetris</h5>
                    <img src={pong} />
                </div>
                </a>
                <a href="/lobby:monster-candy"><div>
                    <h5>Monster Candy</h5>
                    <img src={pong} />
                </div>
                </a>
            </div>
            <div id={'actionPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="/lobby:monster-candy"><div>
                    <h5>Monster Candy</h5>
                    <img src={pong} />
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
                <Link to='/action'><p>Check Out More Action Games...</p></Link>

            </div>
            <div id={'adventurePanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
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
                <Link to='/adventure'><p>Check Out More Adventure Games...</p></Link>

            </div>
            <div id={'arcadePanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="/lobby:pong"><div>
                    <h5>Pong</h5>
                    <img src={pong} />
                </div>
                </a>
                <a href="/lobby:breakout"><div>
                    <h5>Breakout</h5>
                    <img src={breakout} />
                </div>
                </a>
                <a href="/lobby:invaders-two"><div>
                    <h5>Invaders</h5>
                    <img src={invaders2} />
                </div>
                </a>
                <a href="/lobby:asteroids"><div>
                    <h5>Asteroids</h5>
                    <img src={asteroids} />
                </div>
                </a>
                <Link to='/arcade'><p>Check Out More Arcade Games...</p></Link>

            </div>
            <div id={'boardPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
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
                <Link to='/board'><p>Check Out More Board Games...</p></Link>

            </div>
            <div id={'cardPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
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
                <Link to='/card'><p>Check Out More Card Games...</p></Link>

            </div>
            <div id={'mmoPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="#"><div>
                    <h5>Peax Quest</h5>
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
                <Link to='/mmo'><p>Check Out More MMO Games...</p></Link>

            </div>
            <div id={'mobilePanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="/lobby:maze2d"><div>
                    <h5>Cyber Orb</h5>
                    <img src={cyberorb} />
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
                <Link to='/mobile'><p>Check Out More Mobile Games...</p></Link>

            </div>
            <div id={'multiplayerPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
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
                <Link to='/multiplayer'><p>Check Out More Multiplayer Games...</p></Link>

            </div>
            <div id={'platformPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="/lobby:star-platformer"><div>
                    <h5>Star Platformer</h5>
                    <img src={starplat} />
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
                <Link to='/platform'><p>Check Out More Platform Games...</p></Link>

            </div>
            <div id={'puzzlePanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="/lobby:gemmatch"><div>
                    <h5>Gem Match</h5>
                    <img src={gemmatch} />
                </div>
                </a>
                <a href="/lobby:matching-pairs"><div>
                    <h5>Matching Pairs</h5>
                    <img src={matchingpairs} />
                </div>
                </a>
                <a href="/lobby:simon"><div>
                    <h5>Simon</h5>
                    <img src={simon} />
                </div>
                </a>
                <a href="/lobby:sliding-puzzle"><div>
                    <h5>Sliding Puzzle</h5>
                    <img src={slidingpuzzle} />
                </div>
                </a>
                <Link to='/puzzle'><p>Check Out More Puzzle Games...</p></Link>

            </div>
            <div id={'racingPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="#"><div>
                    <h5>Coming Soon...</h5>
                    <img src={pong} />
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
                <Link to='/racing'><p>Check Out More Racings Games...</p></Link>

            </div>
            <div id={'shootersPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
                <a href="/lobby:tanks"><div>
                    <h5>Tanks</h5>
                    <img src={tanks1} />
                </div>
                </a>
                <a href="/lobby:defender"><div>
                    <h5>Defender</h5>
                    <img src={defender} />
                </div>
                </a>
                <a href="/lobby:tanks-two"><div>
                    <h5>Tanks Two</h5>
                    <img src={tanks2} />
                </div>
                </a>
                <a href="#"><div>
                    <h5>Coming Soon...</h5>
                    <img src={comingsoon} />
                </div>
                </a>
                <Link to='/shooters'><p>Check Out More Shooters Games...</p></Link>

            </div>
            <div id={'sportsPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
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
                <Link to='/sports'><p>Check Out More Sports Games...</p></Link>

            </div>
            <div id={'strategyPanel'} style={GAMESDISPLAY} className='gamesdisplayer'>
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
                <Link to='/strategy'><p>Check Out More Strategy Games...</p></Link>

            </div>
        </div>
    )
}