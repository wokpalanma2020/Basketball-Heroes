// The view component for the individual athletes 

import React from 'react';
import { Link } from 'react-router';
import NotFoundPage from './NotFoundPage';
import AthletesMenu from './AthletesMenu';
import Achievements from './Achievements';
import Flag from './Flag';
import athletes from '../data/athletes';

export default class AthletePage extends React.Component {
    render() {
        const id = this.props.params.id;
        const athlete = athletes.filter((athlete) => athlete.id === id)[0];
        if (!athlete) {
            return <NotFoundPage/>;
        }
        const headerStyle = { backgroundImage: `url(/img/${athlete.cover})` };
        return (
            <div className="athlete-full">
                <AthletesMenu athletes={athletes}/>
                <div className="athlete">
                    <header style={headerStyle}/>
                    <div className="picture-container">
                        <img src={`/img/${athlete.image}`}/>
                        <h2 className="name">{athlete.name}</h2>
                    </div>
                </div>
                <section className="description">
                    Proffessional basketball player from <strong><Flag code={athlete.country} showName="true"/></strong>,
                    born on {athlete.birthday} (Find out more on <a href={athlete.link} target="_blank">Wikipedia</a>).
                </section>
                <section className="achievements">
                    <p>Obtained over <strong>{athlete.awards.length} accolades including: </strong></p>
                    <ul>{
                        athlete.awards.map((awards,i) => <Achievements key={i} {...awards}/>)
                    }</ul>
                </section>
                <div className="navigateBack">
                <Link to="/"> Back to the index page</Link>
                </div>
            </div>
        );
    }
}