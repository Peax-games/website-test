import React, { Component } from 'react';

export default function GameSelector() {


    const CHECKSSTYLE = {
        display: "none",
    }
    const LABELSSTYLES = {
        cursor: 'pointer',
        borderTop: '1px solid black',
        borderLeft: '1px solid black',
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
                <label style={LABELSSTYLES} htmlFor={'sports'}>Sports</label>
                <label style={LABELSSTYLES} htmlFor={'strategy'}>Strategy</label>
            </nav>

            <div id={'newGamesPanel'} >
                hello
            </div>
            <div id={'actionPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Action Games...</p></a>

            </div>
            <div id={'adventurePanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Adventure Games...</p></a>

            </div>
            <div id={'arcadePanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Arcade Games...</p></a>

            </div>
            <div id={'boardPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Board Games...</p></a>

            </div>
            <div id={'cardPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Card Games...</p></a>

            </div>
            <div id={'mmoPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More MMO Games...</p></a>

            </div>
            <div id={'mobilePanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Mobile Games...</p></a>

            </div>
            <div id={'multiplayerPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Multiplayer Games...</p></a>

            </div>
            <div id={'platformPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Platform Games...</p></a>

            </div>
            <div id={'puzzlePanel'}>
                <div>
                </div>
                <a href='#'><p>Check Out More Puzzle Games...</p></a>

            </div>
            <div id={'sportsPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Sports Games...</p></a>

            </div>
            <div id={'strategyPanel'} >
                <div>
                </div>
                <a href='#'><p>Check Out More Strategy Games...</p></a>

            </div>
        </div>
    )
}