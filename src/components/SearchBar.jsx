import { useEffect, useState } from "react";

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
      console.log(data);
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