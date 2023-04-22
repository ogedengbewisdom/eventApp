import { json, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"

const EventDetailPage = () => {
    const data = useRouteLoaderData("event_detail")
    const event = data.event
    return (<EventItem event={event} />)
}

export default EventDetailPage

export const loader = async ({request, params}) => {
    const id = params.eventId
    const response = await fetch(`http://localhost:8080/events/${id}`)
    if (!response.ok) {
        throw json({message: "Could not fetch this particular event"}, {status: 500})
    } else {
        return response
    }
}