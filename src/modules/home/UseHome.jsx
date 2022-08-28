import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addTask, getTask, updateTask } from "../../store/action/TaskAction";
export default function UseHome() {
  const arrayData = useSelector((state) => state.TaskReducer.tasks);
  // console.log("data in useHmome",arrayData);
  const dispatch = useDispatch();
  const [flag, setFlag] = useState(false);

  const [postData, setPostData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    id: "",
    // flag:'false'
  });
  useEffect(() => {
    dispatch(getTask());
  }, []);

  const ctaUpdateHandler = (singleItem) => {
    // console.log(singleItem);
    setFlag(true)
    setPostData({
      // ...postData,
      _id: singleItem._id,
      title: singleItem.title,
      description: singleItem.description,
      imageUrl: singleItem.imageUrl,
    });
  };

  const onClickUpdateHandler = () => {

    dispatch(updateTask(postData));

    setPostData({
      title: "",
      description: "",
      imageUrl: "",
    });
    setFlag(false)
  };
  return [
    {
      arrayData,
      ctaUpdateHandler,
      postData,
      onClickUpdateHandler,flag,setFlag
    },
  ];
}
