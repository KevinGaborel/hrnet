import Headers from './components/headers';
import Row from './components/row';
import Cell from './components/cell';
import './templates/blueTemp.css';
import { useState, useEffect } from "react";


const DataTable = ({data, columns}) => {
  console.log("les datas:", data);
  console.log("les colonnes", columns);
  const [ rowData, setRowData ] = useState(data);
  const [ order, setOrder ] = useState();

  useEffect(() => {
    console.log(order);
  }, [order]);

  console.log(rowData);

  //TODOO: faire en sorte que Row contienne les Cell directement, sans passer pas children  //
  return (
    <>
    <Headers type={'thead'}>
      <Row styleName={'title-row'}  >
        {columns.map((col) => <Cell key={col.title} type={'th'} setOrder={setOrder} >{col.title}</Cell>)}
      </Row>
    </Headers>

    <Headers type={'tbody'}>
      {data.map((cell, index) => 
        <Row key={`row ${index}`} >
          {columns.map((col) => <Cell key={col.title} type={'td'} >{cell[col.data]}</Cell>)}
        </Row>
      )}
    </Headers>
    </>
  )
}

export default DataTable;