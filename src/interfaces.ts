import {EventDate} from "./util/EventDate";

export interface EventProps {
    id?: number,
    title: string,
    activity: string,
    date?: Date
    attendees: number,
    maxPlayers: number
}