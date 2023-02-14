const Row = ({children, styleName}) => {
  
  return (
    <tr className={styleName} >{children}</tr>
  );
};

export default Row;