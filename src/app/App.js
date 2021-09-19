import React from 'react';

import Scheduler from "../scheduler/Scheduler";

import "./app.sass";

class App extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="app-container">
                <div className="scheduler">
                    <Scheduler />
                </div>
            </div>
        );
    };

}

export default App;