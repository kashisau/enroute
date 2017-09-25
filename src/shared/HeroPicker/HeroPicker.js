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
            active: false
        };
    }

    render() {
        return <div className={classnames("HeroPicker", { "is-active": this.state.active })}>
            {this.props.articles.map(article => <HeroTile article={article} />)}
        </div>
    }
}

export default HeroPicker;