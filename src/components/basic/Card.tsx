import * as React from 'react';

interface IProps {
    type?: 'commute' | 'place';
    note?: string;
}

export class Card extends React.Component<IProps> {
    public render() {
        return (
            <div
                className={this.className}
            >
                {this.props.children}
                {this.renderNote()}
            </div>
        );
    }

    private renderNote() {
        if (this.props.note) {
            return [
                <hr className='card-note' key='hr' />,
                <div className='card-note row' key='note'>
                    <svg className='svg-icon icon' xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24'><path d='M0 0h24v24H0z' fill='none' /><path d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z' /></svg>
                    {this.props.note}
                </div>
            ];
        }
        return undefined;
    }

    private get className() {
        if (this.props.type) {
            return `card ${this.props.type}`;
        } else {
            return 'card';
        }
    }
}
