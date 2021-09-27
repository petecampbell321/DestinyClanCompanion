import {EventDate} from "./util/EventDate";

export interface EventProps {
    id?: number,
    title: string,
    activity: string,
    attendees: number,
    maxPlayers: number
}