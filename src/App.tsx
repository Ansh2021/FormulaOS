import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import "./App.css";
import Topbar from "./components/topbar";
import { useState } from "react";
import Window from "./components/window";
import Bottombar from "./components/bottombar";
import Clock from "./apps/static/clock";
import Notes from "./apps/dynamic/notes";

function App() {
  const [gradientURL, setGradientURL] = useState(
    "https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.1&cAzimuthAngle=180&cDistance=1.83&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=1&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=1.3&uTime=0&wireframe=false",
  );
  //TODO: test for now
  const [windowOrder, setWindowOrder] = useState<string[]>([
    "window1",
    "window2",
    "window3",
  ]);
  const [order, setOrder] = useState<string[]>([...windowOrder]);
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
        {/* <Window
          title="Not Sure"
          className="w-70 h-90"
          startingPosition={{ x: 100, y: 150 }}
          id={order[0]}
          windowOrder={windowOrder}
          setWindowOrder={setWindowOrder}
        >
          <p className="text-white">test</p>
        </Window>
        <Window
          title="Not 2"
          className="w-100 h-60"
          startingPosition={{ x: 150, y: 200 }}
          id={order[1]}
          windowOrder={windowOrder}
          setWindowOrder={setWindowOrder}
        >
          <p className="text-white">test</p>
        </Window>
        <Window
          title="Not 3"
          className="w-100 h-60"
          startingPosition={{ x: 200, y: 250 }}
          id={order[2]}
          windowOrder={windowOrder}
          setWindowOrder={setWindowOrder}
        >
          <p>maybe</p>
        </Window> */}
        <Notes
          startingPosition={{ x: 175, y: 150 }}
          id={order[0]}
          windowOrder={windowOrder}
          setWindowOrder={setWindowOrder}
        />
      </div>
      <div className="flex justify-center items-center">
        <Bottombar />
      </div>
    </div>
  );
}

export default App;
