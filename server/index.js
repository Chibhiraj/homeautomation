const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const uri = "mongodb+srv://chibhiraj:Chibhiraj@mydb.uzc7ogf.mongodb.net/meshrd";
const port = 3001;
const path = require("path");
const mqtt = require("mqtt");

app.use(cors());
app.use(express.json());

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dbConn = mongoose.connection;

dbConn.on("error", console.error.bind(console, "Connection Error"));
dbConn.on("open", function () {
  console.log("DB Connection successful");
});

app.use(express.static(path.join(__dirname, "../build")));

const mqttBrokerUrl = "mqtt://test.mosquitto.org:1883";

const options = {
  username: "your-username",
  password: "your-password",
};

// const client = mqtt.connect(mqttBrokerUrl, options);
const client = mqtt.connect(mqttBrokerUrl);

client.on("connect", () => {
  console.log("Connected to MQTT broker");
});

client.on("error", (err) => {
  console.error("MQTT connection error: ", err);
});

const SwitchStateSchema = new mongoose.Schema({
  Light1: { type: Boolean, default: false },
  Light2: { type: Boolean, default: false },
  TvFan: { type: Boolean, default: false },
  SofaFan: { type: Boolean, default: false },
  SpotLight: { type: Boolean, default: false },
  RLight: { type: Boolean, default: false },
  RFan: { type: Boolean, default: false },
  RAc: { type: Boolean, default: false },
  RWifi: { type: Boolean, default: false },
});

const SwitchState = mongoose.model("SwitchState", SwitchStateSchema);

app.post("/api/switches", async (req, res) => {
  try {
    const updatedState = await SwitchState.findOneAndUpdate({}, req.body, {
      new: true,
      upsert: true,
    });
    res.status(200).json(updatedState);
  } catch (error) {
    console.error("Error saving switch state:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/api/switches", async (req, res) => {
  try {
    const switchState = await SwitchState.findOne({});
    res.status(200).json(switchState);
  } catch (error) {
    console.error("Error fetching switch states:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put("/api/switches/:switchId", async (req, res) => {
  try {
    const switchId = req.params.switchId;
    const updatedSwitch = await SwitchState.findByIdAndUpdate(
      switchId,
      req.body,
      { new: true }
    );
    if (!updatedSwitch) {
      return res.status(404).json({ error: "Switch not found" });
    }
    res.status(200).json(updatedSwitch);
  } catch (error) {
    console.error("Error updating switch state:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete("/api/switches/:switchId", async (req, res) => {
  try {
    const switchId = req.params.switchId;
    const deletedSwitch = await SwitchState.findByIdAndDelete(switchId);
    if (!deletedSwitch) {
      return res.status(404).json({ error: "Switch not found" });
    }
    res.status(200).json({ message: "Switch deleted successfully" });
  } catch (error) {
    console.error("Error deleting switch state:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

app.post("/api/publish", (req, res) => {
  const topic = "device/command";

  const message = req.body;

  if (!topic || !message) {
    return res.status(400).json({ error: "Topic and message are required" });
  }

  client.publish(topic, message, (err) => {
    if (err) {
      console.error("Publish error: ", err);
      return res.status(500).json({ error: "Failed to publish message" });
    }
    return res.json({ success: true, topic, message });
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
