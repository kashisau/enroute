import React from 'react';
import './Header.scss';
import MenuNavLink from './MenuNavLink';
import classnames from 'classnames';

const pages = {
    "home" : 0,
    "blog" : 1,
    "about" : 2,
    "kashi" : 3,
    "contact": 4
}

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            collapsed: false
        };
    }

    render() {
        const activePage = this.props.activePage || -1;
        return <header className={classnames("Header", { "is-collapsed": this.state.collapsed })}>
            <a className="Header-logo" href="/" title="En route homepage"><img src="/static/assets/images/logo.svg" /></a>
            <nav className="Header-menu">
                <MenuNavLink active={activePage === pages["about"]} href="about" title="About this blog">About</MenuNavLink>
                <MenuNavLink active={activePage === pages["kashi"]} href="kashi" title="About Kashi">Kashi</MenuNavLink>
                <MenuNavLink active={activePage === pages["contact"]} href="contact" title="Contact Kashi">Contact</MenuNavLink>
            </nav>
        </header>
    }
}

export default Header;