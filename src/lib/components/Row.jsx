import Cell from './Cell';
import React from "react";

const Row = ({columns, styleName, setOrder, type, cell, order}) => {

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