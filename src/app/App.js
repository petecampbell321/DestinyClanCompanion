import React from 'react';

class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.state;
        this.dispatch = props.dispatch;
    }

    render() {
        return (
            <div>

            </div>
        );
    };

}

export default App;