import * as React from 'react';

import { ICommuteStation } from '../../shared/Types';

export class AirportInfo extends React.Component<ICommuteStation> {
    public render() {
        return (
            <div className='row airport'>
                <div className='name'>
                    {this.props.name}
                </div>
                <div className='terminal'>
                    {this.props.sub}
                </div>
            </div>
        );
    }
}