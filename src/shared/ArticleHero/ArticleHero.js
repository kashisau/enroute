/**
 * ArticleHero.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import { React } from 'react';
import './ArticleHero.scss';

export default ({ article }) => (
    <div className="ArticleHero">
        <a href={`/article/${article.slug}`}><h1>{article.title}</h1></a>
        <img className="ArticleHero-image" src={article.heroImage} />
    </div>
);
