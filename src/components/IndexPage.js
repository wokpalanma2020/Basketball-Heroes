// This component will include the full index page and will contain other components previously made

import React from 'react';
import AthletePreview from './AthletesPreview';
import athletes from '../data/athletes';

export default class IndexPage extends React.Component {
    render() {
        return (
            <div className="home">
                <div className="athletes-selector">
                    <div className="athletes-selector">
                        {athletes.map(athleteData => <AthletePreview key = {athleteData.id}{...athleteData}/>)}
                    </div>
                </div>
            </div>
        );
    }
}