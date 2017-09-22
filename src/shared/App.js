/**
 * App.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React, { Component } from 'react';
import Sidebar from './Sidebar';
import SidebarItem from './SidebarItem';
import Home from './Home/Home';
import { Link, Route } from 'react-router-dom';
import './App.scss';

export default ({ articles }) => (
    <div id="app">$
        <Route path="/" exact>
            <Home articles={articles} />
        </Route>
    </div>
);

