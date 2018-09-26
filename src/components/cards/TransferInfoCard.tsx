import * as React from 'react';

import { ITransferInfo } from '../../shared/Interfaces';
import { Card } from '../basic/Card';
import { GroundStationInfo } from '../infos/GroundStationInfo';
import { TransferTimeInfo } from '../infos/TransferTimeInfo';

export class TransferCard extends React.Component<ITransferInfo> {
    public render() {
        return (
            <Card
                type='commute'
                note={this.props.note}
            >
                <div className='row space-between transfer-info'>
                    <GroundStationInfo {...this.props.from} />
                    <TransferTimeInfo time={this.props.time} />
                    <GroundStationInfo {...this.props.to} />
                </div>
            </Card>
        );
    }
}
