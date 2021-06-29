import React, { Component } from "react";

import "./eventThumbnail.sass";

class EventThumbnail extends Component {

    render() {
        return (
            <div className="event-container">
                <h2>User Input Event Title</h2>
                <p>Date</p>
                <p>Time</p>
            </div>
        )
    }

}

export default EventThumbnail;