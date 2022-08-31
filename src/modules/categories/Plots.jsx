import { Container,Grid } from '@mui/material';
import React, { useEffect,useLayoutEffect } from 'react'
import { useState } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import CommondCard from '../../components/commondCard/CommondCard';
import { getTask } from '../../store/action/TaskAction';

export default function Plots() {
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
  const [filterProduct,setFilterProduct] = useState(arrayData)
const dispatch = useDispatch()

useLayoutEffect(() => {
     dispatch(getTask())
    }, [])

    // useLayoutEffect(() => {
    //   const filterArray = arrayData.filter((item)=>{
    //     if(item.category === "Villa"){
    //       return true
    //     }
    //     return false

    //   })
    //   setFilterProduct(filterArray)
    // }, [])
    // console.log('data in Plots',filterProduct);

    
    


  return (
    <div>
       <h1 style={{ textAlign: "center", fontSize: "52px" ,marginTop:100}}> Plots </h1>

<Container maxWidth="lg">
  <Grid container spacing={2}>
    <Grid
      item
      xs={12}
      sm={12}
      md={12}
     
    >
      <Grid container spacing={0}>
      {filterProduct?.data?.map((singleItem) => {
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
