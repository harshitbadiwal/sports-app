"use client"
// components/TemporaryDrawer.js


import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
export default function SideBar() {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 350 }} role="presentation" onClick={toggleDrawer(false)} style={{background:"black",height:"100%",color:"white"}}>
      
      <Divider />
      <List>
        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => ( */}
          <ListItem>
            <ListItemButton>
              <ListItemText>
              <a href="#features">Features</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
            {/* <Divider /> */}
          <ListItem>
            <ListItemButton>
              <ListItemText>
              <a href="#venues">Venues</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* <Divider /> */}
          <ListItem>
            <ListItemButton>
              <ListItemText>
              <a href="#contact">Contact</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* <Divider /> */}
          <ListItem>
            <ListItemButton>
              <ListItemText>
              <a href="/pages/AboutUs">About Us</a>
              </ListItemText>
            </ListItemButton>
          </ListItem>
          {/* <Divider /> */}
        {/* ))} */}
      </List>
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true) }><MenuIcon style={{color:"white"}}  fontSize="large" /></Button>
      <Drawer open={open} onClose={toggleDrawer(false)} >
        {DrawerList}
      </Drawer>
    </div>
  );
}
