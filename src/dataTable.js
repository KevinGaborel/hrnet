import Headers from './components/headers';
import Row from './components/row';
import './templates/blueTemp.css';
import { useState, useEffect } from "react";


const DataTable = ({data, columns}) => {

  const [ rowData, setRowData ] = useState(data);
  const [ order, setOrder ] = useState({
    sort: undefined,
    col: undefined
  });

  useEffect(() => {
    console.log(order);

    if (order){
      if (order.sort === "asc"){
        setRowData(rowData.sort((a, b) => {
          return a[order.col] - b[order.col];
        }))
      } else{
        setRowData(rowData.sort((a, b) => {
          return b[order.col] - a[order.col];
        }))
      }
    }

    console.log(rowData);
  }, [order, rowData]);

  return (
    <>
    <Headers type={'thead'}>
      <Row styleName={'title-row'} columns={columns} type={'th'} setOrder={setOrder} order={order} ></Row>
    </Headers>

    <Headers type={'tbody'}>
      {rowData.map((cell, index) => 
        <Row key={`row ${index}`} columns={columns} type={'td'} cell={cell} ></Row>
      )}
    </Headers>
    </>
  )
}

export default DataTable;