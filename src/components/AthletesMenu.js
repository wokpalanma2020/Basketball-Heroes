// This component is the menu that is displayed on top of the athletes page used to navigate to another athlete

import React from 'react';
import { Link } from 'react-router';

// Navbar that is created with links embedded that route user to other athletes' view pages
export default class AthletesMenu extends React.Component {
    render() {
        return (
            // Uses map method to iterate over all athletes and generate for each a link to their page
            <nav className="athletes-menu">
                {this.props.athletes.map(menuAthlete => {
                    return <Link key={menuAthlete.id} to={` /athlete/${menuAthlete.id}`} activeClassName="active">
                        {menuAthlete.name}
                    </Link>;
                })}
            </nav>
        );
    }
}