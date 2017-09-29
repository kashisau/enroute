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

        this.changeArticle = this.changeArticle.bind(this);
    }

    changeArticle(e) {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        e.nativeEvent.preventDefault();

        this.props.changeArticle(this.props.articleIndex);
        return false;
    }

    render() {
        return <div className={classnames("HeroTile", { "is-active": this.state.active })}><a
                href={`/article/${this.props.article.slug}`}
                title={`Read article '${this.props.article.title}'`}
                onMouseOver={() => this.setState({ active: true })}
                onMouseOut={() => this.setState({ active: false })}
                onClick={this.changeArticle}
                >{this.props.article.title}</a></div>
    }
}

export default HeroTile;