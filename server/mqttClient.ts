import mqtt from "mqtt";

const options = {
  host: "localhost",
  port: 1883,
};

const client = mqtt.connect(options);

client.on("connect", () => {
  console.log("Connected to MQTT broker");
});

client.on("error", (err) => {
  console.error("MQTT connection error:", err);
});

export default client;
