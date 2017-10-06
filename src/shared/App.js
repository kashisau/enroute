/**
 * App.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React, { Component } from 'react';
import Home from './Home/Home';
import Header from './Header/Header';
import { Link, Route } from 'react-router-dom';
import './_viewports.scss';
import './App.scss';

export default ({ articles }) => (
    <div id="Enroute-app">
        <Header />
        <Route path="/" exact>
            <Home articles={articles} />
        </Route>
        <Route path="/article/:articleSlug">
            <p>This is an article</p>
        </Route>
    </div>
);

