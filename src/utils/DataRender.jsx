export const generateDataOptions = (dataArray) => {
  // This function takes an array of data as input (dataArray)

  return dataArray.map((data, index) => {
    // It iterates over each item (data) in the array using map()
    // The index argument keeps track of the current item's position

    return (
      <option key={index} value={data}>
        {/* Returns an option element for each data item */}
        {data} {/* The option text is set to the current data item */}
      </option>
    );
  });
};

export const months = [
  // This array defines a list of month names
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  // "Apple", // Commented out - likely an unintended element
  "December",
];

export const years = [
  // This array defines a list of years
  2021,
  2022,
  2023,
  2024,
];