import React, { useState, useMemo } from "react";

/**
 * It is a function that takes an object as a prop and returns useRowData
 * @param {object} props  object to useRowData
 * @param {array} props.data table of object, table data
 * @param {object} props.data[0] object representing a user
 * 
 * @return {object} useRowData
 * @return {object.rowData} table of object representing users sorted
 * @return {object.order} object representing the sort type (ascending or descending) and the sorted column
 * @return {object.setOrder} function that allows you to modify the value of the state order
 */

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