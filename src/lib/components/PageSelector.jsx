import BtnPage from "./BtnPage";
import React from "react";

/**
 * It is a function that takes an object as a prop and returns a PageSelector
 * @param {object} props  object to PageSelector
 * @param {function} props.setCounter function that allows you to modify the value of the state counter
 * @param {object} props.counter object represents the number of pages, and the page currently viewed by the user
 * @param {array} props.counter.nbPage array that represents the number of pages available
 * @param {number} props.counter.actualPage number that represents which page the user is currently viewing
 * @return {JSX.Element} PageSelector
 */

const PageSelector = ({counter, setCounter}) => {
  
  return(
    <div>
      <BtnPage value={'Prev'} 
        styleName={counter.actualPage > 1 
          ? 'btn-page-alpha' 
          : 'btn-page-alpha btn-page-disabled'
        }  
        isDisabled={counter.actualPage === 1 && true} 
        setCounter={setCounter}
        counter={counter}
        increment={-1}
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
        setCounter={setCounter}
        counter={counter}
        increment={1}
      />
    </div>
  );
};

export default PageSelector;