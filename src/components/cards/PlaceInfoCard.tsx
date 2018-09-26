import * as React from 'react';

import { IPlaceInfo } from '../../shared/Interfaces';

import { Card } from '../basic/Card';
import { ServiceTimeInfo } from '../infos/ServiceTimeInfo';

export class PlaceInfoCard extends React.Component<IPlaceInfo> {
    public render() {
        return (
            <Card
                type='place'
                note={this.props.note}
            >
                <div className='place-name'>{this.props.name}</div>
                <div className='place-type'>{this.props.type}</div>
                <div className='place-address'>{this.props.address}</div>
                <ServiceTimeInfo {...this.props.serviceTime} />
            </Card>
        );
    }
}
