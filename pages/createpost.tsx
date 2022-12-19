import React, { useEffect, useState } from 'react'
import { Box, Divider, TextField, Button } from '@mui/material'
import TextareaAutosize from '@mui/base/TextareaAutosize';
import ButtonUnstyled from '@mui/base/ButtonUnstyled';
import { Textarea } from '@mui/joy';
import useSavePost from './Hooks/useSavePost';
import Router from 'next/router';
import * as yup from "yup";
import { Formik, useFormik } from "formik";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import { Theme, useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Typography } from 'antd';


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
  company: yup
    .string()
    .required("Company is required"),


});
const CreatePost = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      pitch: "",
      description: "",
      file: "",
      company: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      SavePost(values.username, designation, postImage, postAudio, values.pitch, values.description, values.company);
    },
  });

  const [postImage, setPostImage] = useState("");
  const [postAudio, setPostAudio] = useState("");
  const [designation, setDesignation] = React.useState('HR');

  const { SavePost } = useSavePost();
  const handleChange = (event: SelectChangeEvent) => {
    setDesignation(event.target.value as string);
  };
  const handleImageChange = (e: any) => {
    setPostImage(e.target.files[0]);
    setPreviewImage(URL.createObjectURL(e.target.files[0]));
    formik.setFieldValue("postImage", "setPostImage");
  };
  const handleAudioChange = (e: any) => {
  };


  return (
    <>
      <Box sx={{

        justifyContent: 'center',
        mt: '30rem',
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
            Create Post
            <Divider
              variant="middle"
              sx={{ bgcolor: "#123b62", width: "50px", ml: 3.5 }}
            ></Divider>
          </div>
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>

            <Box sx={{
              mt: 1,
              width: '400px',
              margin: 'auto'
            }}>
              <br></br>

              {/* designation */}

            </Box>
          </Box>
          <Typography style={{ paddingLeft: "1rem", fontWeight: 'bold' }}>User Information</Typography>
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
              placeholder="Company"
              id='company'
              name='company'
              onChange={formik.handleChange}
              value={formik.values.company}
              error={formik.touched.company && Boolean(formik.errors.company)}
              helperText={formik.touched.company && formik.errors.company}
              onBlur={formik.handleBlur}
            />


            <Box sx={{ minWidth: 200, mt: 2 }}>
              {designation ? (
                <FormControl fullWidth>
                  <InputLabel id="designaton">Designation</InputLabel>
                  <Select
                    labelId="designation"
                    id="designation"
                    value={designation}
                    // label="designation"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Manager"}>Manager</MenuItem>
                    <MenuItem value={"Engineer"}>Engineer</MenuItem>
                    <MenuItem value={"CEO"}>CEO</MenuItem>
                    <MenuItem value={"HR"}>HR</MenuItem>
                  </Select>
                </FormControl>
              ) : (
                <FormControl fullWidth>
                  <InputLabel id="designation">Designation</InputLabel>
                  <Select
                    labelId="designation"
                    id="designation"
                    name="designation"
                    value={designation}
                    // label="designation"
                    onChange={handleChange}
                  >
                    <MenuItem value={"Manager"}>Manager</MenuItem>
                    <MenuItem value={"Engineer"}>Engineer</MenuItem>
                    <MenuItem value={"CEO"}>CEO</MenuItem>
                    <MenuItem defaultValue={"HR"}>HR</MenuItem>
                  </Select>
                </FormControl>
              )
              }
            </Box>
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

            {/* <Box>

              <TextField
                sx={{ m: 2, height: "45px", width: "400px" }}
                placeholder="Add Image or Video"
              />
            </Box> */}
            {/* <Box>
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
                  ml: '-27px',
                  // height: '55px',
                }}>

                <input
                  type="file"
                  name='file'
                  accept="image/*"
                  id="image"
                  onChange={handleImageChange}
                  hidden
                />

                <AttachFileIcon></AttachFileIcon>

                ChooseFile
              </Button>
            </Box> */}
          </Box>
          <Typography style={{ paddingLeft: "1rem", marginTop: "2rem", fontWeight: 'bold' }}>Media</Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row' }}>
            <TextField
              sx={{ m: 2, height: "45px", width: "360px" }}
              placeholder="Add Image"
            />
            <Button variant="contained"
              component="label"
              sx={{
                textTransform: 'capitalize',
                backgroundColor: '#4ab9a3',
                "&:hover": {
                  backgroundColor: "#4ab9a3"
                },
                ml: '-16px',
                mt: '16px',
                height: '55px'
              }}>
              <input
                style={{ marginLeft: "20px" }}
                accept="image/*"
                type="file"
                onChange={handleImageChange}
                id="image"
                hidden
              />

              <AttachFileIcon></AttachFileIcon>
              Choose File
            </Button>

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
                ml: '-16px',
                mt: '16px',
                height: '55px'
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

          <Typography style={{ paddingLeft: "1rem", marginTop: "2rem", fontWeight: 'bold' }}>Description</Typography>
          <TextField
            inputProps={{
              maxLength: 80,
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
              maxLength: 80,
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
            type='submit'
            onClick={() => { Router.push("/newsfeed") }}>
            Save</Button>

        </Box>
      </Box>



    </>
  )
}

export default CreatePost

