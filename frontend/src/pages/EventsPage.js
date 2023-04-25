import { Suspense } from 'react';
import EventsList from '../components/EventsList';
import { Await, defer, json, useLoaderData } from 'react-router-dom';

function EventsPage() {
    const {events} = useLoaderData()


    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

  return (
    <Suspense fallback={<p style={{textAlign: "center"}}>Loading...</p>}>
        <Await resolve={events}>
            {(loadedEvents) => <EventsList events={loadedEvents} />}
        </Await>
    </Suspense>
  );
}

export default EventsPage;

const loaderEvent = async () => {
    const response = await fetch("http://localhost:8080/events")
    if ( !response.ok ) {
        throw json({message: "Could not fech events"}, {status: 500})
    } else {
        const eventsData = await response.json()
        return eventsData.events
    }

}

export const loader = () => {
    return defer({
        events: loaderEvent()
    })
}