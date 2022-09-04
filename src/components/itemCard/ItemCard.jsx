import React, { useState } from "react";
import "./CardStyle.css";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import moment from "moment";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCart } from "../../store/action/CartAction";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export default function ItemCard({ singleItem, ctaUpdateHandler }) {
  const [quantity, setQuantity] = useState("1");
  const [open, setOpen] = useState(false);
  const cartCount = useSelector((state) => state.CartReducer.cartItems);
  const isUserLoggedIn = useSelector(
    (state) => state.AuthReducer.isUserLoggedIn
  );
  const dispatch = useDispatch();
  const addCartHandler = (singleItem) => {
    // console.log('item in cart handler', singleItem);
    dispatch(addCart(singleItem,toast, quantity));
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const onClickHandler =()=>{
    toast.warning("You Must Have Login")
  }

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "none",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Card
        sx={{
          minWidth: "90%",
         marginTop:5,
          borderRadius: "30px",
          backgroundColor: "grey",
        }}
      >
        {/* <Link
        to={`/detail/${singleItem._id}`}
        style={{ textDecoration: "none" }}
      > */}
        <div >
          <Typography variant="p" color="initial" className="date">
            {moment(singleItem.createdAt).fromNow()}
          </Typography>
          <CardActions>
            {isUserLoggedIn?
             <IconButton
             aria-label="cart"
             onClick={() => addCartHandler(singleItem)}
           >
             <FavoriteIcon className="icon" />
           </IconButton>
           : 
           <IconButton
           aria-label="cart"
           onClick={onClickHandler }
         >
           <FavoriteIcon  className="icon" />
         </IconButton>
            }
           
          </CardActions>
        </div>
        <CardContent
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-start",
          }}
        >
          <div>
            <Typography variant="h6" component="div" className="cardText">
              {singleItem?.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="cardText"
            >
              {singleItem?.description}
            </Typography>
            <Typography variant="h6" color="secondary" className="cardText">
              Rs.{singleItem?.price}
            <br />
          Call:
          <a href="#">{singleItem?.phone}</a>
     
            </Typography>
          </div>
          <small style={{ color: "black",fontSize:15,fontWeight:400,}}>Categories:{singleItem?.category}</small>
          <br />
         
        </CardContent>
      
        <CardMedia
          component="img"
          alt="Memory Picture"
          height="300"
          image={singleItem?.imageUrl}
          onClick={handleOpen}
          style={{cursor:'pointer'}}
        />
        {/* </Link> */}
      </Card>

      {/* Modal Code  */}

      <Modal
        hideBackdrop
        open={open}
        onClose={handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box
          sx={{
            ...style,
            width: "95%",
            height: "100vh",
            display: "flex",
            flexDirection: "row",
          }}
        >
          <img
            src={singleItem?.imageUrl}
            alt="Image"
            style={{ width: "50%", height: "auto" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              width: "50%",
              marginLeft: "30px",
            }}
          >
            <h2 id="child-modal-title">
              Title: &nbsp;
              {singleItem?.title}
            </h2>
            <p id="child-modal-description">
              Description: &nbsp;
              {singleItem?.description}
            </p>
            <small id="child-modal-description">
              Category: &nbsp;
              {singleItem?.category}
            </small>  <small id="child-modal-description">
              Location: &nbsp;
              {singleItem?.location}
            </small>
            <h3 id="child-modal-title">Price: &nbsp; Rs.{singleItem?.price}</h3>
            <p>
              Call:
              <a href="#">{singleItem?.phone}</a>
            </p>
            <Button onClick={handleClose}>Close</Button>
          </div>
        </Box>
      </Modal>
    </>
  );
}
