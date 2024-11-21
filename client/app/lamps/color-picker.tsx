import React, { useState } from "react";

const ColorPicker: React.FC = () => {
  const [angle, setAngle] = useState<number>(0); // State for the angle of the handle
  const [intensity, setIntensity] = useState<number>(55); // State for intensity (optional)

  // Convert angle to an RGB color (optional if you want the selected color value)
  const getColorFromAngle = (angle: number): string => {
    const hue = Math.round(angle); // Convert angle to hue (0-360)
    return `hsl(${hue}, 100%, 50%)`;
  };

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate angle from center of the circle
    const x = e.clientX - rect.left - centerX;
    const y = e.clientY - rect.top - centerY;
    const calculatedAngle = (Math.atan2(y, x) * (180 / Math.PI) + 360) % 360;

    setAngle(calculatedAngle);
  };

  return (
    <div className="relative flex items-center justify-center w-64 h-64">
      {/* Outer Color Ring */}
      <div
        className="absolute rounded-full bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 via-purple-500 to-red-500 w-full h-full"
        style={{
          mask: "radial-gradient(circle, transparent 60%, black 61%)",
          WebkitMask: "radial-gradient(circle, transparent 60%, black 61%)",
        }}
      ></div>

      {/* Center Content */}
      <div className="relative z-10 flex flex-col items-center">
        <span className="text-2xl font-bold">{intensity}%</span>
        <span className="text-gray-600">Intensity</span>
      </div>

      {/* Draggable Color Handle */}
      <div
        className="absolute w-8 h-8 bg-white rounded-full shadow-md cursor-pointer"
        style={{
          top: `calc(50% - 16px + ${Math.sin((angle * Math.PI) / 180) * 80}px)`,
          left: `calc(50% - 16px + ${
            Math.cos((angle * Math.PI) / 180) * 80
          }px)`,
        }}
        onMouseDown={(e) => {
          const moveHandler = (event: MouseEvent) => handleMove(event as any);
          const upHandler = () => {
            document.removeEventListener("mousemove", moveHandler);
            document.removeEventListener("mouseup", upHandler);
          };

          document.addEventListener("mousemove", moveHandler);
          document.addEventListener("mouseup", upHandler);
        }}
      ></div>
    </div>
  );
};

export default ColorPicker;
