import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import "./App.css";
import Topbar from "./components/topbar";
import { useEffect, useState } from "react";
import Bottombar from "./components/bottombar";
import Clock from "./apps/static/clock";
import Notes from "./apps/dynamic/notes";
import Calculator from "./apps/dynamic/calculator";
import Terminal from "./apps/dynamic/terminal";

function App() {
  const [gradientURL, setGradientURL] = useState(
    "https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.1&cAzimuthAngle=180&cDistance=1.83&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=1&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=1.3&uTime=0&wireframe=false",
  );

  const [windowOrder, setWindowOrder] = useState<string[]>([
    "window1",
    "window2",
    "window3",
  ]);
  const [order, setOrder] = useState<string[]>([]);

  const [terminalVisible, setTerminalVisible] = useState(false);
  const [calculatorVisible, setCalculatorVisible] = useState(false);
  const [notesVisible, setNotesVisible] = useState(false);

  useEffect(() => {
    if (terminalVisible && !order?.includes("terminal")) {
      setOrder((prev) => [...prev, "terminal"]);
    } else if (calculatorVisible && !order?.includes("calculator")) {
      setOrder((prev) => [...prev, "calculator"]);
    } else if (notesVisible && !order?.includes("notes")) {
      setOrder((prev) => [...prev, "notes"]);
    } else if (!terminalVisible && order?.includes("terminal")) {
      setOrder(order.filter((elem) => elem !== "terminal"));
    } else if (!calculatorVisible && order?.includes("calculator")) {
      setOrder(order.filter((elem) => elem !== "calculator"));
    } else if (!notesVisible && order?.includes("notes")) {
      setOrder(order.filter((elem) => elem !== "notes"));
    }
  }, [terminalVisible, calculatorVisible, notesVisible]);

  return (
    <div className="flex flex-col min-w-full">
      <div className="flex justify-center items-center">
        <Topbar />
      </div>
      <div className="h-[screen] min-w-full">
        <div className="fixed top-0 pointer-events-none h-full min-w-full">
          <ShaderGradientCanvas>
            <ShaderGradient control="query" urlString={gradientURL} />
          </ShaderGradientCanvas>
        </div>
        <Clock />
        <Calculator
          startingPosition={{ x: 150, y: 100 }}
          calculatorOpen={calculatorVisible}
          setCalculatorOpen={setCalculatorVisible}
          id={windowOrder[order.indexOf("calculator")]}
          windowOrder={windowOrder}
          setWindowOrder={setWindowOrder}
          setCalculatorOrder={setOrder}
        />
        <Notes
          startingPosition={{ x: 175, y: 125 }}
          notesOpen={notesVisible}
          setNotesOpen={setNotesVisible}
          id={windowOrder[order.indexOf("notes")]}
          windowOrder={windowOrder}
          setWindowOrder={setWindowOrder}
          setNotesOrder={setOrder}
        />
        <Terminal
          startingPosition={{ x: 200, y: 150 }}
          terminalOpen={terminalVisible}
          setTerminalOpen={setTerminalVisible}
          id={windowOrder[order.indexOf("terminal")]}
          windowOrder={windowOrder}
          setWindowOrder={setWindowOrder}
          setTerminalOrder={setOrder}
        />
      </div>
      <div className="flex justify-center items-center">
        <Bottombar
          setCalculatorVisible={setCalculatorVisible}
          setNotesVisible={setNotesVisible}
          setTerminalVisible={setTerminalVisible}
        />
      </div>
    </div>
  );
}

export default App;
