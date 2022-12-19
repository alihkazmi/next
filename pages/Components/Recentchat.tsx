import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function Recentchat() {
  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" variant='square' src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >

              </Typography>
              {" John Doe talked to the Techverx about Hedge Funds to invest."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" variant='square' src="/static/images/avatar/2.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >

              </Typography>
              {" John Doe talked to the Techverx about Hedge Funds to invest."}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" variant='square' src="/static/images/avatar/3.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="John Doe"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
              </Typography>
              {" John Doe talked to the Techverx about Hedge Funds to invest."}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  );
}
