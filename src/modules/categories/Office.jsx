import React from 'react'
import UseHome from '../home/UseHome';
import {
  Container,
    Grid,
} from "@mui/material";
import { useSelector,useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { getTask } from '../../store/action/TaskAction';
import CommondCard from '../../components/commondCard/CommondCard';
export default function Office() {
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
  
const dispatch = useDispatch()
// const [{arrayData}] = UseHome()
    console.log('data in office',arrayData);
    useEffect(() => {
     dispatch(getTask())
    }, [])
    
  return (
    <div>
       <h1 style={{ textAlign: "center", fontSize: "52px" ,marginTop:100}}>Houses </h1>

<Container maxWidth="lg">
  <Grid container spacing={2}>
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
     
    >
      <Grid container spacing={0}>




      {arrayData?.data?.map((singleItem) => {
        return (
          <CommondCard singleItem={singleItem}
          key={singleItem?._id}
          />
        );
      })}
        
           </Grid>
    </Grid>
  </Grid>
</Container>
    </div>
  )
}
