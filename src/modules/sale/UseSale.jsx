import React, { useEffect } from "react";
import { useState } from "react";
import { addTask } from "../../store/action/TaskAction";
import { useDispatch,useSelector } from "react-redux";
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
  });
  const [userId , setUserId ] = useState("")
  
const user = useSelector(state=> state.AuthReducer.user.id)
console.log( 'user id in sale',user?.id);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
   setUserId(user)
  }, [user])
  
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
    dispatch(addTask( {...postData,userId}, navigate));
    console.log({
      ...postData,userId
    });
  
    navigate("/");
    setPostData({
      title: "",
      description: "",
      imageUrl: "",
      price: "",
      category: "",
      location:"",
      phone:"",
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
