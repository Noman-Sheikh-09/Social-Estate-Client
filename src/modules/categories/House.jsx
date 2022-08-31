import React, { useState } from "react";
import UseHome from "../home/UseHome";
import { Container, Grid } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import ItemCard from "../../components/itemCard/ItemCard";
import { useEffect } from "react";
import { getTask } from "../../store/action/TaskAction";
import CommondCard from "../../components/commondCard/CommondCard";
export default function House() {
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
  const [filterProduct, setFilterProduct] = useState(arrayData)

  const dispatch = useDispatch();
  // const [{arrayData}] = UseHome()
  console.log("data in house", arrayData);
  useEffect(() => {
    dispatch(getTask());
  }, []);

 

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "52px", marginTop: 100 }}>
        Houses
      </h1>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={0}>
              {filterProduct?.data?.map((singleItem) => {
                return (
                  <CommondCard singleItem={singleItem} key={singleItem?._id} />
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
