// UI component used to place the players country flag in their bio

import React from 'react';

// flag data is pulled from this array and not an api because it is only a small data set needed
const data = {
    'us': {
        'name': 'United States',
        'icon': 'flag-us.png',
    },
    'au': {
        'name': 'Australia',
        'icon': 'flag-au.jpeg',
    }
};

// Class component that is responsible for displaying and passing the flag info to the view of app
export default class Flag extends React.Component {
    render() {
        const name = data[this.props.code].name;
        const icon = data[this.props.code].icon;
        return (
            <span className="flag">
                <img className="icon" title={name} src={`/img/${icon}`}/>
                {this.props.showName && <span className="name"> {name}</span>}
            </span>
        );
    }
}