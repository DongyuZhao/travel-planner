import * as React from 'react';

interface IProps {
    type?: 'commute' | 'place';
}

export class TimelineIcon extends React.Component<IProps> {
    public render() {
        return (
            <div className={this.className}>
                {this.props.children}
            </div>
        );
    }

    private get className() {
        if (this.props.type) {
            return `timeline-item-icon ${this.props.type}`;
        } else {
            return 'timeline-item-icon';
        }
    }
}