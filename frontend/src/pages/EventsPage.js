import { Fragment } from "react"
import { Link } from "react-router-dom"

const EventsPage = () => {

    const dummy = [
        {id: "p1", title: "Event 1"},
        {id: "p2", title: "Event 2"},
        {id: "p3", title: "Event 3"},
        {id: "p4", title: "Event 4"}
    ]
    return (
        <Fragment>
            <h1>EventsPage</h1>
            <ul>
                {dummy.map(item => <li key={item.id}><Link to={item.id}>{item.title}</Link></li>)}
            </ul>
        </Fragment>
    )
}


export default EventsPage