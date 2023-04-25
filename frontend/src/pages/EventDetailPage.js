import { Await, defer, json, redirect, useRouteLoaderData } from "react-router-dom"
import EventItem from "../components/EventItem"
import { Fragment, Suspense } from "react"
import EventsList from "../components/EventsList"

const EventDetailPage = () => {
    const {event, events} = useRouteLoaderData("event_detail")
   
    return (
        <Fragment>
            <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>

            <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
                <Await resolve={events}>
                    {(loadedEvent) => <EventsList events={loadedEvent} />}
                </Await>
            </Suspense>
        </Fragment>
    )
}

export default EventDetailPage

const loaderEvent = async (id) => {
    const response = await fetch(`http://localhost:8080/events/${id}`)
    if (!response.ok) {
        throw json({message: "Could not fetch this particular event"}, {status: 500})
    } else {
        const resData = await response.json()
        return resData.event
    }
}

const loaderEvents = async() => {
    const response = await fetch(`http://localhost:8080/events`)
    if (!response.ok) {
        throw json({message: "Could not fetch events"}, {status: 500})
    } else {
        const resData = await response.json()
        return resData.events
    }
}
export const loader = async ({request, params}) => {
    const id = params.eventId
return defer({
    event:  loaderEvent(id),
    events: await loaderEvents()
})
}

export const action = async ({params, request}) => {
    const id = params.eventId
    const response = await fetch(`http://localhost:8080/events/${id}`, {
        method: request.method
    })
    if (!response.ok) {
        throw json({message: "Could not delete this event"}, {status: 500})
    }
    return redirect("/events")
}
