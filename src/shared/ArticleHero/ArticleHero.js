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
            hovered: false,
            imageOffset: 0
        };
        this.componentDidMount = this.componentDidMount.bind(this);
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.calcImageOffset = this.calcImageOffset.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.calcImageOffset);
        if (this.image.complete) this.calcImageOffset();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.calcImageOffset);
    }

    calcImageOffset() {
        const windowWidth = window.innerWidth,
            windowHeight = window.innerHeight,
            imageSize = (this.image)? this.image.width : 2650,
            offset = (windowWidth - imageSize) / 2;
        this.setState({ imageOffset: offset });
    }

    render() {
        return <div className={classnames("ArticleHero", { "is-hovered": this.state.hovered }, { "is-active" : this.props.active })}>
            <div className="ArticleHero-heading">
                <a
                    href={`/article/${this.props.article.slug}`}
                    title={`Read article '${this.props.article.title}'`}
                    onMouseOver={() => this.setState({ hovered: true })}
                    onMouseOut={() => this.setState({ hovered: false })}>
                    <h1>{this.props.article.title}</h1>
                </a>
            </div>
            <img
                className="ArticleHero-image"
                onLoad={() => this.calcImageOffset()}
                src={this.props.article.heroImage}
                style={{ marginLeft: this.state.imageOffset }}
                ref={ img => this.image = img } />
        </div>
    }
}

export default ArticleHero;