/**
 * index.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
/* eslint-disable no-console */

import express from 'express';
import React from 'react';
import App from '../shared/App';
import NoMatch from '../shared/NoMatch';
import Error from '../shared/Error';
import { StaticRouter as Router, matchPath } from 'react-router';
import sourceMapSupport from 'source-map-support';
import render from './render';
import fetch from 'node-fetch';

const routes = [
    '/',
    '/articles/:articleSlug'
];

const sampleArticles = [
    {
        "id": "1002",
        "title": "Some article index 2002",
        "slug": "some-article-index-2002",
        "heroImage": "https://cdn-images-1.medium.com/max/2000/1*-v9a_aweRSsi3BAWeqb-yQ.jpeg",
        "published": "Aug 27, 2017"
    }
];

sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));

app.get('*', (req, res) => {
    const match = routes.reduce((acc, route) => matchPath(req.url, route, { exact: true }) || acc, null);
    if (!match) {
        res.status(404).send(render(<NoMatch />));
        return;
    }
    res.status(200).send(
        render(
            (<Router context={{}} location={req.url}>
                <App articles={sampleArticles} />
            </Router>),
            sampleArticles
        )
    );
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
