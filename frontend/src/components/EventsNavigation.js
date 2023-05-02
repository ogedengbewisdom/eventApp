import { NavLink, useRouteLoaderData } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  const isAuth = useRouteLoaderData("root")
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink to="" className={({isActive}) => isActive ? classes.active : undefined } end>All Events</NavLink>
          </li>
          {isAuth && <li>
            <NavLink to="new" className={({isActive}) => isActive ? classes.active : undefined }>New Event</NavLink>
          </li>}
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
