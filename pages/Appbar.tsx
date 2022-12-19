// import * as React from 'react';
// import Image from 'next/image';
// import Router from 'next/router';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// import Avatar from '@mui/material/Avatar';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import Badge from '@mui/material/Badge';
// import { List, ListItemButton, ListItem } from '@mui/material';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MailIcon from '@mui/icons-material/Mail';
// import MoreIcon from '@mui/icons-material/MoreVert';

// const Header = () => {

//   const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
//   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
//     React.useState<null | HTMLElement>(null);
//   const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
//   const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
//   const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);

//   const isMenuOpen = Boolean(anchorEl);
//   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

//   const pages = [{ title: 'Dashboard', path: "/Dashboard" },
//   { title: 'Newsfeed', path: "/Newsfeed" },
//   { title: 'SearchFunds', path: "/SearchFunds" },
//   { title: 'MyFunds', path: "/MyFunds" },
//   { title: 'Profile', path: "/Profile" }];

//   const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

//   const handleMobileMenuClose = () => {
//     setMobileMoreAnchorEl(null);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//     handleMobileMenuClose();
//   };

//   const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
//     setMobileMoreAnchorEl(event.currentTarget);
//   };

//   const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElNav(event.currentTarget);
//   };
//   const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
//     setAnchorElUser(event.currentTarget);
//   };

//   const handleCloseNavMenu = () => {
//     setAnchorElNav(null);
//   };

//   const handleCloseUserMenu = () => {
//     setAnchorElUser(null);
//   };
//   const handleSelectedIndex = (event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
//     setSelectedIndex(index);
//   }

//   return (
//     <>
//       <AppBar position="static" sx={{ backgroundColor: '#123b62' }}>
//         <Container maxWidth="xl">
//           <Toolbar disableGutters >
//             <a href='/'>
//               <Image src='/img.png' alt='imagee' width={140} height={80} />
//             </a>
//             <Box sx={{
//               flexGrow: 1, display: { xs: 'flex', md: 'none' },

//             }}>
//               <IconButton
//                 size="large"
//                 aria-label="account of current user"
//                 aria-controls="menu-appbar"
//                 aria-haspopup="true"
//                 onClick={handleOpenNavMenu}
//                 color="inherit"
//               >
//                 <MenuIcon />
//               </IconButton>

//               <Menu
//                 id="menu-appbar"
//                 anchorEl={anchorElNav}
//                 anchorOrigin={{
//                   vertical: 'bottom',
//                   horizontal: 'left',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'left',
//                 }}
//                 open={Boolean(anchorElNav)}
//                 onClose={handleCloseNavMenu}
//                 sx={{
//                   display: { xs: 'block', md: 'none', p: '0' },

//                 }}
//               >
//                 {pages.map((page) => (
//                   <MenuItem key={page.title} onClick={handleCloseNavMenu}>
//                     <Typography textAlign="center" >{page.title}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>

//             <List sx={{
//               flexGrow: 1, display: { xs: 'none', md: 'flex' }, whiteSpace: 'nowrap'

//             }}>
//               {pages.map((page, index) => (
//                 <ListItem key={page.title}
//                   onClick={() => { Router.push(page.path) }}

//                   sx={{
//                     px: -2,
//                     "& .Mui-selected": {
//                       color: "#4ab9a3",
//                       textDecoration: 'underline',
//                       backgroundColor: 'transparent'

//                     }

//                   }}>
//                   <ListItemButton
//                     selected={selectedIndex === index}
//                     onClick={(event) => (handleSelectedIndex(event, index))}
//                     sx={{
//                       my: 2, color: 'white',
//                       display: 'block',
//                       textTransform: 'capitalize',
//                       ml: '20px',
//                       width: "100px",
//                       "&:hover": {
//                         color: "#4ab9a3",
//                         textDecoration: 'underline',
//                         backgroundColor: 'transparent'
//                       },

//                     }}
//                   >
//                     {page.title}
//                   </ListItemButton>
//                 </ListItem>
//               ))}
//             </List>
//             <Box sx={{ flexGrow: 1, }}>
//               <Toolbar>
//                 <Box sx={{ flexGrow: 1 }} />
//                 <Box sx={{ display: { xs: 'none', md: 'flex' }, backgroundColor: '#123b62' }}>
//                   <IconButton size="large" aria-label="show 4 new mails" color="inherit">
//                     <Badge badgeContent={4} color="error">
//                       <MailIcon />
//                     </Badge>
//                   </IconButton>
//                   <IconButton
//                     size="large"
//                     aria-label="show 17 new notifications"
//                     color="inherit"
//                   >
//                     <Badge badgeContent={17} color="error">
//                       <NotificationsIcon />
//                     </Badge>
//                   </IconButton>
//                   <IconButton
//                     size="large"
//                     edge="end"
//                     aria-label="account of current user"
//                     aria-controls="primary-search-account-menu"
//                     aria-haspopup="true"
//                     color="default"
//                   >
//                   </IconButton>
//                 </Box>
//                 <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
//                   <IconButton
//                     size="large"
//                     aria-label="show more"
//                     aria-controls='primary-search-account-menu-mobile'
//                     aria-haspopup="true"
//                     onClick={handleMobileMenuOpen}
//                     color="inherit"
//                   >
//                     <MoreIcon />
//                   </IconButton>
//                 </Box>
//               </Toolbar>
//               <Menu
//                 anchorEl={mobileMoreAnchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 id='primary-search-account-menu-mobile'
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={isMobileMenuOpen}
//                 onClose={handleMobileMenuClose}
//               >
//                 <MenuItem>
//                   <IconButton size="large" aria-label="show 4 new mails" color="default">
//                     <Badge badgeContent={4} color="error">
//                       <MailIcon />
//                     </Badge>
//                   </IconButton>
//                   <p>Messages</p>
//                 </MenuItem>
//                 <MenuItem>
//                   <IconButton
//                     size="large"
//                     aria-label="show 17 new notifications"
//                     color="inherit"
//                   >
//                     <Badge badgeContent={17} color="error">
//                       <NotificationsIcon />
//                     </Badge>
//                   </IconButton>
//                   <p>Notifications</p>
//                 </MenuItem>
//               </Menu>
//               <Menu
//                 anchorEl={anchorEl}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 id="primary-search-account-menu"
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={isMenuOpen}
//                 onClose={handleMenuClose}
//               >
//               </Menu>
//             </Box>
//             <Box sx={{ flexGrow: 0 }}>
//               <Tooltip title="Open settings">
//                 <IconButton onClick={handleOpenUserMenu} sx={{ p: 0, pr: '85px' }}>
//                   <Avatar variant='square' alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
//                   <Typography sx={{ color: 'white', pl: '1rem' }}>Jennifer <KeyboardArrowDownIcon sx={{ position: 'absolute' }} />
//                   </Typography>
//                 </IconButton>
//               </Tooltip>
//               <Menu
//                 sx={{ mt: '45px' }}
//                 id="menu-appbar"
//                 anchorEl={anchorElUser}
//                 anchorOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 keepMounted
//                 transformOrigin={{
//                   vertical: 'top',
//                   horizontal: 'right',
//                 }}
//                 open={Boolean(anchorElUser)}
//                 onClose={handleCloseUserMenu}
//               >
//                 {settings.map((setting) => (
//                   <MenuItem key={setting} onClick={handleCloseUserMenu}>
//                     <Typography textAlign="center">{setting}</Typography>
//                   </MenuItem>
//                 ))}
//               </Menu>
//             </Box>
//           </Toolbar>
//         </Container>
//       </AppBar >
//     </>
//   );
// }
// export default Header;



import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Image from "next/image";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MoreIcon from "@mui/icons-material/MoreVert";
import ChatBubbleRoundedIcon from "@mui/icons-material/ChatBubbleRounded";
import { List, ListItem, ListItemButton, Divider } from "@mui/material";
import KeyboardArrowDownRoundedIcon from "@mui/icons-material/KeyboardArrowDownRounded";
import Link from "next/link";
import Router from "next/router";
import { title } from "process";

const pages = [
  { title: "Dashboard", path: "/dashboard" },
  { title: "News Feed", path: "/newsfeed" },
  { title: "Search Funds", path: "/searchfunds" },
  { title: "My Funds", path: "/myfunds" },
  { title: "Profile", path: "/profile" },
];
const settings = ["Account", "Logout"];

function ResponsiveAppBar() {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    setSelectedIndex(index);
  };

  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <IconButton size="large" aria-label="show 4 new mails" color="inherit">
          <Badge badgeContent={4} color="error">
            <ChatBubbleRoundedIcon />
          </Badge>
        </IconButton>
        <p>Messages</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="show 17 new notifications"
          color="inherit"
        >
          <Badge badgeContent={17} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
        <p>Notifications</p>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <p>Profile</p>
      </MenuItem>
    </Menu>
  );
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <>
      <AppBar position="static">
        <Container maxWidth="xl" sx={{ backgroundColor: "#123b62" }}>
          <Toolbar disableGutters>
            <a href="/">
              <Image
                src="/img2.png"
                alt="logo"
                width={175}
                height={70}
                style={{
                  padding: "9px",
                  paddingLeft: "3rem",
                  marginRight: "2rem",
                }}
              />
            </a>
            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page.title}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <List sx={{ pl: 21, display: "flex", flexDirection: "row" }}>
              {pages.map((page, index) => (
                <>
                  <ListItem
                    onClick={() => {
                      Router.push(page.path);
                    }}
                    key={page.title}
                    sx={{
                      ml: -9,
                      pl: 3,
                      width: "190px",
                      "& .Mui-selected": {
                        color: "#4ab9a3 !important",
                        backgroundColor: "transparent !important",
                        textDecoration: "underline",
                      },
                    }}
                  >
                    <ListItemButton
                      selected={selectedIndex === index}
                      onClick={(event) => handleListItemClick(event, index)}
                      sx={{
                        my: 2,
                        color: "white",
                        textTransform: "capitalize",
                        ml: 3,

                        "&:hover": {
                          color: "#4ab9a3",
                          backgroundColor: "transparent",
                          textDecoration: "underline",
                        },
                      }}
                    >
                      {page.title}
                    </ListItemButton>
                  </ListItem>
                </>
              ))}
            </List>

            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              <IconButton
                size="large"
                aria-label="show 4 new mails"
                color="inherit"
              >
                <Badge
                  // badgeContent={4}
                  color="error"
                >
                  <ChatBubbleRoundedIcon />
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge
                  // badgeContent={17}
                  color="error"
                >
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Box>
            <Box sx={{ display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
              >
                <MoreIcon />
              </IconButton>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Box sx={{ display: "flex", justifyContent: "center", pl: 2 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Typography sx={{ color: "white", ml: 1 }}>
                    Jennifer
                    <KeyboardArrowDownRoundedIcon
                      sx={{ position: "absolute" }}
                    />
                  </Typography>
                </IconButton>
              </Box>

              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
        {renderMobileMenu}
      </AppBar>

    </>
  );
}
export default ResponsiveAppBar;
