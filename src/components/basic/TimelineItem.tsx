import * as React from 'react';

interface IProps {
    type?: 'commute' | 'place';
}

export class TimelineItem extends React.Component<IProps> {
    public render() {
        return (
            <div className={this.className}>
                <div className={this.contentClassName}>
                    {this.props.children}
                </div>
            </div>
        );
    }

    private get contentClassName() {
        if (this.props.type) {
            return `timeline-item-content ${this.props.type}`;
        } else {
            return 'timeline-item-content';
        }
    }

    private get className() {
        if (this.props.type) {
            return `timeline-item ${this.props.type}`;
        } else {
            return 'timeline-item';
        }
    }
}