import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardActions,
  Switch,
  Typography,
  Box,
  Table,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import Navbar from "../pages/navbar";
import axios from "axios";

function YourComponent() {

  const [hallSwitch, setHallSwitch] = useState({
    Light1: false,
    Light2: false,
    TvFan: false,
    SofaFan: false,
  });

  const [roomSwitch, setRoomSwitch] = useState({
    RLight: false,
    RFan: false,
    RAc: false,
    RWifi: false,
  });

  const [lastChangedHallSwitch, setLastChangedHallSwitch] = useState(null);
  const [lastChangedRoomSwitch, setLastChangedRoomSwitch] = useState(null);

  useEffect(() => {
    axios
      .get("https://msmartserver.onrender.com/api/hall")
      .then((response) => {
        if (response.data) {
          setHallSwitch(response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the switch states!", error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("https://msmartserver.onrender.com/api/myroom")
      .then((response) => {
        if (response.data) {
          setRoomSwitch(response.data);
        }
      })
      .catch((error) => {
        console.error("There was an error fetching the switch states!", error);
      });
  }, []);

  const handleHallSwitchChange = (event) => {
    const { name, checked } = event.target;
    const updatedStates = { ...hallSwitch, [name]: checked };
    setHallSwitch(updatedStates);
    setLastChangedHallSwitch({ name, checked });

    axios
      .post("https://msmartserver.onrender.com/api/hall", updatedStates)
      .then((response) => {
        console.log("Switch states saved to the database:", response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the switch states!", error);
      });
  };

  const handleRoomSwitchChange = (event) => {
    const { name, checked } = event.target;
    const updatedStates = { ...roomSwitch, [name]: checked };
    setRoomSwitch(updatedStates);
    setLastChangedRoomSwitch({ name, checked });

    axios
      .post("https://msmartserver.onrender.com/api/myroom", updatedStates)
      .then((response) => {
        console.log("Switch states saved to the database:", response.data);
      })
      .catch((error) => {
        console.error("There was an error saving the switch states!", error);
      });
  };

  // useEffect(() => {
  //   if (lastChangedHallSwitch) {
  //     const { name, checked } = lastChangedHallSwitch;
  //     console.log(`${name} is ${checked ? 1 : 0}`);
  //   }
  // }, [lastChangedHallSwitch]);

  // useEffect(() => {
  //   if (lastChangedRoomSwitch) {
  //     const { name, checked } = lastChangedRoomSwitch;
  //     console.log(`${name} is ${checked ? 1 : 0}`);
  //   }
  // }, [lastChangedRoomSwitch]);

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
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        Light 1
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={hallSwitch.Light1}
                        onChange={handleHallSwitchChange}
                        name="Light1"
                        inputProps={{ "aria-label": "Light 1" }}
                        style={{
                          color: hallSwitch.Light1 ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        Light 2
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={hallSwitch.Light2}
                        onChange={handleHallSwitchChange}
                        name="Light2"
                        inputProps={{ "aria-label": "Light 2" }}
                        style={{
                          color: hallSwitch.Light2 ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        TV Fan
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={hallSwitch.TvFan}
                        onChange={handleHallSwitchChange}
                        name="TvFan"
                        inputProps={{ "aria-label": "TV Fan" }}
                        style={{
                          color: hallSwitch.TvFan ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        Sofa Fan
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={hallSwitch.SofaFan}
                        onChange={handleHallSwitchChange}
                        name="SofaFan"
                        inputProps={{ "aria-label": "Sofa Fan" }}
                        style={{
                          color: hallSwitch.SofaFan ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Grid>
          <Grid item xs={10} sm={6} md={3}>
            <Card sx={{ minWidth: 275 }}>
              <div style={{ backgroundColor: "#9e8a57" }}>
                <h3
                  className="text text-center pb-2 pt-1"
                  style={{
                    color: "white",
                    fontFamily: "Cinzel, serif",
                    fontSize: "4",
                  }}
                >
                  My Room
                </h3>
              </div>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        Light
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={roomSwitch.RLight}
                        onChange={handleRoomSwitchChange}
                        name="RLight"
                        inputProps={{ "aria-label": "Light" }}
                        style={{
                          color: roomSwitch.RLight ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        Fan
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={roomSwitch.RFan}
                        onChange={handleRoomSwitchChange}
                        name="RFan"
                        inputProps={{ "aria-label": "Fan" }}
                        style={{
                          color: roomSwitch.RFan ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        AC
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={roomSwitch.RAc}
                        onChange={handleRoomSwitchChange}
                        name="RAc"
                        inputProps={{ "aria-label": "AC" }}
                        style={{
                          color: roomSwitch.RAc ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell sx={{ borderBottom: "none" }} align="right">
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ marginRight: "8px", fontFamily: "Cinzel, serif" }}
                      >
                        Wifi
                      </Typography>
                    </TableCell>
                    <TableCell sx={{ borderBottom: "none" }} align="left">
                      <Switch
                        checked={roomSwitch.RWifi}
                        onChange={handleRoomSwitchChange}
                        name="RWifi"
                        inputProps={{ "aria-label": "Wifi" }}
                        style={{
                          color: roomSwitch.RWifi ? "#FFB200" : "#808D7C",
                          "&.Mui-checked": {
                            color: "red",
                          },
                        }}
                      />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default YourComponent;
