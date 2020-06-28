// Component will be used in the index page to display the pictures and names of the athletes

import React from 'react';
import { Link } from 'react-router';

export default class AthletesPreview extends React.Component {
    render() {
        return (
            <Link to={`/athlete/${this.props.id}`}>
                <div className="athlete-preview">
                    <img src={`img/${this.props.image}`}/>
                    <h2 className="name">{this.props.name}</h2>
                    <span className="championship-count"> <img src="/img/trophy.jpeg"/> </span>
                </div>
            </Link>
        ); 
    }
}