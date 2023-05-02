import { NavLink, useRouteLoaderData, useSubmit } from 'react-router-dom';
import classes from './MainNavigation.module.css';
import NewsletterSignup from './NewsletterSignup';

function MainNavigation() {
  const isAuth = useRouteLoaderData("root")
  const submit = useSubmit()
  const logoutHandler = () => {
    const proceed = window.confirm("Are you sure you want to logout ?")
    if (proceed) {
      submit(null, {method: "post", action: "logout"})
    }
  }
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={ ({isActive}) => isActive ? classes.active : undefined} to='' end>Home</NavLink>
          </li>
          <li>
            <NavLink className={ ({isActive}) => isActive ? classes.active : undefined} to='/events'>Events</NavLink>
          </li>
          <li>
            <NavLink className={ ({isActive}) => isActive ? classes.active : undefined} to='/newsletter'>Newsletter</NavLink>
          </li>
          {!isAuth && <li>
            <NavLink className={ ({isActive}) => isActive ? classes.active : undefined} to='/auth?mode=login'>Authentication</NavLink>
          </li>}
          {isAuth && 
          <button onClick={logoutHandler}>Logout</button>
        }
        </ul>
      </nav>
      <NewsletterSignup />
    </header>
  );
}

export default MainNavigation;
