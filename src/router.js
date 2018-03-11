import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Landing from './components/Landing/Landing.js';
import Login from './components/Login/Login.js';
import Lobby from './components/Lobby/Lobby.js';
import Profile from './components/Profile/Profile.js';
import LeaderBoard from './components/LeaderBoard/LeaderBoard.js';
import EditProfile from './components/EditProfile/EditProfile.js';




import Genres from './components/Genres/Genres.js';
// import BrickBreak from './components/Lobby/GameLibrary/BrickBreakerPureJS';
import Dropdown from './components/Dropdown/Dropdown.js';
import GamesDropdown from './components/GamesDropdown/GamesDropdown.js';


import ActionGenreView from './components/GenreViews/ActionGenre/ActionGenreView';
import AdventureGenreView from './components/GenreViews/AdventureGenre/AdventureGenreView';
import ArcadeGenre from './components/GenreViews/ArcadeGenre/ArcadeGenre.js';
import BoardGenreView from './components/GenreViews/BoardGenre/BoardGenreView';
import CardGenreView from './components/GenreViews/CardGenre/CardGenreView';
import MMOGenreView from './components/GenreViews/MMOGenre/MMOGenreView';
import MobileGenreView from './components/GenreViews/MobileGenre/MobileGenreView';
import MultiPlayerGenre from './components/GenreViews/MultiPlayerGenre/MultiPlayerGenre.js';
import PlatformGenreView from './components/GenreViews/PlatformGenre/PlatformGenreView';
import PuzzleGenre from './components/GenreViews/PuzzleGenre/PuzzleGenre.js';
import RacingGenreView from './components/GenreViews/RacingGenre/RacingGenreView';
import ShootersGenereView from './components/GenreViews/ShootersGenre/ShootersGenreView';
import SideScrollGenre from './components/GenreViews/SideScrollGenre/SideScrollGenre.js';
import SportsGenreView from './components/GenreViews/SportsGenre/SportsGenreView';
import StrategyGenreView from './components/GenreViews/StrategyGenre/StrategyGenreView';



export default function router(showSlideMenu, closeMenu, showGameSlide, closeGameMenu) {
    // console.log('closeMenu', closeMenu, 'showSlideMenu', showSlideMenu)
    return (
        <Router>
            <div>
                <Route component={Login} exact path="/" />
                <Route component={Landing} path="/landing" />
                <Route component={Lobby} exact path="/lobby:game" />
                <Route component={Profile} path="/profile" />
                <Route component={LeaderBoard} path="/leaderboard" />
                <Route component={Genres} path="/genres" />
                <Route component={EditProfile} path="/editprofile" />

                <Route component={ActionGenreView} path="/action" />
                <Route component={AdventureGenreView} path="/adventure" />
                <Route component={ArcadeGenre} path="/arcade" />
                <Route component={BoardGenreView} path="/board" />
                <Route component={CardGenreView} path="/card" />
                <Route component={MMOGenreView} path="/mmo" />
                <Route component={MobileGenreView} path="/mobile" />
                <Route component={MultiPlayerGenre} path="/multiplayer" />
                <Route component={PlatformGenreView} path="/platform" />
                <Route component={PuzzleGenre} path="/puzzle" />
                <Route component={RacingGenreView} path="/racing" />
                <Route component={ShootersGenereView} path="/shooters" />
                <Route component={SideScrollGenre} path="/sidescroll" />
                <Route component={SportsGenreView} path="/sports" />
                <Route component={StrategyGenreView} path="/strategy" />

                <Route render={() => <Dropdown showSlideMenu={showSlideMenu} closeMenu={closeMenu} />} path='/' />
                <Route render={() => <GamesDropdown showGameSlide={showGameSlide} closeGameMenu={closeGameMenu} />} path='/' />


            </div>
        </Router>
    )
}

