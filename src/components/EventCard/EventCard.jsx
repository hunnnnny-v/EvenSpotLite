// Importing the Link component from react-router-dom for navigation and the CSS file for styling
import { Link } from "react-router-dom";
import "./EventCard.css";

// Defining the EventCard component which receives props for each event's id, heading, date, location, and image.
// Prop destructuring is used to extract year and month from the date object, and eslint is disabled for prop-type warnings.
// eslint-disable-next-line react/prop-types
const EventCard = ({ id, heading, date, location, img }) => {
  // eslint-disable-next-line react/prop-types
  const { year, month } = date; // Destructuring year and month from the date prop

  return (
    // The card is wrapped in a Link to navigate to a specific event page when clicked
    <Link to={`/events/${id}`} className="card-link">
      <div className="card">
        <div className="card-img-wrapper">
          {/* Event image is displayed, with alt text as the event heading */}
          <img src={img} alt={heading} />
        </div>
        <div className="card-content">
          {/* Event heading */}
          <h3>{heading}</h3>
          {/* Event date formatted to display month and year */}
          <p>
            <span>{month}</span> <span>{year}</span>
          </p>
          {/* Event location */}
          <p>{location}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
