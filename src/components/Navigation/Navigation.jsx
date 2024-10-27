import { Link } from "react-router-dom";
import "./Navigation.css";


// Navigation Component
// This component renders a navigation bar with links to different routes in the application, 
// using `react-router-dom`'s `Link` component for navigation without page reloads. 
// It includes links to the "Home" and "Find Events" pages, each wrapped in an <li> tag for 
// list-based styling. A div with the class `nav-image` is also included, which can be styled 
// in the "Navigation.css" file to add an image or icon to the navigation bar.

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/find-events">Find Events</Link>
        </li>
        <div className="nav-image"></div>
      </ul>
    </nav>
  );
};

export default Navigation;
