
import React from "react";
import {
  Typography,
  Container,
  Box,
  Divider,
  Button,
  Card,
  CardMedia,
  CardHeader,
  TextField,
  Avatar,
} from "@mui/material";
import Router from "next/router";
import MenuButton from "./Components/Menubutton";
import EditIcon from '@mui/icons-material/Edit';
import Menubuttonnewsfeed from "./Components/MenuButtonNewsfeed";
import Demotable from "./Components/Demotable";
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';
import Recentchat from "./Components/Recentchat";
import moment from "moment";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import Link from "@mui/material";
const NewsFeed = (props: any) => {

  var retrievedList: any = window.localStorage.getItem("List");
  var listNew = JSON.parse(retrievedList);

  console.log("ListNew", listNew);
  return (
    <>
      <Box sx={{ backgroundColor: "#d6dee963" }}>
        <Container>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-start",
              flexDirection: "row",
              // mt: "-70px",
              position: "absolute",
            }}
          >
            <Typography
              sx={{
                color: "#8b8b8b",
                fontSize: "14px",
                mt: 1,
                fontFamily: "Jost, sans-serif",
              }}
            >
              Global Highland
              <KeyboardArrowRightIcon
                sx={{ fontSize: "14px", color: "#8b8b8b", mt: 1.5, }}
              />
              <Typography
                sx={{
                  display: "contents",
                  color: "#356fa6",
                  fontSize: "14px",
                  mt: 3,
                  // position: "absolute",
                }}
              >
                NewsFeed
              </Typography>
            </Typography>


          </Box>
          <Box sx={{ display: "flex", justifyContent: "end", }}>

            <Box sx={{ py: 1 }}>


              <Button
                onClick={() => {
                  Router.push("/createpost");
                }}
                sx={{
                  backgroundColor: "#4ab9a3",
                  color: "white",
                  textTransform: "capitalize",
                  px: 3,
                  py: 1,
                  mb: 4,
                  "&:hover": { backgroundColor: "#3d9382" },
                }}
              >
                Create Post
              </Button>

            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', position: 'absolute' }}>
            {/* Seacrh box */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Card

                sx={{
                  borderRadius: "12px",
                  mb: 3,
                  minHeight: "300px",
                  width: "430px",
                }}
              >
                <Box sx={{ mt: 2, ml: 2 }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Search
                    <DragIndicatorIcon sx={{ float: 'right', mr: 3 }}></DragIndicatorIcon>
                  </Typography>


                </Box>

                <Box sx={{ pt: 2, pl: 1 }}>


                  <TextField id="outlined-basic" label="Search Funds" variant="outlined" sx={{ width: '35ch' }}
                  />
                  <Button variant='contained' sx={{
                    color: "#4ab9a3",
                    variant: "outlined",
                    outlineColor: "#4ab9a3",
                    textTransform: 'capitalize',
                    backgroundColor: "white",
                    height: '3rem',

                    width: '7rem',
                    "&:hover": {
                      backgroundColor: "whitesmoke"
                    },
                  }}
                  >
                    Search</Button>
                </Box>
                <Menubuttonnewsfeed></Menubuttonnewsfeed>
              </Card>

            </Box>
            {/* //demo table */}
            <Box>

              <Card

                sx={{
                  borderRadius: "12px",
                  mb: 3,
                  minHeight: "300px",
                  width: "430px",
                }}
              >
                <Typography sx={{ fontWeight: 'bold', ml: 1, my: 1 }}>Fund Watch List</Typography>
                <br></br>
                <Demotable></Demotable>


              </Card>

            </Box>
            {/* //recent chat */}
            <Box sx={{}}>

              <Card

                sx={{
                  borderRadius: "12px",
                  mb: 3,
                  minHeight: "300px",
                  width: "430px",
                }}
              >
                <Box sx={{ mt: 2, ml: 2 }}>
                  <Typography sx={{ fontWeight: 'bold' }}>Recent Chat

                  </Typography>
                  <Divider></Divider>
                  <br></br>
                  <Recentchat></Recentchat>
                  <br></br>
                  <Button sx={{ float: 'right', mb: 2, mr: 2, color: "#4ab9a3", }}>View More</Button>
                </Box>


              </Card>

            </Box>
          </Box>


          <Box sx={{ display: "flex", justifyContent: "flex-end", flexDirection: 'column', alignItems: 'end' }}>

            {listNew?.map((value: any, key: any) => {
              console.log(value, "---------value")
              return (
                <>
                  {" "}
                  <Card
                    sx={{
                      borderRadius: "12px",
                      mb: 3,
                      minHeight: "500px",
                      width: "700px",
                      my: "10px"
                    }}
                  >

                    <Box key={value.username} sx={{ p: 5 }}>
                      <Box sx={{ display: 'flex', justifyContent: "flex-end" }}>
                        <EditIcon
                          onClick={() => {
                            Router.push({
                              pathname: '/editpost',
                              query: { id: value.identity },
                            })
                          }}>

                        </EditIcon>
                      </Box>
                      <Box sx={{ display: 'flex', flexDirection: ' row' }}>
                        <Avatar sx={{
                          backgroundColor: 'black',
                          width: 70,
                          height: 70,
                        }} variant="square">
                          N
                        </Avatar>
                        <Typography sx={{ color: "black", fontWeight: "bold", px: 1 }}>
                          {" "}
                          {value?.username}<br></br>
                          <Typography sx={{ fontSize: '14px', color: '#8b8b8b' }}>
                            {value?.company}
                            {/* {" "}{value?.identity} */}
                          </Typography>
                          <Typography sx={{ fontSize: '14px', color: '#8b8b8b' }}>
                            {value?.designation}
                            {/* {" "}{value?.identity} */}
                          </Typography>
                        </Typography>
                        <br></br>
                      </Box>
                      <br></br>
                      <Typography sx={{ fontSize: '14px', color: '#8b8b8b' }}>
                        {" "}
                        {value?.pitch}
                        <br></br>
                        <br></br>
                        {value?.description}
                      </Typography>
                      <CardMedia
                        sx={{ mt: 1 }}
                        component="img"
                        alt="img"
                        height="290px"
                        // image={value?.image[0]}
                        image={
                          "https://images.unsplash.com/photo-1528648619815-869a48b4030c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        }
                      >




                      </CardMedia>
                      <br></br>
                      <Box sx={{
                        float: 'right'
                      }}>
                        <Typography>
                          Posted Date:{" "}

                          {moment(value.created_at).format("ll")}

                        </Typography>
                      </Box>

                    </Box>
                  </Card>

                </>

              );
            })}


          </Box>
        </Container >
      </Box >
    </>
  );
};

export default NewsFeed;





