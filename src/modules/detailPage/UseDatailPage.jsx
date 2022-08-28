import React from 'react'
import { useEffect } from 'react'
import {useDispatch,useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import {getTask} from "../../store/action/TaskAction";
export default function UseDatailPage() {
    const arrayData = useSelector((state) => state.TaskReducer.tasks);
  
    // const {_id: _id } = useParams();
 
    const dispatch = useDispatch();

useEffect(() => {
  dispatch(getTask())
}, [])

const productData = arrayData.filter((item) => {
  console.log(item);
     {
      return item;

    }
  console.log(productData);

  });
  return [{
    productData
  }]
}
