import * as React from 'react';

import { Card } from '../basic/Card';

import { IFlightInfo } from '../../shared/Interfaces';
import { AircraftInfo } from '../infos/AircraftInfo';
import { AirportInfo } from '../infos/AirportInfo';
import { EventTimeInfo } from '../infos/EventTimeInfo';

export class FlightInfoCard extends React.Component<IFlightInfo> {
    public render() {
        return (
            <Card
                type='commute'
                note={this.props.note}
            >
                {this.renderTravelInfo()}
                <hr />
                {this.renderTravelTime()}
            </Card>
        );
    }

    private renderTravelInfo() {
        return (
            <div className='row space-between'>
                <AirportInfo {...this.props.from} />
                <AircraftInfo
                    {...this.props.aircraft}
                />
                <AirportInfo {...this.props.to} />
            </div>
        );
    }

    private renderTravelTime() {
        return (
            <div className='row space-between'>
                <EventTimeInfo
                    {...this.props.departureTime}
                />
                <EventTimeInfo
                    {...this.props.arrivalTime}
                />
            </div>
        );
    }
}
