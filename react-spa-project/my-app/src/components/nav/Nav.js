import React from 'react'
import Home from '../home/Home'
import Movies from '../movies/Movies'
import TvShows from '../tvshows/TvShows'
import './Nav.css'
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'


const Nav = () => {
    return (
        <Router>
        <div className="container">

            <div className="row my-3">
                <ul className="nav nav-pills">
                <li className="nav-item">
                    <NavLink className="nav-link" exact activeClassName="active" to="/">
                        Home
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/movies">
                        Movies
                    </NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/tvshows">
                        Tv Shows
                    </NavLink>
                </li>
                </ul>
            </div>

        </div>
            <Switch>
                <Route path="/movies">
                    <Movies />
                </Route>
                <Route path="/tvshows">
                    <TvShows />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
      </Router>
    )
}

export default Nav