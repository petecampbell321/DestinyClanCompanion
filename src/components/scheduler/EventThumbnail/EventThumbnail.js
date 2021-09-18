import React, { Component } from "react";
import {EventDate} from "../../../util/EventDate";

import "./eventThumbnail.sass";

class EventThumbnail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            activity: this.props.activity,
            date: new EventDate(),
            attendees: this.props.attendees,
            maxPlayers: this.props.maxPlayers
        };
    }

    attendeesStylesClass() {
        if (this.state.attendees === this.state.maxPlayers) {
            return "attendees full"
        }
        return "attendees notFull"
    }

    render() {
        return (
            <div className="event-container">
                <div className="title">{this.state.title}</div>
                <div className="activity">{this.state.activity}</div>
                <br/>
                <div className="date-attendees">
                    <div className="datetime">{this.state.date.toDateString()} - {this.state.date.toTimeString()}</div>
                    <div className={this.attendeesStylesClass()}>{this.state.attendees}/{this.state.maxPlayers}</div>
                </div>
            </div>
        )
    }

}

export default EventThumbnail;