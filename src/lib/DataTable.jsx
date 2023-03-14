import Headers from './components/Headers';
import './templates/purpleTemp.css';
import useRowData from './hooks/useRowData';
import SearchBar from './components/SearchBar';
import SelectNbEntries from './components/SelectNbEntries';
import PageSelector from './components/PageSelector';
import React, { useState, useEffect } from 'react';


const DataTable = ({data, columns}) => {

  const [ newData, setNewData ] = useState();
  const [ tableLength, setTableLength ] = useState(10);

  const {rowData, order, setOrder} = useRowData(newData ? newData : data);

  const [ dataView, setDataView ] = useState(rowData);
  const [ counter, setCounter ] = useState({
    nbPage: [1],
    actualPage: 1
  });
  
  useEffect(() => {
    if (rowData.length > tableLength){
      let nbPage = Math.ceil(rowData.length / tableLength);
      let result = [];

      for (let i = 1; i <= nbPage; i++) {
        result.push(i);
      }

      setDataView(rowData.slice((tableLength * counter.actualPage) - tableLength, tableLength * counter.actualPage));
      setCounter({...counter, nbPage: result})
    }else{
      setCounter({...counter, nbPage: [1]})
      setDataView(rowData);
    }


  }, [tableLength, rowData, counter.actualPage, order]);


  return (
    <div className='datable'>

      <div className='head-tab'>
        <SelectNbEntries setTableLength={setTableLength} setCounter={setCounter} counter={counter} ></SelectNbEntries>
        <SearchBar data={data} setNewData={setNewData} />
      </div>

      <table>
        {rowData.length > 0 
        ?
        <>
          <Headers type={'thead'} columns={columns} setOrder={setOrder} order={order} />
          <Headers type={'tbody'} rowData={dataView} columns={columns} />
        </>  
        :
        <>
          <Headers type={'thead'} columns={columns} setOrder={setOrder} order={order}></Headers>
          <tbody>
            <tr>
              <td colSpan={columns.length} className="table-empty" >No matching records found</td>
            </tr>
          </tbody>
        </>
      }
      </table>

      <div className='foot-tab'>
        <span>{`Showing ${(tableLength * counter.actualPage) - tableLength + 1} 
          to ${rowData.length < tableLength * counter.actualPage ? rowData.length : tableLength * counter.actualPage} 
          of ${rowData.length} entries`}
        </span>
        <PageSelector setCounter={setCounter} counter={counter} />
      </div>

    </div>
  )
}

export default DataTable;