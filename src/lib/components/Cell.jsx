import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'
import React from "react";

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