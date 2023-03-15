import React from "react";

/**
 * It is a function that takes an object as a prop and returns a SearchBar
 * @param {object} props  object to SearchBar
 * @param {array} props.data table of object, table data
 * @param {object} props.data[0] object representing a user
 * @param {function} props.setNewData function that allows you to modify the state, which will keep the data corresponding to the search
 * @return {JSX.Element} SearchBar
 */

const SearchBar = ({data, setNewData}) => {

  const handleChange = (e) => {
    const entryUser = e.target.value.toLowerCase();
    let newData;

    if (entryUser.length >= 2){
      //si la valeur entrée par l'utilisateur est supérieur à 2
      //on lance la recherche
      newData = [];
      
      for (let row of data){
        for(let key in row){
          let result;
          if (typeof row[key] === 'string'){
            result = row[key].toLowerCase().includes(entryUser) && row;
          } else{
            result = row[key].toString().includes(entryUser) && row;
          }
          if (result){
            newData.push(result)
          }
        }
      }
      setNewData(newData);
    } else{
      setNewData(data);
    }

  
  };

  return (
    <div>
      <label htmlFor="searchBar">Search: </label>
      <input type="search" name="searchBar" id="searchBar" placeholder="at least 3 characters" onChange={(e) => handleChange(e)} />
    </div>
  );

};

export default SearchBar;