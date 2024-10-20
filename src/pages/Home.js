import React, { useState } from "react";
import login from "../img/10782835_19199259.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import bg from '../img/font and soze.jpg';
import smallBg from '../img/brand.png';  // Import the smaller device image
import { Image } from "react-bootstrap";
import { AppBar, Toolbar, Typography, IconButton, Button, useMediaQuery, Drawer, List, ListItem, ListItemText } from '@mui/material';
import nav from "../img/nav.png";

const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Detects if on mobile
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const drawerItems = (
    <List>
      {['Home', 'Contact', 'Services', 'Products', 'About'].map((text, index) => (
        <ListItem  key={text} component={Link} to={text.toLowerCase()}>
          <ListItemText primary={text} />
        </ListItem>
      ))}
    </List>
  );

  function useradmin() {
    var mail = document.getElementById("maillogin").value;
    var password = document.getElementById("passwordlogin").value;

    if (mail === "admin" && password === "admin") {
      navigate("/CBEHome");
    } else if (mail === "user" && password === "user") {
      navigate("/userpage");
    }
  }

  return (
    <div>
      <AppBar position="fixed" style={{ backgroundColor: '#2e3e57' }}>
        <Toolbar>
          <img src={nav} alt="logo" style={{ height: 40 }} />
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            {/* Optional Logo or Title */}
          </Typography>
          <IconButton edge="end" color="inherit" aria-label="menu" onClick={toggleDrawer(true)}>
            <MenuIcon />
          </IconButton>
          <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)} style={{paddingBottom:"6"}}>
            {drawerItems}
          </Drawer>
        </Toolbar>
      </AppBar>

      <div style={{ position: 'relative', display: 'inline-block', width: '100%', paddingTop:isSmallScreen ? '75px':'', textAlign: 'center' }}>
        
        {/* Title */}
        {isSmallScreen &&

        <h2 style={{ fontFamily: 'Cenzil', fontSize: '24px', color: '#3E2723',paddingTop:'20px' }}>
          Welcome to mSmart automation
        </h2>
        } 
        
        {/* Background Image */}
        <Image src={isSmallScreen ? smallBg : bg} style={{ width: '100%', paddingBottom: isSmallScreen ? '100px' : '',paddingTop: isSmallScreen ? '50px' : '50px' }} />
    
        {/* Login/SignUp Button */}
        <Button
          onClick={handleClickOpen}
          variant="contained"
          color="secondary"
          style={{
            position: isSmallScreen ? 'relative' : 'absolute',
            top: isSmallScreen ? 'unset' : '70%',
            left: isSmallScreen ? 'unset' : '60%',
            transform: isSmallScreen ? 'none' : 'translate(-70%, -50%)',
            backgroundColor: "#3E2723",
            fontFamily: 'Cenzil',
          }}
        >
          Login/SignUp
        </Button>

        {isSmallScreen &&
        <footer style={{ marginTop: '20px', fontSize: '12px', color: '#666',paddingTop:'70px' }}>
          <p>&copy; 2024 mSmart automation. All rights reserved.</p>
          <p>Privacy Policy | Terms of Service</p>
        </footer>
        }
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <div className="flex justify-between items-center">
            <div className="ml-auto" style={{ paddingLeft: 10, fontFamily: 'Cenzil' }}>
              <i
                className="fas fa-times cursor-pointer"
                onClick={handleClose}
              ></i>
            </div>
          </div>
          <div className="flex flex-col justify-center px-6 py-12 lg:px-8 bg-white" style={{ fontFamily: 'Cenzil' }}>
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                Login to your account
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6" action="" method="POST">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Email or Phone
                  </label>
                  <div className="mt-2">
                    <input
                      id="maillogin"
                      placeholder="Enter Email or Phone number"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium leading-6 text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="mt-2">
                    <input
                      id="passwordlogin"
                      name="password"
                      placeholder="Enter Password"
                      type="password"
                      autoComplete="current-password"
                      required
                      className="pl-5 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div>
                  <div className=""><small ><a href="">
                    Forgot Password?
                  </a>
                  </small>
                  </div>
                </div>

                <div>
                  <button
                    type="button"
                    onClick={useradmin}
                    style={{ backgroundColor: "#3E2723 " }}
                    className="flex w-full justify-center rounded-md  px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Log in
                  </button>
                  <div>
                    <div className="text-center pt-2">
                      Not a member ?
                      <Button size="small">
                        <Link to="/signpage">SignUp now</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Home;
