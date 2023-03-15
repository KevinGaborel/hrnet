import React from "react";

/**
 * It is a function that takes an object as a prop and returns a SelectNbEntries
 * @param {object} props  object to SelectNbEntries
 * @param {function} props.setTableLength function that allows you to modify the state, which will keep the number of rows in the table by pages
 * @param {function} props.setCounter function that allows you to modify the value of the state counter
 * @param {object} props.counter object represents the number of pages, and the page currently viewed by the user
 * @param {array} props.counter.nbPage array that represents the number of pages available
 * @param {number} props.counter.actualPage number that represents which page the user is currently viewing
 * @return {JSX.Element} SelectNbEntries
 */

const SelectNbEntries = ({setTableLength, setCounter, counter}) => {

  const handleChange = (e) => {
    setTableLength(e.target.value);
    setCounter({...counter, actualPage: 1})
  };
  
  return(
    <label>
      {'Show '}
      <select onChange={(e) => handleChange(e)}>
        <option value="10">10</option>
        <option value="25">25</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
      {' entries'}
    </label>
  );
};

export default SelectNbEntries;