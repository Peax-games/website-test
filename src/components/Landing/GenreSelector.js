import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default function GameSelector() {


    const CHECKSSTYLE = {
        display: "none",
    }
    const LABELSSTYLES = {
        cursor: 'pointer',
        borderTop: '3px solid #5762D5',
        borderLeft: '3px solid #5762D5',
        margin: '3px',
        padding: '5px',
        width: '150px',
        trasition: '0.3s',
    }
    const LABELTITLES = {
        display: 'flex',
        flexDirection: 'column',
    }
    const PANELS = {
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        width: '80%',
        height: '800px',
        overflow: 'hidden',
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
            <div id={'newGamesPanel'} >
                hello
            </div>
            <div id={'actionPanel'} >
                <div>
                </div>
                <Link to='/action'><p>Check Out More Action Games...</p></Link>

            </div>
            <div id={'adventurePanel'} >
                <div>
                </div>
                <Link to='/adventure'><p>Check Out More Adventure Games...</p></Link>

            </div>
            <div id={'arcadePanel'} >
                <div>
                </div>
                <Link to='/arcade'><p>Check Out More Arcade Games...</p></Link>

            </div>
            <div id={'boardPanel'} >
                <div>
                </div>
                <Link to='/board'><p>Check Out More Board Games...</p></Link>

            </div>
            <div id={'cardPanel'} >
                <div>
                </div>
                <Link to='/card'><p>Check Out More Card Games...</p></Link>

            </div>
            <div id={'mmoPanel'} >
                <div>
                </div>
                <Link to='/mmo'><p>Check Out More MMO Games...</p></Link>

            </div>
            <div id={'mobilePanel'} >
                <div>
                </div>
                <Link to='/mobile'><p>Check Out More Mobile Games...</p></Link>

            </div>
            <div id={'multiplayerPanel'} >
                <div>
                </div>
                <Link to='/multiplayer'><p>Check Out More Multiplayer Games...</p></Link>

            </div>
            <div id={'platformPanel'} >
                <div>
                </div>
                <Link to='/platform'><p>Check Out More Platform Games...</p></Link>

            </div>
            <div id={'puzzlePanel'}>
                <div>
                </div>
                <Link to='/puzzle'><p>Check Out More Puzzle Games...</p></Link>

            </div>
            <div id={'racingPanel'} >
                <div>
                </div>
                <Link to='/racing'><p>Check Out More Racings Games...</p></Link>

            </div>
            <div id={'shootersPanel'} >
                <div>
                </div>
                <Link to='/shooters'><p>Check Out More Shooters Games...</p></Link>

            </div>
            <div id={'sportsPanel'} >
                <div>
                </div>
                <Link to='/sports'><p>Check Out More Sports Games...</p></Link>

            </div>
            <div id={'strategyPanel'} >
                <div>
                </div>
                <Link to='#'><p>Check Out More Strategy Games...</p></Link>

            </div>
        </div >
    )
}