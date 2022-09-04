import axios from "axios";
import {  toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
export const doSignup = (formData, navigate) => async (dispatch) => {
  //   console.log("data in action", formData);
  try {
    const resValue = await axios.post(
      "https://hackathone-server.herokuapp.com/users/signup",
      formData
    );
    await window.localStorage.setItem("token", resValue.data.token);
    console.log("data from backend", resValue?.data);
    navigate("/");
    dispatch({
      type: "SIGNUP",
      payload: resValue.data,
    });
    toast.success("Seccessfully Signup ")
  } catch (error) {
    console.log("error in signup", error);
  }
};

export const doGetLoggedInUser = (token, navigate) => async (dispatch) => {
  //   console.log("data in action", formData);
  try {
    const resValue = await axios.post(
      "https://hackathone-server.herokuapp.com/users/getActiveUser",
      { token: token }
    );
    navigate("/");

    dispatch({
      type: "ACTIVE_USER",
      payload: resValue.data,
    });
    toast.success("Welcome Back Again")

  } catch (error) {
    console.log("error in active user", error);
  }
};
export const doLogout = () => async (dispatch) => {
  //   console.log("data in action", formData);
  try {
    await window.localStorage.removeItem("token");
    dispatch({
      type: "LOGOUT",
    });
    toast.Warning("You are Log out ")

  } catch (error) {
    console.log("error in signup", error);
  }
};
export const doSignin = (formData, navigate) => async (dispatch) => {
    //   console.log("data in action", formData);
    try {
      const resValue = await axios.post(
        "https://hackathone-server.herokuapp.com/users/signin",
        formData
      );
      await window.localStorage.setItem("token", resValue.data.token);
      console.log("data from backend", resValue?.data);
      navigate("/");
      dispatch({
        type: "SIGNIN",
        payload: resValue.data,
      });
    toast.success("Seccessfully Logged In ")

    } catch (error) {
      console.log("error in signup", error);
    }
  };
