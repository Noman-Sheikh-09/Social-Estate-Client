import React from "react";
import { useState } from "react";
import { addTask } from "../../store/action/TaskAction";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function UseSale() {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    imageUrl: "",
    price: "",
    category: "",
    location:"",
    phone:"",
    userId:"",
    
  });
  console.log(postData);

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const uploadImageHandler = async () => {
    const { files } = document.querySelector('input[type="file"]');
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("upload_preset", "CrudImages");

    try {
      setLoading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dwgjwetes/image/upload",
        {
          method: "post",
          body: formData,
        }
      );
      const json = await res.json();
      const data = json;
      setPostData({
        imageUrl: data?.secure_url,
      });
      console.log(data?.secure_url);
      // console.log(json);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const ctaSubmitHandler = () => {
    dispatch(addTask(postData, navigate));
    navigate("/");
    setPostData({
      title: "",
      description: "",
      imageUrl: "",
      price: "",
      category: "",
      location:"",
      phone:""
    });
  };

  return [
    {
      postData,
      setPostData,
      ctaSubmitHandler,
      uploadImageHandler,
    },
  ];
}
