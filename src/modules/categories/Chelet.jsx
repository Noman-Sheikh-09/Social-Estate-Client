import { Container,Grid } from '@mui/material';
import React, { useEffect } from 'react'
import { useDispatch,useSelector } from 'react-redux';
import CommondCard from '../../components/commondCard/CommondCard';
import { getTask } from '../../store/action/TaskAction';
import { useState } from 'react';
export default function Chelet() {
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
  const [filterProduct, setFilterProduct] = useState(arrayData?.data);
  
const dispatch = useDispatch()
// const [{arrayData}] = UseHome()
    console.log('data in chelet',arrayData);
    useEffect(() => {
     dispatch(getTask())
    }, [])
    useEffect(() => {
      const filterArray = arrayData?.data?.filter((item) => {
        if (item.category == "Chelet" ) {
          return item;
        }
      });
      setFilterProduct(filterArray);
    }, [arrayData]);
  return (
    <div>
       <h1 style={{ textAlign: "center", fontSize: "52px" ,marginTop:100}}>Chelet </h1>

<Container maxWidth="lg">
  <Grid container spacing={2}>
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
     
    >
      <Grid container spacing={0}>




      {filterProduct?.map((singleItem) => {
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
