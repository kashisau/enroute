/**
 * Home.js
 *
 */
import React from 'react';
import ArticleHero from '../ArticleHero/ArticleHero';
import classnames from 'classnames';
import './Home.scss';

class Article extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activeArticle: 0,
            nextArticle: undefined,
            sliding: false
        };

        this.initHeroTransition = this.initHeroTransition.bind(this);
    }

    initHeroTransition(e) {
        if ( ! e.target.classList.contains("ArticleHero")) return;
        this.setState({ sliding: false });
    }

    render() {
        var article = this.props.article;
        return <div
            className={
                classnames(
                    "Article",
                    "Article-article-" + this.state.activeArticle,
                    { "is-sliding" : this.state.sliding }
                )
            }
            onTransitionEnd={this.initHeroTransition}
            ref={ homeContainer => this.homeContainer = homeContainer }>
            <ArticleHero article={article} />
        </div>
    }
}

export default Article;