import { Container, Grid } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { addCart, deleteCart } from "../../store/action/CartAction";
import DeleteIcon from '@mui/icons-material/Delete';

export default function CartScreen() {
  const cartCount = useSelector((state) => state.CartReducer.cartItems);
  const dispatch = useDispatch();
// console.log('',cartCount);
const deleteCartItem=(item)=>{
  dispatch(deleteCart(item))
}
  return (
    <>
      <Container>
        <h1
          style={{
            textAlign: "center",
            fontSize: "62px",
            color: "green",
            textDecoration: "underline",
            padding: "20px",
            paddingTop: "10px",
          }}
        >
    My Favourites
        </h1>
        <Grid container spacing={2} style={{ backgroundColor: "white" }}>
          {cartCount.map((item) => {
            return (
              <>
                <Grid item xs={12} md={6}>
                  <img
                    src={item.imageUrl}
                    alt="Favourite"
                    style={{ width: "100%", height: "600px", padding: "10px" }}
                  />
                </Grid>

                <Grid item xs={12} md={6}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "start",
                      marginLeft: "10%",
                      width: "100%",

                      lineHeight: "normal",
                      marginTop: "10%",
                    }}
                  >
                    <h1>{item?.title}</h1>

                    <div
                      style={{
                        backgroundColor: "#e4dfdf",
                        padding: "20px",
                        borderRadius: "10px",
                      }}
                    >
                      <p
                        style={{
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                        }}
                      >
                        {item?.description}
                      </p>
                    </div>
                    <h2>Rs. {item?.price}</h2>
                    <h2>Category :  {item?.category}</h2>
                    <h2>Call :  {item?.phone}</h2>

                    {/* <div
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        padding: "20px",
                      }}
                    >
                      <RemoveIcon
                        size={30}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(addCart(item, item.quantity - 1));
                        }}
                      />
                      &nbsp;
                      <p>{item.quantity}</p>
                      &nbsp;
                      <AddIcon
                        size={30}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          dispatch(addCart(item, item.quantity + 1));
                        }}
                      />
                    </div>
                  </div> */}
                  {/* <div
                    style={{
                      display: "flex",
                      alignItems: "start",
                      marginTop: "5%",
                      marginLeft: "10%",
                    }}
                  >
                    <button
                      style={{
                        color: "black",
                        backgroundColor: "#e4dfdf",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      Checkout
                    </button> */}
                    {/* <button
                      style={{
                        color: "white",
                        backgroundColor: "green",
                        border: "none",
                        padding: "10px 20px",
                        borderRadius: "5px",
                        marginLeft: "20px",
                        cursor: "pointer",
                      }}
                    >
                      Order
                    </button> */}
                    <button
                      style={{
                        color: "white",
                        backgroundColor: "red",
                        border: "none",
                        padding: "20px 40px",
                        borderRadius: "5px",
                        marginLeft: "20px",
                        cursor: "pointer",
                        fontSize:'24'
                      }}
                      onClick={()=>deleteCartItem(item)}
                    >
                    <DeleteIcon />
                    </button>
                  </div>
                </Grid>
              </>
            );
          })}
        </Grid>
      </Container>
    </>
  );
}
