import { Container, Grid } from "@mui/material";
import "./OneStyle.css";
import BannerImage from '../../assets/hero.png'
export function One() {
  return (
    <div>
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6} style={{marginTop:'10%'}}>
            <p className="p-1-part-1">Search for Homes in your Neighborhood</p>
            <p className="p-2-part-1">
              Online Estate Agency, the modern way to sell your own home. You
              can use griffin residential to market your property.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
          
              <img src={BannerImage} alt="" className="img-1-part-1" />
          
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
