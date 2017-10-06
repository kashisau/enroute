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
import MParse from './MParse/MParse';

const routes = [
    '/',
    '/article/:articleSlug'
];

const sampleArticles = [
    {
        "id": "2002",
        "title": "Some article index 2002",
        "slug": "some-article-index-2002",
        "heroImage": "/static/assets/images/Hagia-Sophia.jpg",
        "published": "Aug 27, 2017"
    },
    {
        "id": "3001",
        "title": "Some article index 3001",
        "slug": "some-article-index-3001",
        "heroImage": "/static/assets/images/Brasov.jpg",
        "published": "Aug 27, 2017"
    },
    {
        "id": "1001",
        "title": "Some article index 1001",
        "slug": "some-article-index-1001",
        "heroImage": "/static/assets/images/Sofia.jpg",
        "published": "Aug 27, 2017"
    },
    {
        "id": "1000",
        "title": "Some article index 0000",
        "slug": "some-article-index-0000",
        "heroImage": "/static/assets/images/Kocatepe-Mosque.jpg",
        "published": "Aug 27, 2017"
    }
];

sourceMapSupport.install();

const app = express();
app.use('/static', express.static('./dist'));
app.use('/json', (req, res) => {
    fetch('https://medium.com/@<account>/latest?format=json')
    .then((response) => {
        console.log("Data recieved!");
        res.status(200);
        res.contentType('application/json');
        response.text().then(json => res.send(new MParse().getArticles(json)));
    })
    .catch((err) => {
        console.log("Failed to get data.");
    });
});
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

    // fetch('https://medium.com/@<account>/latest?format=json')
    // .then((response) => {
    //     response.text().then(
    //         json => {
    //             const articles = new MParse().getArticles(json);
    //             const selectedArticles = articles.slice(0, 4);
    //             res.status(200).send(
    //                 render(
    //                     (<Router context={{}} location={req.url}>
    //                         <App articles={sampleArticles} />
    //                     </Router>),
    //                     sampleArticles
    //                 )
    //             );
    //         });
    // })
    // .catch((err) => {
    //     console.log("Failed to get data.");
    // });

    
});

app.listen(3000, () => console.log('Demo app listening on port 3000'));
