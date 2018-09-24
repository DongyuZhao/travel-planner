import * as React from 'react';
import { IEventTime } from '../../shared/Types';

export class EventTimeInfo extends React.Component<IEventTime> {
    public render() {
        return (
            <div className='commute'>
                <div className='date'>
                    {this.props.date}
                </div>
                <div className='time'>
                    {this.props.time}
                </div>
            </div>
        );
    }
}
