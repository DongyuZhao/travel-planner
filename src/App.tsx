import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { TimelineIcon } from './components/basic/TimelineIcon';
import { TimelineItem } from './components/basic/TimelineItem';
import { TimelineSection } from './components/basic/TimelineSection';
import { FlightInfoCard } from './components/cards/FlightInfoCard';
import { GroundTransportCard } from './components/cards/GroundTransportCard';
import { PlaceInfoCard } from './components/cards/PlaceInfoCard';
import { TransferCard } from './components/cards/TransferInfoCard';
import { CameraIcon } from './components/icons/CameraIcon';
import { FlightIcon } from './components/icons/FlightIcon';
import { TrainIcon } from './components/icons/TrainIcon';
import { TransferIcon } from './components/icons/TransferIcon';


class App extends React.Component {
    public render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div
                    style={{
                        display: 'table',
                        margin: '0 auto',
                    }}
                >
                    <TimelineSection type='commute'>
                        <TimelineItem type='commute'>
                            <TimelineIcon type='commute'>
                                <FlightIcon />
                            </TimelineIcon>
                            <FlightInfoCard
                                aircraft={{
                                    carrier: 'SQ',
                                    model: 'B-77W',
                                    no: 807,
                                    type: 'Air',
                                }}
                                from={{
                                    name: 'PVG',
                                    sub: 'T2',
                                    type: 'Air',
                                }}
                                to={{
                                    name: 'SIN',
                                    sub: 'T3',
                                    type: 'Air',
                                }}
                                departureTime={{
                                    date: '2018-09-30',
                                    time: '23:50'
                                }}
                                arrivalTime={{
                                    date: '2018-10-01',
                                    time: '06:30'
                                }}
                            />
                        </TimelineItem>
                    </TimelineSection>
                    <TimelineSection type='commute'>
                        <TimelineItem type='commute'>
                            <TimelineIcon type='commute'>
                                <TransferIcon />
                            </TimelineIcon>
                            <TransferCard
                                from={{
                                    name: 'SIN',
                                    sub: 'T3',
                                    type: 'Air',
                                }}
                                to={{
                                    name: 'SIN',
                                    sub: 'T3',
                                    type: 'Air',
                                }}
                                time='2:30'
                            />
                        </TimelineItem>
                    </TimelineSection>
                    <TimelineSection type='commute'>
                        <TimelineItem type='commute'>
                            <TimelineIcon type='commute'>
                                <TrainIcon />
                            </TimelineIcon>
                            <GroundTransportCard
                                transport={{
                                    carrier: 'PTV',
                                    no: 57,
                                    serviceTime: {
                                        appendix: '',
                                        end: '22:30',
                                        start: '5:30'
                                    },
                                    time: '30min',
                                    type: 'Tram',
                                }}
                                from={{
                                    name: 'Southern Cross',
                                    sub: 'South',
                                    type: 'Tram',
                                }}
                                to={{
                                    name: 'Elizabeth St.',
                                    sub: 'South',
                                    type: 'Tram',
                                }}
                            />
                        </TimelineItem>
                    </TimelineSection>
                    <TimelineSection type='place'>
                        <TimelineItem type='place'>
                            <TimelineIcon type='place'>
                                <CameraIcon />
                            </TimelineIcon>
                            <PlaceInfoCard
                                name='University of Melbourne'
                                type='Historical'
                                address='Carlton, 3051'
                                serviceTime={{
                                    appendix: 'Close every weekend.',
                                    end: '22:30',
                                    start: '5:30'
                                }}
                                note='Bring your card'
                            />
                        </TimelineItem>
                    </TimelineSection>
                </div>
            </div>
        );
    }
}

export default App;
