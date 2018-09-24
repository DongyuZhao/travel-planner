import * as React from 'react';
import { ICommuteStation } from '../../shared/Types';

export class GroundStationInfo extends React.Component<ICommuteStation> {
    public render() {
        return (
            <div className='row ground-station'>
                <div className='name'>{this.props.name}</div>
                <div className='platform'>{this.props.sub}</div>
            </div>
        );
    }
}
