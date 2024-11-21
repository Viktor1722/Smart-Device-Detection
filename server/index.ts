// Import necessary libraries
import express from "express";
import mqtt from "mqtt";

const app = express();
const PORT = 3001;

const mqttClient = mqtt.connect("mqtt://localhost:1883/");

mqttClient.on("connect", () => {
  console.log("Connected to MQTT broker");

  mqttClient.subscribe("smart-devices", (err) => {
    if (err) {
      console.error("Subscription error:", err);
    } else {
      console.log("Subscribed to topic");
    }
  });
});

mqttClient.on("message", (topic, message) => {
  console.log(`Received message on topic ${topic}: ${message.toString()}`);
});

app.post("/lamp/on", (req, res) => {
  mqttClient.publish("smart-devices/set", JSON.stringify({ state: "ON" }));
  res.send("Lamp turned ON");
});

app.post("/lamp/off", (req, res) => {
  mqttClient.publish("smart-devices/set", JSON.stringify({ state: "OFF" }));
  res.send("Lamp turned OFF");
});

app.listen(PORT, () => {
  console.log(`Express server is running on http://localhost:${PORT}`);
});
