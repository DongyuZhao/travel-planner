import * as React from 'react';

import { IGroundTransport } from '../../shared/Interfaces';
import { ServiceTimeInfo } from './ServiceTimeInfo';

export class GroundTransportInfo extends React.Component<IGroundTransport> {
    public render() {
        return (
            <div className='row ground-transport-info'>
                <div>
                    <div className='row'>
                        <div className='carrier'>{this.props.carrier}</div>
                        <div className='number'>{this.props.no}</div>
                    </div>
                    <div className='time-consume'>{this.props.time}</div>
                    <ServiceTimeInfo
                        {...this.props.serviceTime}
                    />
                </div>
            </div>
        );
    }
}
