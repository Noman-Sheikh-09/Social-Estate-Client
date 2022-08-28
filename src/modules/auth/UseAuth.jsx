import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { doSignin, doSignup, signin, signup } from "../../store/action/AuthAction";
const initialState = {
  name: "",
  age: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export default function UseAuth() {
  const [isSignup, setIsSignup] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState(initialState);
  console.log(formData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const switchMode = () => {
    setFormData(initialState);
    setIsSignup((prevIsSignup) => !prevIsSignup);
  };

  const showPasswordHandler = () => {
    setShowPassword(!showPassword);
  };

  const ctaSingUpHandler = () => {
    dispatch(doSignup(formData,navigate));
  };

  const ctaSubmitHandler = () => {
  dispatch(doSignin(formData,navigate))
  };
  return [
    {
      isSignup,
      formData,
      setFormData,
      showPasswordHandler,
      showPassword,
      setShowPassword,
      switchMode,
      ctaSubmitHandler,
      ctaSingUpHandler,
    },
  ];
}
