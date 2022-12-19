import React from 'react'
import { Box, Divider, TextField, Button, Grid } from '@mui/material';
import InvestmentStrategyButton from './Components/InvestmentStrategyButton';
import RiskProfileButton from './Components/RiskProfileButton';
import MenuButton from './Components/Menubutton';
import AUMButton from './Components/AUMButton';
import RegionButton from './Components/RegionButton';
import ByNameButton from './Components/NameButton';
import AlphaButton from './Components/Alpha';
import SearchfundsCard from './Components/SearchfundsCard';
import {

  Typography,

  Container,
  ListItemButton,
  ListItemText,
  List,
  ListItem,
  Card,
  CardMedia,
  CardContent,
  CardActions,



} from "@mui/material";
import Avatar from '@mui/material/Avatar';
import AvatarGroup from '@mui/material/AvatarGroup';
import ForumIcon from '@mui/icons-material/Forum';
import CallIcon from '@mui/icons-material/Call';


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const SearchFunds = () => {


  return (
    <>

      <Box container sx={{ width: '100%' }} >
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <div
            style={{ color: "#123b62", fontWeight: 550, fontSize: "20px" }}
          >
            Funds
            <Divider
              variant="middle"
              sx={{ bgcolor: "#123b62", width: "50px", ml: 0 }}
            ></Divider>
          </div>
        </Box>

      </Box>
      <br />
      <br />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <TextField id="outlined-basic" label="Search Funds" variant="outlined" sx={{ width: '100ch' }}
        />
        <Button variant='contained' sx={{
          height: '56px',
          width: '9rem',
          mx: '20px',
          color: '#4ab9a3',
          textTransform: 'capitalize',
          backgroundColor: "white",
          outlineColor: '#4ab9a3',

          "&:hover": {
            backgroundColor: "#4ab9a3"
          },
        }}
        >
          Search</Button>
      </Box>
      <br />
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <InvestmentStrategyButton></InvestmentStrategyButton>
        <RiskProfileButton></RiskProfileButton>
        <AUMButton></AUMButton>
        <RegionButton></RegionButton>
        <ByNameButton></ByNameButton>
        <AlphaButton></AlphaButton>

      </Box>
      <br></br>

      <Grid container>
        {[1, 2, 3, 4, 5, 6, 7, 8]?.map((row: any, key: any) => {
          return (
            <Grid item md={3}>
              <Box sx={{ padding: "20px" }}>
                <Card sx={{ maxWidth: 445 }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                    alt="buildings"
                  />
                  <CardContent>
                    <Button variant='contained' sx={{
                      ml: 1,
                      height: '40px',
                      width: '9rem',
                      color: 'white',
                      textTransform: 'capitalize',
                      backgroundColor: "#4ab9a3",

                      "&:hover": {
                        backgroundColor: "#4ab9a3"
                      },
                    }}
                    >
                      + Follow Fund</Button>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, ml: 1 }}>
                      Event driven strategy focusing on mispriced securities across the capital structure in both debt and equity, mainly in North American corporate issues both long and short
                    </Typography>

                    <Box sx={{ display: 'flex', flexDirection: 'row', fontSize: '24px', mt: 1 }}>
                      <Typography variant="body2" color="black" sx={{ ml: 1 }} >
                        Office:
                      </Typography>
                      <Typography variant="body2" color="#4b83e2" sx={{ ml: 1 }}>
                        Paris France
                      </Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'row', fontSize: '24px', mt: 1 }}>
                      <Typography variant="body2" color="black" sx={{ ml: 1 }}>
                        AUM:
                      </Typography>
                      <Typography variant="body2" color="#4b83e2" sx={{ ml: 1 }}>
                        450m
                      </Typography>
                      <Typography variant="body2" color="black" sx={{ ml: 1 }} >
                        Strategy:
                      </Typography>
                      <Typography variant="body2" color="#4b83e2" sx={{ ml: 1 }}>
                        Higher vol
                      </Typography>
                    </Box>
                    <Divider></Divider>
                    <Typography variant="body2" color="black" sx={{ ml: 1, mt: 1 }} >
                      Contact Manager:
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button> */}
                    <Box sx={{ ml: 1 }}>
                      <ForumIcon></ForumIcon>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, ml: 1 }}>
                      Chat
                    </Typography>

                    <Box sx={{ ml: 1 }}>
                      <CallIcon></CallIcon>
                    </Box>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1, ml: 1 }}>
                      Schedule Meeting
                    </Typography>


                  </CardActions>
                </Card>
              </Box>
            </Grid>
          );
        })}
      </Grid>


    </>
  )
}

export default SearchFunds