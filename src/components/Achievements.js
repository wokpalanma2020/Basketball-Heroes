// UI component for the Acheivements icon to be presented next to the Athlete Player Card

import React from 'react';

// Map to understand the different types of Achievements for players
const typeMap = {
    'C': 'Championship',
    'ROTY': 'Rookie of the Year',
    'MVP': 'Most Valuable Player',
    'F-MVP': 'Finals Most Valuable Player',
    'AS-MVP': 'All-Star Most Valuable Player',
    'AS': 'All-Star Season'
};

export default class Achievements extends React.Component {
    render() {
        return (
            <li className="achievement">
                <span className={`symbol symbol-${this.props.type}`} title={typeMap[this.props.type]}> {this.props.type}</span>
                <span className="position">{this.props.position}</span>
                <span className="team">{this.props.team}</span>
                <span className="year">{this.props.year}</span>
                <span className="title">{this.props.title}</span>
            </li>
        )
    }
}