import React from 'react';
import './MenuNavLink.scss';
import classnames from 'classnames';

class MenuNavLink extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            active: false
        };
    }

    render() {
        return <a
            className={classnames({"is-active": this.props.active || this.state.active})}
            onMouseOver={() => this.setState({ active: true })}
            onMouseOut={() => this.setState({ active: false })}
            href={this.props.href}
            title={this.props.title}>{this.props.children}</a>
    }
}

export default MenuNavLink;