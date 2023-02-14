const Headers = ({type, children}) => {

  return(
    <>
      {type === 'thead' 
        ? <thead key={type} >{children}</thead> 
        : type === 'tbody' 
        ? <tbody key={type} >{children}</tbody> 
        : <tfoot key={type} >{children}</tfoot>
      }
    </>
  );
};

export default Headers;