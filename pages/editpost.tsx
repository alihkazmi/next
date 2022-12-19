import React, { useState } from 'react'
import { Box, Divider, TextField, Button } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Textarea } from '@mui/joy';
import useSavePost from './Hooks/useSavePost';
import Router from 'next/router';
import * as yup from "yup";
import { useFormik } from "formik";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { useRouter } from 'next/router';
import BasicSelect from './Components/Select';

const validationSchema = yup.object({
  username: yup
    .string()
    .required("Username is required"),
  pitch: yup
    .string()
    .required("Pitch is required"),
  description: yup
    .string()
    .required("Description is required"),

});
const Editpost = () => {

  const Router = useRouter();
  // console.log('id------', Router.query.id)
  console.log(Router.query.id, "router--------")
  const getLocalStorageObject = () => {
    if (typeof window !== "undefined") {
      const array: any = localStorage.getItem("List");
      const List = JSON.parse(array);
      return List
    }
  }
  const newList = getLocalStorageObject();

  const result = newList?.filter((list: any) => list.identity === Router.query.id);
  console.log(result, "object")

  const formik = useFormik({
    initialValues: {
      identity: result[0].identity,
      username: result[0].username,
      pitch: result[0].pitch,
      description: result[0].description,
      file: "",
    },
    //  
    onSubmit: (values) => {
      SavePost(values.username, postImage, postAudio, values.pitch, values.description, " ");
    },
  });





  // console.log(List, 'list------')

  const [postAudio, setPostAudio] = useState("");
  const [pitch, setPitch] = useState("");
  const [PreviewAudio, setPreviewAudio] = React.useState<string>("");
  const [editpost, setEditpost] = React.useState<string>("");

  const { SavePost } = useSavePost();

  const handleImageChange = (e: any) => {
    // setPostImage(e.target.files[0]);
    // setPreviewImage(URL.createObjectURL(e.target.files[0]));

  };
  const handleAudioChange = (e: any) => {
    setPostAudio(e.target.files[0]);
    setPreviewAudio(URL.createObjectURL(e.target.files[0]));
  };
  // const handleClick = (item: any) => {
  //   SavePost(username, postImage, postAudio, pitch, description);
  //   { Router.push("/newsfeed") }
  // };
  // console.log("resfd-----", result[1].pitch)
  return (
    <>

      <Box sx={{
        justifyContent: 'center',

        mt: '26rem',
        ml: '40rem',
        transform: 'translate(-50%, -50%)',
        width: '70%',
        height: 'auto',
        bgcolor: 'white',
        boxShadow: 24,
        p: 4,
        color: '#303030'

      }}
        onSubmit={formik.handleSubmit}
        component="form">
        <br></br>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <div
            style={{ color: "#123b62", fontWeight: 550, fontSize: "20px" }}
          >
            Edit Post
            <Divider
              variant="middle"
              sx={{ bgcolor: "#123b62", width: "50px", ml: 3.5 }}
            ></Divider>
          </div>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              mt: 2,
            }}
          >
            <TextField
              sx={{ m: 2, height: "45px", width: "400px" }}
              placeholder="User Name"
              id='username'
              name='username'
              onChange={formik.handleChange}
              value={formik.values.username}

              error={formik.touched.username && Boolean(formik.errors.username)}
              helperText={formik.touched.username && formik.errors.username}
              onBlur={formik.handleBlur}
            />

            <Box>

              <TextField
                sx={{ m: 2, height: "45px", width: "400px" }}
                placeholder="Add Image or Video"
              />
            </Box>
            <Box>
              <Button variant="contained"
                component="label"
                sx={{
                  height: '3rem',
                  textTransform: 'capitalize',
                  backgroundColor: '#4ab9a3',
                  "&:hover": {
                    backgroundColor: "#4ab9a3"
                  },
                  mt: '16px',
                  ml: '-17px',
                  height: '55px',
                }}>

                <input
                  name='file'
                  accept="image/*"
                  type="file"
                  id="image"
                  onChange={handleImageChange}
                  hidden
                />

                <AttachFileIcon></AttachFileIcon>

                ChooseFile
              </Button>
            </Box>
          </Box>
          <Box>
            <TextField
              sx={{ m: 2, height: "45px", width: "360px" }}
              placeholder="Add Audio"
            />
            <Button variant="contained"
              component="label"
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#4ab9a3',
                "&:hover": {
                  backgroundColor: "#4ab9a3"
                },
                p: ' 16px'
                // ml: '375px',
                // mt: '-95px',
                // height: '55px'
              }}>
              <input
                style={{ marginLeft: "20px" }}
                accept="audio/*"
                type="file"
                onChange={handleAudioChange}
                id="audio"
                hidden
              />
              <AttachFileIcon></AttachFileIcon>
              Choose File
            </Button>

          </Box>
          <TextField
            inputProps={{
              style: {
                height: "120px",
              },
            }}
            minRows={7}
            sx={{ m: 2, py: 1, width: "95%" }}
            placeholder="Pitch"
            id="pich"
            name="pitch"
            label="pitch"
            type="pitch"
            value={formik.values.pitch}
            onChange={formik.handleChange}
            error={
              formik.touched.pitch && Boolean(formik.errors.pitch)
            }
            helperText={formik.touched.pitch && formik.errors.pitch}
            onBlur={formik.handleBlur}


          />
          <TextField
            inputProps={{
              style: {
                height: "120px",
              },
            }}
            minRows={5}
            sx={{ m: 2, py: 1, width: "95%" }}
            placeholder="Description"
            id="description"
            name="description"
            label="description"
            type="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
            onBlur={formik.handleBlur}
          />

        </Box>
        <br></br>
        <br></br>
        <br></br>
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant='contained' sx={{
            float: 'left',
            textTransform: 'capitalize',
            backgroundColor: "transparent",
            color: '#4ab9a3',
            px: 3,
            mr: '55px',
            mt: '-55px',
            "&:hover": {
              backgroundColor: "whitesmoke"
            },
          }}
            onClick={() => { Router.push("/newsfeed") }}>
            Cancel</Button>
          <Button variant='contained' sx={{
            float: 'left',
            textTransform: 'capitalize',
            backgroundColor: "#4ab9a3",
            color: 'white',
            px: 3,
            mr: '55px',
            mt: '-55px',
            "&:hover": {
              backgroundColor: "#4ab9a3"
            },
          }}
            type='submit'>
            Save</Button>

        </Box>
      </Box>



    </>
  )
}

export default Editpost

