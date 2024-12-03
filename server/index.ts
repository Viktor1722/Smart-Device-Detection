import express from "express";
import mqttClient from "./mqttClient";
import cors from "cors";

const app = express();
const port = 3001;

app.use(cors());

app.use(express.json());
// Example route to publish a message
app.post("/publish", (req, res) => {
  const topic = req.body.topic;
  const message = req.body.message;

  mqttClient.publish(topic, message, (err) => {
    if (err) {
      return res.status(500).send("Failed to publish message");
    }
    res.status(200).send({ success: true });
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
