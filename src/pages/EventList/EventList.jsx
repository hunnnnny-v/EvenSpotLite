import EventCard from "../../components/EventCard/EventCard.jsx";
import { eventList } from "../../utils/EventDatabase.jsx";
import Navigation from "../../components/Navigation/Navigation.jsx";
import "./EventList.css";


// EventList Component
// This component displays a list of all available events using the `EventCard` component for each event. 
// It imports event data from `EventDatabase.jsx` and maps through the `eventList` array to render each event 
// card with details such as date, heading, location, and image. The `Navigation` component is included at 
// the top for consistent navigation. The main event list is wrapped in `event-list-wrapper` and `event-list` 
// divs for layout and styling. If no events are available, it shows a message saying "No events available".

const EventList = () => {
  const renderEventCards = () => {
    return eventList.map(({ id, date, heading, location, img }) => {
      return (
        <EventCard
          key={id}
          id={id}
          date={date}
          heading={heading}
          location={location}
          img={img}
        />
      );
    });
  };
  return (
    <div>
      <Navigation/>
      <div className="event-list-wrapper">
        <div className="event-list">
          {eventList.length > 0 ? (
            renderEventCards()
          ) : (
            <p>No events available</p>
          )}
        </div>
      </div>
    </div>
  );
};
export default EventList;
