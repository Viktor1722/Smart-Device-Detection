"use client";

import { useState } from "react";
import axios from "axios";

export default function Publish() {
  const [topic, setTopic] = useState("");
  const [message, setMessage] = useState("");

  const handlePublish = async () => {
    try {
      const response = await axios.post("http://localhost:3001/publish", {
        topic,
        message,
      });
      alert(response.data);
    } catch (error) {
      console.error("Failed to publish message:", error);
      alert("Error publishing message");
    }
  };

  return (
    <div>
      <h1>Publish MQTT Message</h1>
      <input
        type="text"
        placeholder="Topic"
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <input
        type="text"
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handlePublish}>Publish</button>
    </div>
  );
}
