import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import CameraIcon from "@mui/icons-material/Camera";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { doLogout } from "../../store/action/AuthAction";
import Button from "@mui/material/Button";
import DropDown from "../dropDown/DropDown";
import HomeIcon from "@mui/icons-material/Home";
export default function Header() {
  const cartCount = useSelector((state) => state.CartReducer.cartItems);
  const user = useSelector((state) => state.AuthReducer);
  console.log(user);

  const dispatch = useDispatch();

  return (
    <Box>
      <AppBar
       
        style={{
          backgroundColor: "white",
       
        }}
      >
        <Toolbar>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width:"100%"
            }}
          >
            <Link to="/" style={{ color: "black", textDecoration: "none" }}>
              <HomeIcon style={{ color: "black", fontSize: 40 }} />
            </Link>
            <TextField
              placeholder="Search"
              style={{
                backgroundColor: "white",
              borderWidth:2,
                height: "30px",
                width:'50%',
                alignitems:'center',
                marginBottom:'30px'
              }}
            />
    
       
            <Link to="/sale" style={{ textDecoration: "none", color: "black" }}>
              <Button color="inherit"> Create </Button>
            </Link>
            {user.isUserLoggedIn ? (
              <DropDown />
            ) : (
              <Link
                to="/auth"
                style={{
                  color: "black",
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <Button color="inherit">Sign In</Button>
              </Link>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
