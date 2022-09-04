import axios from "axios";

import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const getTask = () => async (dispatch) => {
  try {
    const resValue = await axios.get("https://hackathone-server.herokuapp.com/tasks/get");
    console.log("action data", resValue.data);
    dispatch({
      type: "GET_TASK",
      payload: resValue.data,
    });
  } catch (error) {
    console.log("error in reponse", error);
  }
};
export const addTask = (data) => async (dispatch) => {
  console.log("data in action", data);
  try {
    // const baseURL = process.env.REACT_APP_BASEURL;
    // console.log("base url from env", baseURL);
    const resValue = await axios.post("https://hackathone-server.herokuapp.com/tasks/add", data);
    // console.log("response after add", resValue.data);
   toast.success("Property Added Successfully")

    dispatch({
      type: "ADD_TASK",
      payload: resValue,
    });

  } catch (error) {
    console.log("error in add action", error);
  }
};
export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`https://hackathone-server.herokuapp.com/tasks/delete/${id}`);

    dispatch({
      type: "DELETE_TASK",
      payload: id,
    });
    toast.error("Property Deleted Successfully")

  } catch (error) {
    console.log("error in delete action", error);
  }
};
export const updateTask = (data) => async (dispatch) => {
  console.log("update data in action", data);
  try {
    const resValue = await axios.put(
      `https://hackathone-server.herokuapp.com/tasks/update/{id}`,
      data
    );

    dispatch({
      type: "UPDATE_TASK",
      payload: resValue,
    });
  } catch (error) {
    console.log("error in add action", error);
  }
};
