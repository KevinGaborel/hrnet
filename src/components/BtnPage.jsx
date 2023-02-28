const BtnPage = ({value, setCounter, counter, styleName, isDisabled}) => {
  return(
    <button onClick={() => setCounter({...counter, actualPage: value})} className={styleName} disabled={isDisabled && true} >{value}</button>
  );
};

export default BtnPage;