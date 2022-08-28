import React from 'react'
import UseHome from '../home/UseHome'
import { useSelector ,useDispatch} from 'react-redux';
import { useEffect } from 'react';
import { getTask } from '../../store/action/TaskAction';
export default function Office() {
  // const [{arrayData}] = UseHome()
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
  
  console.log('arrayData in office',arrayData);
const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTask())
  }, [third])
  
  return (
    <div>
        <h1 style={{marginTop:100}}>Houses</h1>
    </div>
  )
}
