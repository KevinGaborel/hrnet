import Row from './Row';
import React from "react";

/**
 * It is a function that takes an object as a prop and returns a Headers
 * @param {object} props object to Headers
 * @param {string} props.type string, represents the table Headers type (thead, tbody or tfoot)
 * @param {array} props.columns table of object, representing column heading titles and column-bound data
 * @param {object} props.columns[0] object that represents a column with its title and its data
 * @param {string} props.columns[0].title string, representing the title in the column heading
 * @param {string} props.columns[0].data string, represents the name of the key of the corresponding props.data object in order to fill the column there
 * @param {function} props.setOrder function that allows you to modify the value of the state order
 * @param {object} props.order object representing the sort type (ascending or descending) and the sorted column
 * @param {array} props.rowData table of object representing users sorted
 * @return {JSX.Element} Headers
 */

const Headers = ({type, columns, setOrder, order, rowData}) => {

  return(
    <>
      {type === 'thead' 
        ? <thead key={type} ><Row styleName={'title-row'} columns={columns} type={'th'} setOrder={setOrder} order={order} /></thead> 
        : type === 'tbody' 
        ? <tbody key={type} >   
          {rowData.map((cell, index) => 
            <Row key={`row ${index}`} columns={columns} type={'td'} cell={cell} />
        )}</tbody> 
        : <tfoot key={type} ></tfoot>
      }
    </>
  );
};

export default Headers;