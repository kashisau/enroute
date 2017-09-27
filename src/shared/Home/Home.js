/**
 * Home.js
 *
 */
import React from 'react';
import ArticleHero from '../ArticleHero/ArticleHero';
import HeroPicker from '../HeroPicker/HeroPicker';
import classnames from 'classnames';
import './Home.scss';

class Home extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            active: false,
            activeArticle: 0,
            nextArticle: undefined,
            sliding: false
        };

        this.changeArticle = this.changeArticle.bind(this);
        this.initHeroTransition = this.initHeroTransition.bind(this);
    }

    /**
     * Switches to the article indicated.
     * @param {Number} index    The index of the article to switch to.
     */
    changeArticle(index) {
        if (this.state.activeArticle === index) return;

        this.setState({ activeArticle: index, sliding: true });
    }

    initHeroTransition(e) {
        if ( ! e.target.classList.contains("ArticleHero")) return;
        this.setState({ sliding: false });
    }

    render() {
        var articles = this.props.articles;
        return <div
            className={
                classnames(
                    "Home",
                    "Home-article-" + this.state.activeArticle,
                    { "is-sliding" : this.state.sliding }
                )
            }
            onTransitionEnd={this.initHeroTransition}
            ref={ homeContainer => this.homeContainer = homeContainer }>
            {articles.map((article, key) => <ArticleHero article={article} key={key} active={this.state.activeArticle === key} />)}
            <HeroPicker changeArticle={this.changeArticle} articles={articles} activeArticle={this.state.activeArticle} />
        </div>
    }
}

export default Home;