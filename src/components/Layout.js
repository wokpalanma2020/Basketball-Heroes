// This layout component provides the application with a template consisting of the header, space for main
// content, and a footer

import React from 'react';
import { Link } from 'react-router';

export default class Layout extends React.Component {
    render() {
        return (
            <div className="app-container">
                <header>
                    <Link to="/">
                        <img className ="logo" src="/img/logo-basketball-heroes.jpg"/>
                    </Link>
                </header>
                <div className="app-content">{this.props.children}</div>
                <footer>
                    <p>
                        This is a demo app to showcase universal rendering and routing with <strong>React</strong> and <strong>express</strong>.
                    </p>
                </footer>
            </div>
        );
    }
}