import Cell from './Cell';
import React from "react";

/**
 * It is a function that takes an object as a prop and returns a Row
 * @param {object} props object to Row
 * @param {string} props.type string, represents the table Cell type in the Row
 * @param {array} props.columns table of object, representing column heading titles and column-bound data
 * @param {object} props.columns[0] object that represents a column with its title and its data
 * @param {string} props.columns[0].title string, representing the title in the column heading
 * @param {string} props.columns[0].data string, represents the name of the key of the corresponding props.data object in order to fill the column there
 * @param {string} props.styleName string, represents the class name of the Cell
 * @param {function} props.setOrder function that allows you to modify the value of the state order
 * @param {object} props.cell object representing user
 * @param {object} props.order object representing the sort type (ascending or descending) and the sorted column
 * @return {JSX.Element} Row
 */

const Row = ({type, columns, styleName, setOrder, cell, order}) => {

  return (
    <tr className={styleName}>
      {columns.map((col) => 
        <Cell key={col.title} type={type} setOrder={setOrder} order={order} data={col.data} >
          {cell ? cell[col.data] : col.title}
        </Cell>)}
    </tr>


  );
};

export default Row;