
import { RouterProvider, createBrowserRouter} from "react-router-dom"
import HomePage from "./pages/HomePage";
import EventsPage, { loader as eventsLoader} from "./pages/EventsPage";
import NewEventPage from "./pages/NewEventPage";
import EventDetailPage, { loader as eventDetailLoader, action as deleteEventAction} from "./pages/EventDetailPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/Root";
import EventRootLayout from "./pages/EventRoot";
import ErrorPage from "./pages/ErrorPage";
import {action as maniulatAction} from "./components/EventForm"
import NewsletterPage, {action as newsletterAction} from "./pages/Newsletter";
import AuthenticationPage, {action as authAction} from "./pages/Authentications";
import { action as logoutAction } from "./pages/Logout"
import { checkAuthLoader, tokenLoader } from "./util/auth";
// import { AnimatePresence } from "framer-motion";
import Animated from "./Animated";


function App() {

  const router = createBrowserRouter([
    { 
      path: "/", 
      element: <RootLayout />,
      id: "root",
      loader: tokenLoader,
      errorElement: <ErrorPage />, 
    
    children: [

      {index: true, element: <HomePage />},
      {
        path: "auth",
        element: <AuthenticationPage />,
        action: authAction
      },
      {
        path: "events", 
        element: <EventRootLayout />, 
        children: [

          {
            path: ":eventId",
            id: "event_detail",
            loader: eventDetailLoader,
            children: [
              {index: true, element: <EventDetailPage />, action: deleteEventAction},
              {path: "edit", element: <EditEventPage />, action: maniulatAction, loader: checkAuthLoader}
            ]
          },
        {
          index: true, 
          element: <EventsPage />, 
          loader: eventsLoader},
        {
          path: "new", 
          element: <NewEventPage />,
          action: maniulatAction,
          loader: checkAuthLoader 
        },
      ]},
      {path: "newsletter", element: <NewsletterPage />, action: newsletterAction},
      {path: "logout", action: logoutAction}
    ]}


  ])


  return (

      <RouterProvider router={router}>
        <Animated />
      </RouterProvider>
   
  )
}

export default App;