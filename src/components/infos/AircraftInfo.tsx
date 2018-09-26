import * as React from 'react';

import { IAircraft } from '../../shared/Interfaces';
import { FlightIcon } from '../icons/FlightIcon';

export class AircraftInfo extends React.Component<IAircraft> {
    public render() {
        return (
            <div className='flight'>
                <div className='row'>
                    <div className='airline'>{this.props.carrier}</div>
                    <div className='flight-number'>{this.props.no}</div>
                </div>
                <FlightIcon />
                <div className='aircraft'>{this.props.model}</div>
            </div>
        );
    }
}
