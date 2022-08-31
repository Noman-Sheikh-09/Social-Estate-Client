import React from "react";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import "./HomeStyle.css";
import ItemCard from "../../components/itemCard/ItemCard";
import BannerImage from "../../assets/banner.webp";
import UseHome from "./UseHome";
import { One } from "../../components/one/One";
import { Link } from "react-router-dom";
export default function Home() {
  const [{ arrayData, ctaUpdateHandler, postData, onClickUpdateHandler }] =
    UseHome();
  console.log("data in home", arrayData);
  const categories = [
    {
      title: "House",
      link: "/house",
    },
    {
      title: "Plots",
      link: "/plots",
    },
    {
      title: "Chelet",
      link: "/chelet",
    },
    {
      title: "Appartment",
      link: "/appartment",
    },
    {
      title: "Office",
      link: "/office",
    },
    {
      title: "Studio",
      link: "/studio",
    },
    {
      title: "Villa",
      link: "/villa",
    },
  ];

  return (
    <div className="paper">
      <One />
      <Container>
        <Grid
          container
          spacing={2}
          style={{
            marginTop: "30px",
            paddingTop: "20px",
            alignItems: "flex-start",
          }}
        >
          <h1>Here is Something for you </h1>
          <Grid item md={12} xs={12} sm={12}>
            <Grid container spacing={9}>
              <Grid item md={8}>
                {arrayData?.data?.map((singleItem) => {
                  return (
                    <Grid item xs={6} sm={6} md={12} lg={12}>
                      <ItemCard
                        singleItem={singleItem}
                        key={singleItem?._id}
                        ctaUpdateHandler={ctaUpdateHandler}
                      />
                    </Grid>
                  );
                })}
              </Grid>
              <Grid item md={4} >
                <div style={{position: "sticky", top: 70}}>
                <h1 style={{textDecoration:'underlined'}}>Categories</h1>
                {
                  categories.map((item)=>{
                    return (
                      <li style={{paddingTop:20,listStyle:'none',cursor:'pointer'}}>
                        <Link to={item.link} style={{textDecoration:'none',color:'black',fontSize:24}}>
                      {  item.title}

                        </Link>
                      </li>
                    )
                  })
                }
                </div>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
