import React from "react";
import UseSale from "./UseSale";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";
import "./Style.css";
import Footer from "../../components/footer/Footer";

export default function Sale() {
  const [{ postData, setPostData, ctaSubmitHandler, uploadImageHandler }] =
    UseSale();
  return (
    <div>
      <Paper
        elevation={5}
        style={{
          height: "100vh",
          borderRadius: "30px",
          marginTop: "5%",
        }}
      >
        <h1 style={{ padding: "10px", textAlign: "center", color: "#003366" }}>
          Sale Your Property
        </h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div style={{ marginTop: "30px" }}>
            <input type="file" onChange={uploadImageHandler} />
          </div>
          <div style={{ marginTop: "40px" }}>
            <TextField
              placeholder="Title"
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <TextField
              placeholder="No. of Bedrooms,Washroom,Drawing Room,etc."
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
            />

            <div style={{}}>
              <TextField
                placeholder="Price"
                variant="standard"
                // style={{ marginTop: "15px" }}
                fullWidth
                value={postData.price}
                onChange={(e) =>
                  setPostData({ ...postData, price: e.target.value })
                }
              />
              <FormControl variant="standard" sx={{ minWidth: "100%" }}>
                <InputLabel id="demo-simple-select-standard-label">
                  Category
                </InputLabel>
                <Select
                  labelId="demo-simple-select-standard-label"
                  id="demo-simple-select-standard"
                  value={postData.category}
                  onChange={(e) =>
                    setPostData({ ...postData, category: e.target.value })
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Plots">Plots</MenuItem>
                  <MenuItem value="Office">Office</MenuItem>
                  <MenuItem value="Villa">Villa</MenuItem>
                  <MenuItem value="Studio">Studio</MenuItem>
                  <MenuItem value="Appartment">Appartment</MenuItem>
                  <MenuItem value="Chelet">Chelet</MenuItem>
                </Select>
              </FormControl>
            </div>
            <FormControl variant="standard" sx={{ minWidth: "100%" }}>
              <InputLabel id="demo-simple-select-standard-label">
                Location
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={postData.location}
                onChange={(e) =>
                  setPostData({ ...postData, location: e.target.value })
                }
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Faisalabad">Faisalabad</MenuItem>
                <MenuItem value="Lahore">Lahore</MenuItem>
                <MenuItem value="karachi">karachi</MenuItem>
                <MenuItem value="Gujrat">Gujrat</MenuItem>
                <MenuItem value="Islamabad">Islamabad</MenuItem>
                <MenuItem value="Hydrabad">Hydrabad</MenuItem>
              </Select>
            </FormControl>
            <TextField
              placeholder="Phone Number"
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={postData.phone}
              onChange={(e) =>
                setPostData({ ...postData, phone: e.target.value })
              }
            />
          </div>
          <Button
            variant="contained"
            color="inherit"
            style={{
              marginTop: "30px",
              backgroundColor: " #003366",
              color: "white",
              paddingLeft: 30,
              paddingRight: 30,
            }}
            onClick={ctaSubmitHandler}
          >
            Add
          </Button>
        </div>
      </Paper>
      <Footer />
    </div>
  );
}
