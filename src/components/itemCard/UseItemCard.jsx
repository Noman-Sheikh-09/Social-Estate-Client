import react, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../store/action/TaskAction";
export default function UseItemCard() {
  const dispatch = useDispatch();
  const ctaDeleteHandler = (id) => {
    console.log("id in delete handler", id);
    dispatch(deleteTask(id));
  };

  const addCartHandler = () => {
    dispatch();
  };

  return [
    {
      addCartHandler,
    },
  ];
}
