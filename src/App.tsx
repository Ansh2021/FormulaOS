import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import "./App.css";
import Topbar from "./components/topbar";
import { useState } from "react";
import Window from "./components/window";

function App() {
  const [gradientURL, setGradientURL] = useState(
    "https://shadergradient.co/customize?animate=on&axesHelper=off&brightness=1.1&cAzimuthAngle=180&cDistance=1.83&cPolarAngle=90&cameraZoom=1&color1=%23ff5005&color2=%23dbba95&color3=%23d0bce1&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=3&positionX=-1.4&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=10&rotationZ=50&shader=defaults&type=waterPlane&uAmplitude=1&uDensity=1.3&uFrequency=5.5&uSpeed=0.4&uStrength=1.3&uTime=0&wireframe=false",
  );

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
        <Window
          title="Not Sure"
          className="w-70 h-90"
          startingPosition={{ x: 100, y: 150 }}
        >
          <p className="text-white">test</p>
        </Window>
      </div>
    </div>
  );
}

export default App;
