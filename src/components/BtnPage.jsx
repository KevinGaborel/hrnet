const BtnPage = ({value, setCounter, counter, styleName, isDisabled, increment}) => {
  
  return(
    <button 
      onClick={() => setCounter({...counter, actualPage: typeof value === 'number' 
      ? value 
      : counter.actualPage + increment})} 

      className={styleName} 
      disabled={isDisabled && true}
    >
      {value}
    </button>
  );
};

export default BtnPage;