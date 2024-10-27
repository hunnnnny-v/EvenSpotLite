import EventCard from "../EventCard/EventCard";
import { eventList } from '../../utils/EventDatabase';
import "./SearchEventList.css";
import { useState, useEffect } from "react";


// SearchEventList Component
// This component displays a list of event cards based on the user's selected filters, including month, year, and location. 
// It takes a `filters` prop, which contains the selected month, year, and location to filter events. The event data is 
// imported from `EventDatabase`, and each event card is rendered using the `EventCard` component. A loading state is used 
// to show a loading message while the filtering process is underway. Once filtered, the component either displays a grid 
// of event cards if matches are found or a "No events found" message if none match the selected filters.

// eslint-disable-next-line react/prop-types
const SearchEventList = ({ filters }) => {
    // eslint-disable-next-line react/prop-types
    const { selectedMonth, selectedYear, selectedLocation } = filters;
    const [filteredEvents, setFilteredEvents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const filterEvents = () => {
            setLoading(true);
            const events = eventList.filter((eventDetail) => {
                return (
                    eventDetail.date.year === selectedYear &&
                    eventDetail.date.month === selectedMonth &&
                    // eslint-disable-next-line react/prop-types
                    (selectedLocation ? eventDetail.location.toLowerCase().includes(selectedLocation.toLowerCase()) : true)
                );
            });
            setFilteredEvents(events);
            setLoading(false);
        };

        filterEvents();
    }, [selectedMonth, selectedYear, selectedLocation]);

    const renderEventCards = () => {
        return filteredEvents.map(({ id, date, heading, location, img }) => (
            <EventCard
                key={id}
                id={id}
                date={date}
                heading={heading}
                location={location}
                img={img}
            />
        ));
    };

    return (
        <div className="event-list-container">
            <div className="event-search">
                {loading ? (
                    <p>Loading events...</p>
                ) : (
                    filteredEvents.length > 0 ? (
                        <div className="event-cards-wrapper">{renderEventCards()}</div>
                    ) : (
                        <p>No events found for the selected date and location.</p>
                    )
                )}
            </div>
        </div>
    );
};

export default SearchEventList;
