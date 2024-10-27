import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { eventList } from "../../utils/EventDatabase";
import Navigation from "../../components/Navigation/Navigation";
import { MdCalendarMonth } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import "./EventDetails.css";


// EventDetails Component
// This component displays detailed information about a specific event, using the `id` parameter from the URL to find 
// the correct event in the `eventList` array. It includes a fade-in/fade-out effect on mount and unmount using 
// a CSS class (`fadeClass`) controlled by `useEffect`. The `Navigation` component is displayed at the top, 
// and details such as the event's image, name, date, location, and description are shown using icons from `react-icons` 
// for visual enhancement. Styling for this component is handled in the "EventDetails.css" file.

const EventDetails = () => {
  const { id } = useParams();
  const numId = Number(id);
  const [fadeClass, setFadeClass] = useState("fadeIn");

  const filteredEvent = eventList.find(
    (eventDetail) => eventDetail.id === numId
  );

  useEffect(() => {
    setFadeClass("fadeIn");
    return () => setFadeClass("fadeOut");
  }, []);

  return (
    <div className={`event-details-container ${fadeClass}`}>
      <Navigation />
      <div className="event-card">
        <img src={filteredEvent.img} alt="Event" className="event-img" />
        <div className="event-details-content">
          <h3>Event Name : {filteredEvent.heading}</h3>
          <div className="small-details">
            <p className="date">
              <MdCalendarMonth className="icon" />
              <span>{filteredEvent.date.month}</span>
              <span>{filteredEvent.date.year}</span>
            </p>
            <p className="location">
              <IoLocationSharp className="icon" />
              {filteredEvent.location}
            </p>
          </div>
          <p className="description">
            <span className="description-heading">Event Description: </span>
            <span className="description-heading-para">
              {filteredEvent.description}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
