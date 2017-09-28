/**
 * HeroPicker.js
 */
import React from 'react';
import HeroTile from './HeroTile';
import './HeroPicker.scss';
import classnames from 'classnames';

class HeroPicker extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            active: false,
        };
    }

    render() {
        return <div className={classnames("HeroPicker", { "is-active": this.state.active }, "HeroPicker-tile-" + this.props.activeArticle)}>
            {
                this.props.articles.map(
                    (article, key) => 
                        <HeroTile
                            changeArticle={this.props.changeArticle}
                            article={article}
                            articleIndex={key}
                            key={key} />
                )
            }
        </div>
    }
}

export default HeroPicker;