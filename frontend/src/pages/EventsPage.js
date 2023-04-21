import EventsList from '../components/EventsList';
import { useLoaderData } from 'react-router-dom';

function EventsPage() {
    const events = useLoaderData()

  return (
   <EventsList events={events} />
  );
}

export default EventsPage;

export const loader = async () => {
    const response = await fetch("http://localhost:8080/events")
    if ( !response.ok ) {
        throw new Error("Error 404")
    } else {
        const resData = await response.json()
        return resData.events
    }

}