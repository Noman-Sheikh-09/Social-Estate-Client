
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const addCart = (singleItem, quantity) => async (dispatch) => {
  var cartItem = {
    title: singleItem?.title,
    _id: singleItem._id,
    imageUrl: singleItem.imageUrl,
    description: singleItem.description,
    quantity: quantity,
    price: singleItem.price * quantity,
  };
  dispatch({
    type: "ADD_CART",
    payload: cartItem,
  });
  toast.success("Add to Favourite")
};

export const deleteCart = (item) => (dispatch) => {
  dispatch({
    type: "DELETE_CART",
    payload: item,
  });
  toast.warning("Delete from Favourite")
};
