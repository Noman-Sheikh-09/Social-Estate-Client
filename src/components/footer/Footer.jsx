import React from "react";
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { Grid } from "@mui/material";
export default function Footer() {
  return (
    <div style={{width:'100%',height:200,backgroundColor:"#040e2b",marginTop:'10%'}}>
     
     <Grid container spacing={5} align="center" style={{padding:10}}>
      <Grid item xs={12} >
      <h3  style={{color:'white'}} >Contact Us</h3>
        <FacebookIcon style={{color:'white'}} />
        <TwitterIcon  style={{color:'white'}}   />
        <YouTubeIcon  style={{color:'white'}}  />
        <InstagramIcon  style={{color:'white'}}  />
      </Grid>
     </Grid>
    </div>
  );
}

