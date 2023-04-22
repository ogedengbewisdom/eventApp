import EventsList from '../components/EventsList';
import { json, useLoaderData } from 'react-router-dom';

function EventsPage() {
    const data = useLoaderData()
    const events = data.events


    // if (data.isError) {
    //     return <p>{data.message}</p>
    // }

  return (
   <EventsList events={events} />
  );
}

export default EventsPage;

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events")
    if ( !response.ok ) {
        throw json({message: "Could not fech events"}, {status: 500})
    } else {
        return response
    }

}