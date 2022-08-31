import React, { useState } from "react";
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
import UseCommonCard from "./UseCommonCard";


export default function CommondCard({singleItem}) {
    const {ctaDeleteHandler} = UseCommonCard()
    const [quantity, setQuantity] = useState("1");
    const [open, setOpen] = useState(false);
    const cartCount = useSelector((state) => state.CartReducer.cartItems);
  
    const dispatch = useDispatch();
    const addCartHandler = (singleItem) => {
      // console.log('item in cart handler', singleItem);
      dispatch(addCart(singleItem, quantity));
    };
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
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
    <div>
         <Card sx={{ maxWidth: 300,margin:5  ,whiteSpace:'nowrap' ,
  'overflow': 'hidden',
  textOverflow: 'ellipsis', }}>
      <CardMedia
        component="img"
        height="140"
        image={singleItem?.imageUrl}
        alt="green iguana"
        onClick={handleOpen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {singleItem?.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {singleItem?.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={()=>ctaDeleteHandler(singleItem._id)}>Delete</Button>
        <Button size="small"> <FavoriteIcon /> </Button>
      </CardActions>
    </Card>

{/* Modal Code  */}


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

    </div>
  )
}
