import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCart } from '../../store/action/CartAction';
import { deleteTask } from '../../store/action/TaskAction';
export default function UseCommonCard() {
    const dispatch = useDispatch();
    const [quantity, setQuantity] = useState("1");

const ctaDeleteHandler=(id)=>{
    console.log("id in delete handler",id);
    dispatch(deleteTask(id))
}

const addFavouriteHandler=(singleItem)=>{
  dispatch(addCart(singleItem,quantity))
}

  return {
    ctaDeleteHandler,addFavouriteHandler
  }
}

