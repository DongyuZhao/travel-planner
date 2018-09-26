import * as React from 'react';

import { IServiceTime } from '../../shared/Interfaces';

export class ServiceTimeInfo extends React.Component<IServiceTime> {
    public render() {
        return (
            <div className='row service-time'>
                <div className='service-start'>{this.props.start ? this.props.start : '*'}</div>
                {'~'}
                <div className='service-end'>{this.props.end ? this.props.end : '*'}</div>
                <div className='service-time-appendix'>{this.props.appendix}</div>
            </div>
        );
    }
}
