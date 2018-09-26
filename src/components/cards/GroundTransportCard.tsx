import * as React from 'react';

import { IGroundTransportInfo } from '../../shared/Interfaces';
import { Card } from '../basic/Card';
import { GroundStationInfo } from '../infos/GroundStationInfo';
import { GroundTransportInfo } from '../infos/GroundTransportInfo';

export class GroundTransportCard extends React.Component<IGroundTransportInfo> {
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
