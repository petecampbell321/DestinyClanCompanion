import * as React from 'react';
import Scheduler from "../scheduler/Scheduler";
import "./app.sass";

class App extends React.Component {

	render() {
		return (
			<div className="app-container">
				<div className="scheduler">
					<Scheduler/>
				</div>
			</div>
		);
	};

}

export default App;