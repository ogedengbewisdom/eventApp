import { Fragment } from "react"
import EventsNavigation from "../components/EventsNavigation"
import { Outlet } from "react-router-dom"


const EventRootLayout = () => {
    return (
        <Fragment>
            <EventsNavigation />
            <main>
               <Outlet />
            </main>
        </Fragment>
    )
}


export default EventRootLayout