import React, {Component} from "react";
import "./eventThumbnail.sass";
import {EventProps} from "../../../interfaces";
import {EventDate} from "../../../util/EventDate";

class EventThumbnail extends Component<EventProps, EventProps> {
	private date: EventDate

	constructor(props: EventProps) {
		super(props);

		this.date = new EventDate(new Date())
	}

	attendeesStylesClass() {
		if (this.props.attendees === this.props.maxPlayers) {
			return "attendees full"
		}
		return "attendees notFull"
	}

	render() {

		const {title, activity, attendees, maxPlayers} = this.props

		return (
			<div className="event-container">
				<div className="title">{title}</div>
				<div className="activity">{activity}</div>
				<br/>
				<div className="date-attendees">
					<div className="datetime">{this.date.toDateString()} - {this.date.toTimeString()}</div>
					<div className={this.attendeesStylesClass()}>{attendees}/{maxPlayers}</div>
				</div>
			</div>
		)
	}

}

export default EventThumbnail;