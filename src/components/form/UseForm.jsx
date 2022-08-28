import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../store/action/TaskAction";
export default function UseForm() {
  const [postData, setPostData] = useState({
    title: "",
    description: "",
    imageUrl: "",
  });
  const [loading, setLoading] = useState(false);

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
    dispatch(addTask(postData));
    setPostData({
      title: "",
      description: "",
      imageUrl: "",
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
