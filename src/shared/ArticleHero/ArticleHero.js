/**
 * ArticleHero.js
 *
 * (C) 2017 mobile.de GmbH
 *
 * @author <a href="mailto:pahund@team.mobile.de">Patrick Hund</a>
 * @since 09 Feb 2017
 */
import React from 'react';
import './ArticleHero.scss';
import classnames from 'classnames';

class ArticleHero extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return <div className={classnames("ArticleHero", { "is-active": this.state.active })}>
            <div className="ArticleHero-heading">
                <a
                    href={`/article/${this.props.article.slug}`}
                    title={`Read article '${this.props.article.title}'`}
                    onMouseOver={() => this.setState({ active: true })}
                    onMouseOut={() => this.setState({ active: false })}>
                    <h1>{this.props.article.title}</h1>
                </a>
            </div>
            <img className="ArticleHero-image" src={this.props.article.heroImage} />
        </div>
    }
}

export default ArticleHero;