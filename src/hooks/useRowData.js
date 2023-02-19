import { useState, useMemo } from "react";

const useRowData = (data) => {
  const [order, setOrder] = useState({
    sort: undefined,
    col: undefined,
  });

  const rowData = useMemo(() => {
    const regexDate = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;

    data.sort((a, b) => {
    if (order.sort === "asc"){
      if (typeof a[order.col] === "number" && typeof b[order.col] === "number"){
        return a[order.col] - b[order.col];
      } else if (regexDate.test(a[order.col])){
        if (Date.parse(a[order.col]) < Date.parse(b[order.col])){
          return -1;
        }else if (Date.parse(a[order.col]) > Date.parse(b[order.col]) ){
          return 1;
        }
      } else{
        if (a[order.col] < b[order.col]){
          return -1;
        }else if (a[order.col] > b[order.col] ){
          return 1;
        }
      }
    }else{
      if (typeof a[order.col] === "number" && typeof b[order.col] === "number"){
        return b[order.col] - a[order.col];
      } else if (regexDate.test(a[order.col])){
        if (Date.parse(a[order.col]) < Date.parse(b[order.col])){
          return 1;
        }else if (Date.parse(a[order.col]) > Date.parse(b[order.col]) ){
          return -1;
        }
      } else{
        if (a[order.col] < b[order.col]){
          return 1;
        }else if (a[order.col] > b[order.col] ){
          return -1;
        }
      }
    }
    });

    return data;
  }, [order, data]);

  return { rowData, order, setOrder };
};

export default useRowData;