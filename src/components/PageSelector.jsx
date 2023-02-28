import BtnPage from "./BtnPage";

const PageSelector = ({counter, setCounter}) => {
  
  return(
    <div>
      <BtnPage value={'Prev'} 
        styleName={counter.actualPage > 1 
          ? 'btn-page-alpha' 
          : 'btn-page-alpha btn-page-disabled'
        }  
        isDisabled={counter.actualPage === 1 && true} 
      />

      {counter.nbPage.map((value, index) => 
        <BtnPage key={`btn ${index}`} 
          value={index + 1} 
          setCounter={setCounter} 
          counter={counter} 
          styleName={index + 1 !== counter.actualPage 
            ? 'btn-page-num'
            : 'btn-page-num btn-page-active'
          } 
        />
      )}

      <BtnPage value={'Next'} 
        styleName={counter.actualPage !== counter.nbPage.length 
          ? 'btn-page-alpha' 
          : 'btn-page-alpha btn-page-disabled'
        } 
        isDisabled={counter.actualPage === counter.nbPage.length && true} 
      />
    </div>
  );
};

export default PageSelector;