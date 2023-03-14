import React from "react";

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