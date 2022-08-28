import React from 'react'
import UseHome from '../home/UseHome';
import {
  Container,
    Grid,
} from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';
import ItemCard from '../../components/itemCard/ItemCard';
import { useEffect } from 'react';
import { getTask } from '../../store/action/TaskAction';
export default function House() {
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
const dispatch = useDispatch()
// const [{arrayData}] = UseHome()
    console.log(arrayData);
    useEffect(() => {
     dispatch(getTask())
    }, [])
    
  return (
    <div>
       <Container>
      <h1 style={{marginTop:100}}>Houses</h1>
      
    </Container>
    </div>
  )
}
