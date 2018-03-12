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
import ActionGenreViewPg2 from './components/GenreViews/ActionGenre/pages/ActionGenreViewPg2';
import ActionGenreViewPg3 from './components/GenreViews/ActionGenre/pages/ActionGenreViewPg3';

import AdventureGenreView from './components/GenreViews/AdventureGenre/AdventureGenreView';
import AdventureGenreViewPg2 from './components/GenreViews/AdventureGenre/pages/AdventureGenreViewPg2';
import AdventureGenreViewPg3 from './components/GenreViews/AdventureGenre/pages/AdventureGenreViewPg3';

import ArcadeGenre from './components/GenreViews/ArcadeGenre/ArcadeGenre.js';
import ArcadeGenreViewPg2 from './components/GenreViews/ArcadeGenre/pages/ArcadeGenreViewspg2';
import ArcadeGenreViewPg3 from './components/GenreViews/ArcadeGenre/pages/ArcadeGenreViewspg3';

import BoardGenreView from './components/GenreViews/BoardGenre/BoardGenreView';
import BoardGenreViewPg2 from './components/GenreViews/BoardGenre/pages/BoardGenreViewpg2';
import BoardGenreViewPg3 from './components/GenreViews/BoardGenre/pages/BoardGenreViewpg3';

import CardGenreView from './components/GenreViews/CardGenre/CardGenreView';
import CardGenreViewPg2 from './components/GenreViews/CardGenre/pages/CardGenreViewpg2';
import CardGenreViewPg3 from './components/GenreViews/CardGenre/pages/CardGenreViewpg3';

import MMOGenreView from './components/GenreViews/MMOGenre/MMOGenreView';
import MMOGenreViewPg2 from './components/GenreViews/MMOGenre/pages/MMOGenreViewpg2';
import MMOGenreViewPg3 from './components/GenreViews/MMOGenre/pages/MMOGenreViewpg3';

import MobileGenreView from './components/GenreViews/MobileGenre/MobileGenreView';
import MobileGenreViewPg2 from './components/GenreViews/MobileGenre/pages/MobileGenreViewpg2';
import MobileGenreViewPg3 from './components/GenreViews/MobileGenre/pages/MobileGenreViewpg3';

import MultiPlayerGenre from './components/GenreViews/MultiPlayerGenre/MultiPlayerGenre.js';
import MultiPlayerGenrePg2 from './components/GenreViews/MultiPlayerGenre/pages/MultiPlayerGenreViewpg2';
import MultiPlayerGenrePg3 from './components/GenreViews/MultiPlayerGenre/pages/MultiPlayerGenreViewpg3';

import PlatformGenreView from './components/GenreViews/PlatformGenre/PlatformGenreView';
import PlatformGenreViewPg2 from './components/GenreViews/PlatformGenre/pages/PlatformGenreViewpg2';
import PlatformGenreViewPg3 from './components/GenreViews/PlatformGenre/pages/PlatformGenreViewpg3';

import PuzzleGenre from './components/GenreViews/PuzzleGenre/PuzzleGenre.js';
import PuzzleGenreViewPg2 from './components/GenreViews/PuzzleGenre/pages/PuzzleGenreViewpg2';
import PuzzleGenreViewPg3 from './components/GenreViews/PuzzleGenre/pages/PuzzleGenreViewpg3';

import RacingGenreView from './components/GenreViews/RacingGenre/RacingGenreView';
import RacingGenreViewPg2 from './components/GenreViews/RacingGenre/pages/RacingGenreViewpg2';
import RacingGenreViewPg3 from './components/GenreViews/RacingGenre/pages/RacingGenreViewpg3';

import ShootersGenereView from './components/GenreViews/ShootersGenre/ShootersGenreView';
import ShootersGenereViewPg2 from './components/GenreViews/ShootersGenre/pages/ShootersGenreViewpg2';
import ShootersGenereViewPg3 from './components/GenreViews/ShootersGenre/pages/ShootersGenreViewpg3';

import SideScrollGenre from './components/GenreViews/SideScrollGenre/SideScrollGenre.js';
import SportsGenreView from './components/GenreViews/SportsGenre/SportsGenreView';
import SportsGenreViewPg2 from './components/GenreViews/SportsGenre/pages/SportsGenreViewpg2';
import SportsGenreViewPg3 from './components/GenreViews/SportsGenre/pages/SportsGenreViewpg3';

import StrategyGenreView from './components/GenreViews/StrategyGenre/StrategyGenreView';
import StrategyGenreViewPg2 from './components/GenreViews/StrategyGenre/pages/StrategyGenreViewpg2';
import StrategyGenreViewPg3 from './components/GenreViews/StrategyGenre/pages/StrategyGenreViewpg3';


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

                <Route component={ActionGenreView} exact path="/action" />
                <Route component={ActionGenreViewPg2} path='/action/page-2' />
                <Route component={ActionGenreViewPg3} path='/action/page-3' />
                <Route component={AdventureGenreView} exact path="/adventure" />
                <Route component={AdventureGenreViewPg2} path='/adventure/page-2' />
                <Route component={AdventureGenreViewPg3} path='/adventure/page-3' />
                <Route component={ArcadeGenre} exact path="/arcade" />
                <Route component={ArcadeGenreViewPg2} path='/arcade/page-2' />
                <Route component={ArcadeGenreViewPg3} path='/arcade/page-3' />
                <Route component={BoardGenreView} exact path="/board" />
                <Route component={BoardGenreViewPg2} path='/board/page-2' />
                <Route component={BoardGenreViewPg3} path='/board/page-3' />
                <Route component={CardGenreView} exact path="/card" />
                <Route component={CardGenreViewPg2} path='/card/page-2' />
                <Route component={CardGenreViewPg3} path='/card/page-3' />
                <Route component={MMOGenreView} exact path="/mmo" />
                <Route component={MMOGenreViewPg2} path='/mmo/page-2' />
                <Route component={MMOGenreViewPg3} path='/mmo/page-3' />
                <Route component={MobileGenreView} exact path="/mobile" />
                <Route component={MobileGenreViewPg2} path='/mobile/page-2' />
                <Route component={MobileGenreViewPg3} path='/mobile/page-3' />
                <Route component={MultiPlayerGenre} exact path="/multiplayer" />
                <Route component={MultiPlayerGenrePg2} path='/multiplayer/page-2' />
                <Route component={MultiPlayerGenrePg3} path='/multiplayer/page-3' />
                <Route component={PlatformGenreView} exact path="/platform" />
                <Route component={PlatformGenreViewPg2} path='/platform/page-2' />
                <Route component={PlatformGenreViewPg3} path='/platform/page-3' />
                <Route component={PuzzleGenre} exact path="/puzzle" />
                <Route component={PuzzleGenreViewPg2} path='/puzzle/page-2' />
                <Route component={PuzzleGenreViewPg3} path='/puzzle/page-3' />
                <Route component={RacingGenreView} exact path="/racing" />
                <Route component={RacingGenreViewPg2} path='/racing/page-2' />
                <Route component={RacingGenreViewPg3} path='/racing/page-3' />
                <Route component={ShootersGenereView} exact path="/shooters" />
                <Route component={ShootersGenereViewPg2} path='/shooters/page-2' />
                <Route component={ShootersGenereViewPg3} path='/shooters/page-3' />
                <Route component={SideScrollGenre} exact path="/sidescroll" />
                <Route component={SportsGenreView} exact path="/sports" />
                <Route component={SportsGenreViewPg2} path='/sports/page-2' />
                <Route component={SportsGenreViewPg3} path='/sports/page-3' />
                <Route component={StrategyGenreView} exact path="/strategy" />
                <Route component={StrategyGenreViewPg2} path='/strategy/page-2' />
                <Route component={StrategyGenreViewPg3} path='/strategy/page-3' />

                <Route render={() => <Dropdown showSlideMenu={showSlideMenu} closeMenu={closeMenu} />} path='/' />
                <Route render={() => <GamesDropdown showGameSlide={showGameSlide} closeGameMenu={closeGameMenu} />} path='/' />


            </div>
        </Router>
    )
}

