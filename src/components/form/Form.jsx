import { Button, Paper, TextField } from "@mui/material";
import React from "react";
import UseForm from "./UseForm";

export default function Form({postData: updatePostData,onClickUpdateHandler}) {
  // setPostData(      {
  //   // ...postData,
  //   _id: singleItem._id,
  //   title: singleItem.title,
  //   description: singleItem.description,
  //   imageUrl: singleItem.imageUrl,
  // });
  const [{ postData, setPostData, ctaSubmitHandler, uploadImageHandler }] =
    UseForm();
  return (
    <div>
      <Paper
        elevation={5}
        style={{
          width: "300px",
          height: "350px",
          borderRadius: "30px",
          // position: "fixed",
        }}
      >
        <h3 style={{ padding: "10px" }}>Creating a Memories</h3>
        <div style={{ width: "200px", marginLeft: "50px" }}>
          <div style={{ marginTop: "30px" }}>
            <input type="file" onChange={uploadImageHandler} style={{}} />
          </div>
          <div style={{ marginTop: "40px" }}>
            <TextField
              placeholder="Title"
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={updatePostData.title || postData.title}
              onChange={(e) =>
                setPostData({ ...postData, title: e.target.value })
              }
            />
            <TextField
              placeholder="Decription"
              variant="standard"
              style={{ marginTop: "10px" }}
              fullWidth
              value={updatePostData.description || postData.description}
              onChange={(e) =>
                setPostData({ ...postData, description: e.target.value })
              }
            />
          </div>

          {/* {   console.log('form data',postData.description)} */}
          <Button
            variant="contained"
            color="inherit"
            style={{
              marginTop: "40px",
              backgroundColor: " tomato",
              color: "white",
            }}
            fullWidth
            onClick={onClickUpdateHandler}
          >
            Update
          </Button>
          <Button
            variant="contained"
            color="inherit"
            style={{
              marginTop: "30px",
              backgroundColor: " tomato",
              color: "white",
            }}
            fullWidth
            onClick={ctaSubmitHandler}
          >
            Add
          </Button>
        </div>
      </Paper>
    </div>
  );
}
