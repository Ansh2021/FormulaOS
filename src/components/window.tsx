import { cn } from "@/lib/utils";
import { Button } from "@base-ui/react/button";
import { useRef, useState } from "react";

export default function Window({
  className,
  title,
  children,
  startingPosition,
}: {
  className: string;
  title?: string;
  children: React.ReactNode;
  startingPosition?: { x: number; y: number };
}) {
  const [curPosition, setCurPosition] = useState({
    x: startingPosition?.x ? startingPosition!.x : 0,
    y: startingPosition?.y ? startingPosition!.y : 0,
  });
  const currentlyDragging = useRef(false);
  const dragOffset = useRef({ x: 0, y: 0 });

  const [closeWindow, setCloseWindow] = useState(false);
  const [minimizeWindow, setMinimizeWindow] = useState(false);
  const [fullScreen, setFullScreen] = useState(false);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (fullScreen) return;
    // e.stopPropagation();
    currentlyDragging.current = true;
    dragOffset.current = {
      x: e.clientX - curPosition.x,
      y: e.clientY - curPosition.y,
    };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  //TODO: make window not clip off screen when pointer tries dragging it off the screen (top border)
  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!currentlyDragging.current || e.clientY < 0) {
      return;
    }
    // e.stopPropagation();

    setCurPosition({
      x: e.clientX - dragOffset.current.x,
      y: e.clientY - dragOffset.current.y,
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    currentlyDragging.current = false;
    // e.stopPropagation();
    e.currentTarget.releasePointerCapture(e.pointerId);
  };

  return (
    <div
      className={cn(
        className,
        `transition-[width,height] ${!fullScreen ? "delay-[0ms,0ms]" : "delay-[50ms,50ms]"} duration-[200ms,200ms] ease-in-out resize`,
        fullScreen
          ? "fixed transition-all duration-300 ease-in-out top-0 left-0 h-full w-full"
          : "absolute",
      )}
      style={{
        transform: `${!fullScreen ? `translate(${curPosition.x}px, ${curPosition.y}px)` : "translate(0px, 0px)"}`,
        transition: `${currentlyDragging.current ? "" : "transform 0.1s ease"}`,
      }}
    >
      <div
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        className={`flex ${fullScreen ? "rounded-none" : "rounded-t-2xl"} bg-gray-900/90 h-10 w-full backdrop-blur-lg border border-gray-700 justify-center items-center`}
      >
        <div className="absolute left-3 top-3.25 flex flex-row h-fit w-fit gap-1">
          <Button>
            <div className="w-3 h-3 bg-[hsl(0,80%,71%)] rounded-full cursor-pointer"></div>
          </Button>
          <Button onClick={() => console.log(fullScreen)}>
            <div className="w-3 h-3 bg-[hsl(53,80%,71%)] rounded-full cursor-pointer"></div>
          </Button>
          <Button
            onPointerDown={(e) => e.stopPropagation()}
            onClick={() => setFullScreen((prev) => !prev)}
          >
            <div className="w-3 h-3 bg-[hsl(126,80%,71%)] rounded-full cursor-pointer"></div>
          </Button>
        </div>
        <p className="text-[#f4f3f2] font-semibold tracking-wide">{title}</p>
      </div>
      <div
        className={`rounded-b-2xl h-full w-full ${fullScreen ? "backdrop-blur-sm bg-black/90" : "backdrop-blur-lg bg-black/75"} border-r border-l border-b border-gray-700`}
      >
        {children}
      </div>
    </div>
  );
}
