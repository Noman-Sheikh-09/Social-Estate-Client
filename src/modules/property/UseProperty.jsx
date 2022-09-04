import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UseHome from '../home/UseHome'
import {getTask} from '../../store/action/TaskAction'
import { ActionTypes } from "@mui/base";
export default function UseProperty() {
  const [filterProduct,setFilterProduct] = useState([])
  // const [{arrayData}] = UseHome();
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
const user = useSelector((state)=> state.AuthReducer.user);
// console.log('data in myStore',arrayData);
  const dispatch = useDispatch();
 
  useEffect(() => {
   const filterUserArray = arrayData?.data?.filter((item)=>{
      if(item?.userId == user?.id){
        return item
    
      }
    })
setFilterProduct(filterUserArray)
  }, [arrayData,user])
  
  console.log(filterProduct);


  useEffect(() => {
    dispatch(getTask());
  }, [arrayData]);

  return {
    filterProduct
  }
}
