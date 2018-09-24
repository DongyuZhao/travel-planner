import * as React from 'react';

import { Card } from '../basic/Card';

import { IAircraft, ICommuteStation, IEventTime } from '../../shared/Types';
import { AircraftInfo } from '../infos/AircraftInfo';
import { AirportInfo } from '../infos/AirportInfo';
import { EventTimeInfo } from '../infos/EventTimeInfo';

interface IProps {
    aircraft: IAircraft;
    from: ICommuteStation;
    to: ICommuteStation;
    departureTime: IEventTime;
    arrivalTime: IEventTime;
    note?: string;
}

export class FlightInfoCard extends React.Component<IProps> {
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
