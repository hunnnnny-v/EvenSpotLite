import { useCallback, useState } from "react";
import FilterBox from "../../components/FilterBox/FilterBox";
import SearchEventList from "../../components/SerachEventList/SearchEventList";
import Navigation from "../../components/Navigation/Navigation";
import "./FilterEvents.css";


// FilterEvents Component
// This component provides a filterable view of events based on user-selected month and year. It utilizes 
// `FilterBox` to capture filter criteria and `SearchEventList` to display events that match these filters. 
// `filters` state tracks the selected month and year, and the `getFilters` function (wrapped in `useCallback` 
// for optimization) updates the `filters` state when changes are made. The `Navigation` component is rendered 
// at the top, and the main layout is styled with the "find-events-wrapper" class for layout consistency.

const FilterEvents = () => {
  const [filters, setFilters] = useState({
    selectedMonth: null,
    selectedYear: null,
  });
  const getFilters = useCallback((selectedMonth, selectedYear) => {
    setFilters({ selectedMonth, selectedYear });
  }, []);

  return (
    <div>
      <Navigation />
      <div className="find-events-wrapper">
        <FilterBox getFilters={getFilters} />
        <SearchEventList filters={filters} />
      </div>
    </div>
  );
  // };
};
export default FilterEvents;
