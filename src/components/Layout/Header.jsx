import React, { useState } from "react";
import {
  Box,
  AppBar,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Divider
} from "@mui/material";

import { Link,NavLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "../../styles/HeaderStyle.css";
import Logo from '../../images/logo.svg'

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // handle drawer toggle
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // drawer content for mobile
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2, color: "goldenrod" }}>
     <img src={Logo} alt="logo" height={50} width={200} />


      </Typography>
      <Divider/>
      <ul className="Mobile-nevigation">
        <li>
          <NavLink  to="/">Home</NavLink >
        </li>
        <li>
          <NavLink  to="/menu">Menu</NavLink >
        </li>
        <li>
          <NavLink  to="/about">About</NavLink >
        </li>
        <li>
          <NavLink  to="/contact">Contact</NavLink >
        </li>
      </ul>
    </Box>
  );

  return (
    <>
      <Box>
        {/* Top Navbar */}
        <AppBar position="fixed" component={"nav"} sx={{ bgcolor: "black" }}>
          <Toolbar>
            {/* Mobile Menu Button */}
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{
                mr: 2,
                display: { sm: "none",cursor:'pointer' },
              }}
            >
              <MenuIcon />
            </IconButton>

            {/* Logo / Title */}
            <Typography
              variant="h6"
              color={"goldenrod"}
              component="div"
              sx={{ flexGrow: 1 }}
            >
            <img src={Logo} alt="logo" height={50} width={250} />
            </Typography>

            {/* Desktop Navigation */}
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <ul className="nevigation-menu">
                <li>
                  <NavLink  to="/">Home</NavLink >
                </li>
                <li>
                  <NavLink  to="/menu">Menu</NavLink >
                </li>
                <li>
                  <NavLink  to="/about">About</NavLink >
                </li>
                <li>
                  <NavLink  to="/contact">Contact</NavLink >
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Mobile Drawer */}
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": { boxSizing: "border-box", width: 240 },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box >
           <Toolbar/>
        </Box>
       
      </Box>
    </>
  );
};

export default Header;
