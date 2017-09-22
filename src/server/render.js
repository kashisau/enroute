/**
 * render.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 10 Feb 2017
 */
import { renderToString } from 'react-dom/server';
import React from 'react';
export default (jsxPayload, articles) => `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" href="/static/enroute.css" media="all" />
        <title>En route</title>
    </head>
    <body>
        ${renderToString(jsxPayload)}
        ${articles ? `
            <script>window.__articles__ = ${JSON.stringify(articles)};</script>
            <script src="/static/client.js"></script>
        ` : ''}
    </body>
</html>`;
