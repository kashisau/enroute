/**
 * HeroTile.js
 */
import React from 'react';
import './HeroTile.scss';
import classnames from 'classnames';

class HeroTile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return <div className={classnames("HeroTile", { "is-active": this.state.active })}><a
                href={`#/article/${this.props.article.slug}`}
                title={`Read article '${this.props.article.title}'`}
                onMouseOver={() => this.setState({ active: true })}
                onMouseOut={() => this.setState({ active: false })}
                onClick={() => this.props.changeArticle(this.props.articleIndex)}
                >{this.props.article.title}</a></div>
    }
}

export default HeroTile;