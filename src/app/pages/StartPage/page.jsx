"use client";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from "react";
import styles from "./StartPage.module.scss";
import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import NativeSelect from '@mui/material/NativeSelect';
import InputBase from '@mui/material/InputBase';
import { styled } from '@mui/material/styles';
import images from "../../../../public/images/earthBackground-removebg-preview.png"
const BootstrapInput = styled(InputBase)(({ theme }) => ({
  'label + &': {
    marginTop: theme.spacing(3),
  },
  '& .MuiInputBase-input': {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}));

const page = () => {

  const [anchorEl, setAnchorEl] = React.useState(null);  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

// >>>>>>> 8fb76c3d46d7e1ed68f05b6948728d6949b8d929
  
  return (
    <div className={styles.container}>
        <div className={styles.leftSection}>
        <img className={styles.img} src='/images/earthBackground-removebg-preview.png' />
        
        <div className={styles.locationPicker}>
            <div className={styles.icon} style={{marginBottom:"-2vw"}}>
              <img src="/images/locationImage-removebg-preview.png" alt="Location" />
            </div>
            <h2>Seems like you haven't picked a location yet.</h2>
            <p>Explore more venues by selecting a location</p>
            {/* <Button
              onClick={() => pickyourLocation()}
              className={styles.pickLocationButton}

            >
              Pick Your City
            </Button> */}
            {/* <Button
        id="basic-button"
        className={styles.pickLocationButton}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Pick Your City
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Bhilwara</MenuItem>
        <MenuItem onClick={handleClose}>Udaipur</MenuItem>
      </Menu> */}
      <FormControl sx={{  minWidth: 200, 
        backgroundColor: '#00b74a', // Background color for the entire FormControl
        borderRadius: '8px', // Optional: Add rounded corners
        '& .MuiInputLabel-root': { color: '#00b74a' }, // Label color
        '& .MuiOutlinedInput-root': {
          backgroundColor: '#00b74a', // Background color for the input box
          '& fieldset': { borderColor: '#00b74a' }, // Default border color
          '&:hover fieldset': { borderColor: 'green' }, // Hover border color
          '&.Mui-focused fieldset': { borderColor: 'red' }, // Focused border color
        },
        '& .MuiSelect-select': {
          backgroundColor: '#00b74a', // Background color of the Select input
        }, }} size="small" style={{width:"250px",marginLeft:"9vw",marginTop:"1vw"}}>
      <InputLabel id="demo-select-small-label" style={{color:"white",fontWeight:"600",marginLeft:"50px",fontSize:"18px"}}>Pick Your City</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        // value={age}
        label="Age"
        // onChange={handleChange}
      >
       
        <MenuItem value={10}>Udaipur</MenuItem>
        <MenuItem value={20}>Bhilwara</MenuItem>
      </Select>
    </FormControl>
          </div>
        </div>

      <div className={styles.rightSection}>
        <div className={styles.logo}>
          <h1 className={styles.logo}>READY-SET-GO</h1>
        </div>
        <h2>India's Leading Sports Facility Booking Platform</h2>
        <ul className={styles.features}>
          <li>
            <img src="/images/Two.svg" alt="Find & book venues" />
            Find & book nearby venues
          </li>
          <li>
            <img src="/images/PhoneLoaction.svg" alt="Find co-players" />
            Find co-players
          </li>
          <li>
            <img src="/images/coins.svg" alt="Playcoins & rewards" />
            Get playcoins & rewards
          </li>
          <li>
            <img src="/images/stadium.svg" alt="Join sports events" />
            Join nearby sports events
          </li>
        </ul>
      </div>
    </div>
  );
};

export default page;
