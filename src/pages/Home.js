import React, { useState } from "react";
import login from "../img/10782835_19199259.jpg";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import bg from '../font and soze.jpg'
import smallBg from '../brand.png';  // Import the smaller device image
import { Image } from "react-bootstrap";
import { useMediaQuery } from '@mui/material';
import nav from "../nav.png"
const Home = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const isSmallScreen = useMediaQuery('(max-width: 600px)'); // Adjust the breakpoint as needed

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
    
    </Typography>
    <IconButton edge="end" color="inherit" aria-label="menu"></IconButton>
    <Button color="inherit" component={Link} to="/" style={{ margin: '0 15px' }}>
      Home
    </Button>
    <Button color="inherit" component={Link} to="/contact" style={{ margin: '0 15px' }}>
      Contact
    </Button>
    <Button color="inherit" component={Link} to="/signpage" style={{ margin: '0 15px' }}>
      Services
    </Button>
    <Button color="inherit" component={Link} to="/signpage" style={{ margin: '0 15px' }}>
      Products
    </Button>
    <Button color="inherit" component={Link} to="/signpage" style={{ margin: '0 15px' }}>
      About
    </Button>
  </Toolbar>
</AppBar>

      <div style={{ position: 'relative', display: 'inline-block'}}>
        <Image src={isSmallScreen ? smallBg : bg}  />
        <Button
          onClick={handleClickOpen}
          variant="contained"
          color="secondary"
          style={{
            position: 'absolute',
            top: '70%',
            left: '60%',
            transform: 'translate(-70%, -50%)',
            backgroundColor: "#3E2723 ",
            fontFamily: 'Cenzil'
          }}
        >
          Login/SignUp
        </Button>
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
