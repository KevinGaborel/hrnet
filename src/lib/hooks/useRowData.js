import React, { useState, useMemo } from "react";

const useRowData = (data) => {
  const [order, setOrder] = useState({
    sort: undefined,
    col: undefined,
  });

  const rowData = useMemo(() => {
    const regexDate = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

    if (data.length < 1){
      return data;
    };


    const firstValue = data[0][order.col];
    
    if (order.sort === "asc"){
      if (typeof firstValue === "number" || (parseInt(firstValue) && !regexDate.test(firstValue))){
        return data.sort((a,b) => a[order.col] - b[order.col]);
      } 
      else if (regexDate.test(firstValue)){
        return data.sort((a,b) => {
          if (Date.parse(a[order.col]) < Date.parse(b[order.col])){
            return -1;
          }else if (Date.parse(a[order.col]) > Date.parse(b[order.col]) ){
            return 1;
          }
        })
      } 
      else{
        return data.sort((a,b) => {
          if (a[order.col] < b[order.col]){
            return -1;
          }else{
            return 1;
          }
        })
      }
    }else if (order.sort === "desc"){
      return [...data].reverse();
    }
    else{
      return data;
    }
    

  }, [order, data]);

  return { rowData, order, setOrder };
};

export default useRowData;