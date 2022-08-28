import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import UseHome from '../home/UseHome'
import {getTask} from '../../store/action/TaskAction'
import { ActionTypes } from "@mui/base";
export default function UseProperty() {
  // const [{arrayData}] = UseHome();
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
console.log('data in myStore',arrayData);
  const dispatch = useDispatch();
 
// arrayData.filterUserArray = arrayData.filter((item)=>{
//   if(item.userId === action.payload.id){
//     return item

//   }
// })

  useEffect(() => {
    dispatch(getTask());
  }, []);

  return {
    arrayData
  }
}
