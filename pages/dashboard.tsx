import * as React from 'react';


import Paper from '@mui/material/Paper';

import { Box, Typography, Stack, Grid, TextField } from '@mui/material';

import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuButton from './Components/Menubutton';
import InfoTable from './Components/Table';
import InfoCard from './Components/Card';
import Router from 'next/router';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function Dashboard() {
  return (

    <Box sx={{ flexGrow: 1, flexWrap: 'wrap' }}>
      <Box>
        <Button variant='contained' sx={{
          float: 'right',
          textTransform: 'capitalize',
          backgroundColor: "#4ab9a3",
          color: 'white',
          px: 3,
          mr: '55px',
          mt: '18px',
          mb: '32px',

          "&:hover": {
            backgroundColor: "#4ab9a3"
          },
        }}
          onClick={() => { Router.push("/newsfeed") }}
        >
          Create Post</Button>

      </Box>
      <Grid container spacing={3}>

        <Grid item xs={5}>
          <Item>
            <Box sx={{
              gap: 2,

            }} >
              <Typography>Search</Typography>
              <TextField id="outlined-basic" label="Search Funds" variant="outlined" sx={{ width: '35ch' }}
              />
              <Button variant='contained' sx={{
                height: '56px',
                width: '9rem',
                mx: '20px',
                color: 'white',
                textTransform: 'capitalize',
                backgroundColor: "#4ab9a3",

                "&:hover": {
                  backgroundColor: "#4ab9a3"
                },
              }}
              >
                Search</Button>
            </Box>
            <br></br>
            <Box sx={{ backgroundColor: 'red', gap: 2 }}>
              <InfoTable></InfoTable>
            </Box>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <InfoCard></InfoCard>
          </Item>
        </Grid>
      </Grid>
    </Box >
  );
}
