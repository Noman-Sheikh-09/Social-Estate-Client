import React from "react";
import "./MystoreStyle.css";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import ItemCard from "../../components/itemCard/ItemCard";
import UseProperty from "./UseProperty";
import UseHome from "../home/UseHome";
import CommondCard from "../../components/commondCard/CommondCard";

export default function Propery() {
  const { filterProduct } = UseProperty();
  return (
    <div>
      <div className="storeContainer">
        <h1 style={{ textAlign: "center", fontSize: "52px", marginTop: 100 }}>
          My Property
        </h1>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <Grid container spacing={0}>
                {filterProduct?.map((singleItem) => {
                  return (
                    <CommondCard
                      singleItem={singleItem}
                      key={singleItem?._id}
                    />
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
