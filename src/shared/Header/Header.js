import React from 'react';
import './Header.scss';
import classnames from 'classnames';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    render() {
        return <header className={classnames("Header", { "is-collapsed": this.state.collapsed })}>
            <a className="Header-logo" href="/" title="En route homepage"><img src="/static/assets/images/logo.svg" /></a>
        </header>
    }
}

export default Header;