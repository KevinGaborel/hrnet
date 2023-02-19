import Row from './Row';

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