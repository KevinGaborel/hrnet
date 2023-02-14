import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort, faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons'

const Cell = ({type, children, setOrder}) => {

  const [ sort, setSort ] = useState();

  const handleCell = () => {
    console.log(sort, children);
    if (sort === undefined){
      setSort('asc');
      setOrder('asc');
    } else if (sort === 'asc'){
      setOrder('desc');
      setSort('desc');
    } else{
      setOrder('asc');
      setSort('asc');
    }
  }
  
  return(
    <>
      {type === 'th' 
        ? <th onClick={() => handleCell()} >
            {children} 
            <FontAwesomeIcon icon={sort === undefined ? faSort : sort === 'asc' ? faSortUp : faSortDown} />
          </th> 
        : <td>{children}</td>}
    </>
  );
};

export default Cell;