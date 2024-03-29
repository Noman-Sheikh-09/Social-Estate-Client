import axios from "axios";

import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const getTask = (setLoading) => async (dispatch) => {
  try {
    setLoading(true)
    const resValue = await axios.get("http://localhost:4000/tasks/get");
// console.log(resValue,'resValue');
    dispatch({
      type: "GET_TASK",
      payload: resValue.data,
    });
    setLoading(false)

  } catch (error) {
    console.log("error in reponse", error);
  } finally {
    setLoading(false)
  }
};
export const addTask = (data) => async (dispatch) => {
  try {
    // const baseURL = process.env.REACT_APP_BASEURL;
    // console.log("base url from env", baseURL);
    const resValue = await axios.post("http://localhost:4000/tasks/add", data);
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
    await axios.delete(`http://localhost:4000/tasks/delete/${id}`);

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
      `http://localhost:4000/tasks/update/{id}`,
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
