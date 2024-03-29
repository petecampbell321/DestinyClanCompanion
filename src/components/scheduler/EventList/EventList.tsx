import React, {Component} from "react";
import EventThumbnail from "../EventThumbnail/EventThumbnail";
import availableEventsData from "../../../util/available-events.json";
import signedUpEventsData from "../../../util/signed-up-events.json";
import "./eventList.sass";
import {EventProps} from "../../../interfaces";

interface EventListProps {
	type: string
}

interface EventListState {
	type: string
}

class EventList extends Component<EventListProps, EventListState> {

	constructor(props: EventListProps) {
		super(props);
	}

	getDataFromJson(jsonFile: EventProps[]) {
		return jsonFile.map((event) => {
			return (
				<EventThumbnail
					key={event.id}
					title={event.title}
					activity={event.activity}
					attendees={event.attendees}
					maxPlayers={event.maxPlayers}
				/>
			)
		})
	}

	getEventsData() {
		try {
			if (this.props.type === "available") {
				return this.getDataFromJson(availableEventsData);
			}
			if (this.props.type === "signed-up") {
				return this.getDataFromJson(signedUpEventsData);
			}
		} catch (err: any) {
			console.log(err)
		}
	}

	render() {
		return (
			<div className="events-list">
				<div className="events-sorting">Events sorting</div>

				<div>{this.getEventsData()}</div>

			</div>
		)
	}

}

export default EventList