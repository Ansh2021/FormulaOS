import { useEffect, useRef, useState } from "react";

export default function Clock() {
  //really only for the digital time shown with the analog clock
  const [time, setTime] = useState(new Date());
  const [is12Hour, setIs12Hour] = useState(false);

  const clockDrawRef = useRef<number>(0);

  useEffect(() => {
    const dateFormatter = Intl.DateTimeFormat(undefined, {
      hour: "numeric",
    }).resolvedOptions();
    setIs12Hour(dateFormatter.hour12 as boolean);
    const interval = setInterval(() => setTime(new Date()), 1000);

    return () => clearInterval(interval);
  }, []);

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const drawTime = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "rgb(30, 38, 54)";
      ctx.strokeStyle = "#000000";
      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 50, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();

      //https://www.desmos.com/calculator/e9c3obh434
      for (let i = 0; i < 12; i++) {
        const angle = ((i * 30 - 90) * Math.PI) / 180;

        ctx.strokeStyle = "#f4f3f2";
        ctx.lineWidth = 1;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(
          canvas.width / 2 + 40 * Math.cos(angle),
          canvas.height / 2 + 40 * Math.sin(angle),
        );
        ctx.lineTo(
          canvas.width / 2 + 48 * Math.cos(angle),
          canvas.height / 2 + 48 * Math.sin(angle),
        );
        ctx.stroke();
      }

      const now = new Date();
      const hour = now.getHours();
      const minute = now.getMinutes();
      const second = now.getSeconds();

      const normalizedHour = hour % 12;

      const hourHandAngle =
        (normalizedHour * Math.PI) / 6 +
        (minute * Math.PI) / (6 * 60) +
        (second * Math.PI) / (360 * 60) -
        Math.PI / 2;
      ctx.beginPath();
      ctx.fillStyle = "#f4f3f2";
      ctx.lineCap = "round";
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(
        canvas.width / 2 + 30 * Math.cos(hourHandAngle),
        canvas.height / 2 + 30 * Math.sin(hourHandAngle),
      );
      ctx.stroke();

      const minuteHandAngle =
        (minute * Math.PI) / 30 + (second * Math.PI) / (30 * 60) - Math.PI / 2;
      ctx.beginPath();
      ctx.fillStyle = "#f4f3f2";
      ctx.lineCap = "round";
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(
        canvas.width / 2 + 34 * Math.cos(minuteHandAngle),
        canvas.height / 2 + 34 * Math.sin(minuteHandAngle),
      );
      ctx.stroke();

      const secondHandAngle = (second * Math.PI) / 30 - Math.PI / 2;
      ctx.beginPath();
      ctx.strokeStyle = "#f4f3f2";
      ctx.lineCap = "round";
      ctx.moveTo(canvas.width / 2, canvas.height / 2);
      ctx.lineTo(
        canvas.width / 2 + 37 * Math.cos(secondHandAngle),
        canvas.height / 2 + 37 * Math.sin(secondHandAngle),
      );
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(canvas.width / 2, canvas.height / 2, 2, 0, 2 * Math.PI);
      ctx.fillStyle = "#f4f3f2";
      ctx.fill();
      ctx.stroke();

      clockDrawRef.current = requestAnimationFrame(drawTime);
    };

    drawTime();
    return () => cancelAnimationFrame(clockDrawRef.current);
  }, []);

  return (
    <div className="flex justify-center items-center fixed top-20 z-0 left-10 rounded-2xl w-30 h-30 backdrop-blur-md bg-gray-900/80">
      <canvas
        ref={canvasRef}
        className="w-full h-full"
        width="120"
        height="120"
      ></canvas>
    </div>
  );
}
