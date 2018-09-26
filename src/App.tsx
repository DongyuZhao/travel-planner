import * as React from 'react';
import './App.css';

import logo from './logo.svg';

import { TimelineFactory } from './components/factories/TimelineFactory';

class App extends React.Component {
    public render() {
        let json = require('./data/sample.json');
        return (
            <div className='App'>
                <header className='App-header'>
                    <img src={logo} className='App-logo' alt='logo' />
                    <h1 className='App-title'>Welcome to React</h1>
                </header>
                <p className='App-intro'>
                    To get started, edit <code>src/App.tsx</code> and save to reload.
                </p>
                <div
                    style={{
                        display: 'table',
                        margin: '0 auto',
                    }}
                >
                    {TimelineFactory.createTimeline(json as any)}
                </div>
            </div>
        );
    }
}

export default App;
