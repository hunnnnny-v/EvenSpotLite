import EventList from "../pages/EventList/EventList";
import FilterEvents from "../pages/FilterEvents/FilterEvents";
import EventDetail from "../pages/EventDetails/EventDetails";
import MainPage from "../pages/MainPage/MainPage";

export const routes = [
  // Define routes for different pages
  { path: "/", element: <MainPage /> }, // Route for the main page
  { path: "/event-list", element: <EventList /> }, // Route for the event list page
  { path: "/find-events", element: <FilterEvents /> }, // Route for the event filter page
  { path: "/events/:id", element: <EventDetail /> }, // Route for individual event details
  {}, // Empty route (likely a placeholder or unused)
];