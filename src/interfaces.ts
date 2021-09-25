import {EventDate} from "./util/EventDate";

export interface EventProps {
    id?: number,
    title: string,
    activity: string,
    date?: EventDate
    attendees: number,
    maxPlayers: number
}