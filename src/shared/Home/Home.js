/**
 * Home.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React from 'react';
import ArticleHero from '../ArticleHero/ArticleHero';
import './Home.scss';

export default ({articles}) => (
    <div className="Home">
        {articles.map((article, key) => <ArticleHero article={article} key={key} />)}
    </div>
);
