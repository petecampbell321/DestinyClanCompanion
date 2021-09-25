import React from "react";
import "./scheduler.sass";
import EventList from "../components/scheduler/EventList/EventList";
import ErrorBoundary from "../util/ErrorBoundary";

class Scheduler extends React.Component{

    render() {
        return(
            <div className="scheduler-container">
                <div className="overview-panel">
                    <div className="stat-panel">Stat panel</div>
                    <div className="calendar">Calendar</div>
                </div>
                <div className="events-container">
                    <div className="available-events-container">
                        <ErrorBoundary>
                            <EventList type="available" />
                        </ErrorBoundary>
                    </div>
                    <div className="signed-up-events-container">
                        <ErrorBoundary>
                            <EventList type="signed-up" />
                        </ErrorBoundary>
                    </div>
                </div>
            </div>
        )
    }
}

export default Scheduler;