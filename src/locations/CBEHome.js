import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActions,
  Switch,
  Typography,
  Box,
} from "@mui/material";
import Navbar from "../pages/navbar";
import axios from "axios";

function YourComponent() {
  const [switchStates, setSwitchStates] = useState({
    Light1: false,
    Light2: false,
    TvFan: false,
    SofaFan: false,
    SpotLight: false,
    RLight: false,
    RFan: false,
    RAc: false,
    RWifi: false,
  });

  const [lastChangedSwitch, setLastChangedSwitch] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/switches")
      .then((response) => {
        if (response.data) {
          setSwitchStates(response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the switch states!", error);
      });
  }, []);

  const handleSwitchChange = (event) => {
    const { name, checked } = event.target;
    const updatedStates = { ...switchStates, [name]: checked };
    setSwitchStates(updatedStates);
    setLastChangedSwitch({ name, checked });

    axios
      .post("http://localhost:3001/api/switches", updatedStates)
      .then((response) => {
        console.log("Switch states saved to the database:", response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the switch states!", error);
      });
  };

  useEffect(() => {
    if (lastChangedSwitch) {
      const { name, checked } = lastChangedSwitch;
      console.log(`${name} is ${checked ? 1 : 0}`);
    }
  }, [lastChangedSwitch]);

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <Navbar />
      </div>
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          fontFamily: "Cinzel, serif",
          alignItems: "center",

        }}
      >
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={10} sm={4} md={3}>
            <Card sx={{ minWidth: 300 }}>
              <div style={{ backgroundColor: "#9e8a57" }}>
                <h3
                  className="text text-center pb-2 pt-1"
                  style={{ color: "white", fontFamily: "Cinzel, serif" }}
                >
                  Hall
                </h3>
              </div>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px" ,fontFamily: "Cinzel, serif"}}
                  >
                    Light 1
                  </Typography>
                  <Switch
                    checked={switchStates.Light1}
                    onChange={handleSwitchChange}
                    name="Light1"
                    inputProps={{ "aria-label": "Light 1" }}
                    style={{
                      color: switchStates.Light1 ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px",fontFamily: "Cinzel, serif" }}
                  >
                    Light 2
                  </Typography>
                  <Switch
                    checked={switchStates.Light2}
                    onChange={handleSwitchChange}
                    name="Light2"
                    inputProps={{ "aria-label": "Light 2" }}
                    style={{
                      color: switchStates.Light2 ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px",fontFamily: "Cinzel, serif" }}
                  >
                    TV Fan
                  </Typography>
                  <Switch
                    checked={switchStates.TvFan}
                    onChange={handleSwitchChange}
                    name="TvFan"
                    inputProps={{ "aria-label": "TV Fan" }}
                    style={{
                      color: switchStates.TvFan ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px",fontFamily: "Cinzel, serif" }}
                  >
                    Sofa Fan
                  </Typography>
                  <Switch
                    checked={switchStates.SofaFan}
                    onChange={handleSwitchChange}
                    name="SofaFan"
                    inputProps={{ "aria-label": "Sofa Fan" }}
                    style={{
                      color: switchStates.SofaFan ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={3}>
            <Card sx={{ minWidth: 275 }}>
              <div style={{ backgroundColor: "#9e8a57" }}>
                <h3
                  className="text text-center pb-2 pt-1"
                  style={{ color: "white", fontFamily: "Cinzel, serif",fontSize:'4' }}
                >
                  My Room
                </h3>
              </div>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px",fontFamily: "Cinzel, serif" }}
                  >
                    Light
                  </Typography>
                  <Switch
                    checked={switchStates.RLight}
                    onChange={handleSwitchChange}
                    name="RLight"
                    inputProps={{ "aria-label": "Light" }}
                    style={{
                      color: switchStates.RLight ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px" ,fontFamily: "Cinzel, serif"}}
                  >
                    Fan
                  </Typography>
                  <Switch
                    checked={switchStates.RFan}
                    onChange={handleSwitchChange}
                    name="RFan"
                    inputProps={{ "aria-label": "Fan" }}
                    style={{
                      color: switchStates.RFan ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px",fontFamily: "Cinzel, serif" }}
                  >
                    AC
                  </Typography>
                  <Switch
                    checked={switchStates.RAc}
                    onChange={handleSwitchChange}
                    name="RAc"
                    inputProps={{ "aria-label": "AC" }}
                    style={{
                      color: switchStates.RAc ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
              <CardActions>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="body1"
                    component="div"
                    sx={{ marginRight: "8px",fontFamily: "Cinzel, serif" }}
                  >
                    Wifi
                  </Typography>
                  <Switch
                    checked={switchStates.RWifi}
                    onChange={handleSwitchChange}
                    name="RWifi"
                    inputProps={{ "aria-label": "Wifi" }}
                    style={{
                      color: switchStates.RWifi ? "#FFB200" : "#808D7C",
                      "&.Mui-checked": {
                        color: "red",
                      },
                    }}
                  />
                </Box>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default YourComponent;
