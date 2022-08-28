import axios from "axios";

export const doSignup = (formData, navigate) => async (dispatch) => {
  //   console.log("data in action", formData);
  try {
    const resValue = await axios.post(
      "http://localhost:4000/users/signup",
      formData
    );
    await window.localStorage.setItem("token", resValue.data.token);
    console.log("data from backend", resValue?.data);
    navigate("/");
    dispatch({
      type: "SIGNUP",
      payload: resValue.data,
    });
  } catch (error) {
    console.log("error in signup", error);
  }
};

export const doGetLoggedInUser = (token, navigate) => async (dispatch) => {
  //   console.log("data in action", formData);
  try {
    const resValue = await axios.post(
      "http://localhost:4000/users/getActiveUser",
      { token: token }
    );
    console.log(resValue.data);
    navigate("/");
    dispatch({
      type: "ACTIVE_USER",
      payload: resValue.data,
    });
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
  } catch (error) {
    console.log("error in signup", error);
  }
};
export const doSignin = (formData, navigate) => async (dispatch) => {
    //   console.log("data in action", formData);
    try {
      const resValue = await axios.post(
        "http://localhost:4000/users/signin",
        formData
      );
      await window.localStorage.setItem("token", resValue.data.token);
      console.log("data from backend", resValue?.data);
      navigate("/");
      dispatch({
        type: "SIGNIN",
        payload: resValue.data,
      });
    } catch (error) {
      console.log("error in signup", error);
    }
  };
