"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import lightLine from "@/public/light_line.svg";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Toggle } from "@/components/ui/toggle";
import ColorPicker from "./color-picker";
import { Car } from "lucide-react";

const Home = () => {
  const [lampState, setLampState] = useState("OFF");
  const [brightness, setBrightness] = useState(100);
  const [color, setColor] = useState("#FFFFFF");
  const [colorTemp, setColorTemp] = useState(4000); // Kelvin
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn((prev) => !prev);
    sendCommand(isOn ? "off" : "on", { state: isOn ? "OFF" : "ON" });
  };

  const sendCommand = (command: string, payload: object) => {};

  return (
    <Card className="p-6 flex flex-col items-center">
      <CardHeader className="flex flex-row items-center gap-20">
        <b className="mt-2">Calex c60CW</b>
        <div className="mt-12"></div>
      </CardHeader>
      <CardContent className="w-full">
        <div className="flex items-center justify-center ">
          <ColorPicker />
        </div>
        <Label>Brightness</Label>

        <Card className="w-full">
          <Slider defaultValue={[33]} max={100} step={1} />
          <Label>Color Temperature (K)</Label>

          <Slider defaultValue={[33]} max={100} step={1} className="w-full" />
          <text>{colorTemp} K</text>
        </Card>
      </CardContent>
      <CardFooter>
        {" "}
        <Toggle
          variant="outline"
          onClick={handleToggle}
          style={{
            backgroundColor: isOn ? "green" : "red",
            color: "white",
            padding: "30px",
          }}
        >
          {" "}
          <Image src={lightLine} alt={""} />
        </Toggle>
      </CardFooter>
    </Card>
  );
};

export default Home;
