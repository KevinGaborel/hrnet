import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import React from "react";

/**
 * It is a function that takes an object as a prop and returns a Cell
 * @param {object} props object to Cell
 * @param {string} props.type string, represents the table cell type
 * @param {React.ReactNode} props.children represents the text to display in the component
 * @param {function} props.setOrder function that allows you to modify the value of the state order
 * @param {string} props.data string, it is the name of the key which corresponds to the data of the column
 * @param {object} props.order object representing the sort type (ascending or descending) and the sorted column
 * @return {JSX.Element} Cell
 */

const Cell = ({type, children, setOrder, data, order}) => {

  const handleCell = () => {
    if (order.sort === 'asc' && order.col === data){
      setOrder({sort: 'desc', col: data});
    } else{
      setOrder({sort:'asc', col: data});
    }
  }
  
  return(
    <>
      {type === 'th' 
        ? <th onClick={() => handleCell()} >
            {children} 
            <FontAwesomeIcon icon={order.sort === undefined 
              ? faSort 
              : data === order.col && order.sort === 'asc' 
              ? faSortUp : data === order.col && order.sort === 'desc' 
              ? faSortDown 
              : faSort} />
          </th> 
        : <td>{children}</td>}
    </>
  );
};

export default Cell;