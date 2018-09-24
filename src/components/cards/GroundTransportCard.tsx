import * as React from 'react';

import { ICommuteStation, IGroundTransport } from '../../shared/Types';

import { Card } from '../basic/Card';
import { GroundStationInfo } from '../infos/GroundStationInfo';
import { GroundTransportInfo } from '../infos/GroundTransportInfo';

interface IProps {
    transport: IGroundTransport;
    from: ICommuteStation;
    to: ICommuteStation;
    note?: string;
}

export class GroundTransportCard extends React.Component<IProps> {
    public render() {
        return (
            <Card
                type='commute'
                note={this.props.note}
            >
                <GroundStationInfo {...this.props.from} />
                <GroundTransportInfo
                    {...this.props.transport}
                />
                <GroundStationInfo {...this.props.to} />
            </Card>
        );
    }
}