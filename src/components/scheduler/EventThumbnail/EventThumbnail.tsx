import React, { Component } from "react";
import {EventDate} from "../../../util/EventDate";
import "./eventThumbnail.sass";
import {EventProps} from "../../../interfaces";

interface EventThumbnailState {
    title: string,
    activity: string,
    date: EventDate,
    attendees: number,
    maxPlayers: number
}

class EventThumbnail extends Component<EventProps, EventThumbnailState> {

    constructor(props: EventProps) {
        super(props);

    }

    attendeesStylesClass() {
        if (this.state.attendees === this.state.maxPlayers) {
            return "attendees full"
        }
        return "attendees notFull"
    }

    render() {

        const { title, activity, date, attendees, maxPlayers } = this.props
        const dateString = date?.toDateString();
        const timeString = date?.toTimeString();

        // @ts-ignore
        return (
            <div className="event-container">
                <div className="title">{title}</div>
                <div className="activity">{activity}</div>
                <br/>
                <div className="date-attendees">
                    <div className="datetime">{dateString} - {timeString}</div>
                    <div className={this.attendeesStylesClass()}>{attendees}/{maxPlayers}</div>
                </div>
            </div>
        )
    }

}

export default EventThumbnail;