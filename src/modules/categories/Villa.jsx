import { Container, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CommondCard from "../../components/commondCard/CommondCard";
import { getTask } from "../../store/action/TaskAction";

export default function Villa() {
  const arrayData = useSelector((state) => state.TaskReducer.tasks);

  const dispatch = useDispatch();
  // const [{arrayData}] = UseHome()
  console.log("data in house", arrayData);
  useEffect(() => {
    dispatch(getTask());
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: "center", fontSize: "52px", marginTop: 100 }}>
    Villa
      </h1>

      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={0}>
              {arrayData?.data?.map((singleItem) => {
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
