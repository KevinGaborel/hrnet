import Headers from './components/Headers';
import './templates/purpleTemp.css';
import useRowData from './hooks/useRowData';


const DataTable = ({data, columns}) => {

  const {rowData, order, setOrder} = useRowData(data);

  return (
    <>
    <table>
      <Headers type={'thead'} columns={columns} setOrder={setOrder} order={order} />
      <Headers type={'tbody'} rowData={rowData} columns={columns} />
    </table>
    </>
  )
}

export default DataTable;