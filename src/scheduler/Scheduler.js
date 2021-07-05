import React from "react";

import EventThumbnail from "../components/scheduler/EventThumbnail/EventThumbnail";

import "./scheduler.sass";
import EventList from "../components/scheduler/EventList/EventList";

class Scheduler extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="scheduler-container">
                <div className="overview-panel">
                    <div className="stat-panel">Stat panel</div>
                    <div className="calendar">Calendar</div>
                </div>
                <div className="events-container">
                    <div className="available-events-container">
                        <EventList type="available" />
                    </div>
                    <div className="signed-up-events-container">
                        <EventList type="signed-up" />
                    </div>
                </div>
            </div>
        )
    }
}

export default Scheduler;