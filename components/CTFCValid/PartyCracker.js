import React, { useEffect, useState } from "react";
import Confetti from "react-confetti";

const PartyCracker = () => {
  const [isPartyTime, setIsPartyTime] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsPartyTime(false);
    }, 3000); // Stop the confetti after 3 seconds

    // Clean up the timer when the component unmounts
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const drawShape = (ctx, x, y, shape) => {
    if (shape === "circle") {
      //Draw a circle
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, 2 * Math.PI);
      ctx.fillStyle = "#800080"; // Set the color of the circle cracker
      ctx.fill();
      ctx.closePath();
    } else if (shape === "square") {
      // Draw a square
      ctx.beginPath();
      ctx.rect(x - 5, y - 5, 10, 10);
      ctx.fillStyle = "#ff0000"; // Set the color of the square cracker
      ctx.fill();
      ctx.closePath();
    } else if (shape === "triangle") {
      //Draw a triangle
      ctx.beginPath();
      ctx.moveTo(x, y - 5);
      ctx.lineTo(x + 5, y + 5);
      ctx.lineTo(x - 5, y + 5);
      ctx.closePath();
      ctx.fillStyle = "#6184ae"; // Set the color of the cracker
      ctx.fill();
    }
  };

  const shapes = ["square", "circle", "triangle"]; // Array of available shapes

  return (
    <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={isPartyTime}
      numberOfPieces={200}
      drawShape={(ctx) => {
        const shape = shapes[Math.floor(Math.random() * shapes.length)]; // Randomly choose a shape from the array
        const x = 0; // X-coordinate of the shape
        const y = 0; // Y-coordinate of the shape
        drawShape(ctx, x, y, shape); // Call the drawShape function to draw the selected cracker
      }}
    />
  );
};

export default PartyCracker;
