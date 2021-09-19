import React, {Component} from "react";
import EventThumbnail from "../EventThumbnail/EventThumbnail";

import availableEventsData from "../../../util/available-events.json";
import signedUpEventsData from "../../../util/signed-up-events.json";

import "./eventList.sass";

class EventList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            type: this.props.type
        }
    }

    getDataFromJson(jsonFile) {
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
            if (this.state.type === "available") {
                return this.getDataFromJson(availableEventsData);
            }
            if (this.state.type === "signed-up") {
                return this.getDataFromJson(signedUpEventsData);
            }
        }
        catch(err) {
            console.log(err.message)
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