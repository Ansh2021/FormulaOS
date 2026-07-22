import { ShaderGradientCanvas, ShaderGradient } from "@shadergradient/react";
import { useState } from "react";
import { Input } from "./ui/input";

const TOPBAR_HEIGHT = "2rem";

export default function Topbar() {
  // const gradientURL =
  //   "https://shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1&cAzimuthAngle=180&cDistance=2.8&cPolarAngle=80&cameraZoom=9.1&color1=%23606080&color2=%23111827&color3=%23212121&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&gizmoHelper=hide&grain=off&lightType=3d&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=disabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=50&rotationY=0&rotationZ=0&shader=defaults&type=waterPlane&uAmplitude=0&uDensity=0.8&uFrequency=0&uSpeed=0.3&uStrength=1.4&uTime=8&wireframe=false";

  const [searchInput, setSearchInput] = useState("");

  //TODO: think about making the whole topbar expand heightwise when searching instead of making a separate one
  return (
    <div
      style={{ "--topbar-height": TOPBAR_HEIGHT } as React.CSSProperties}
      className="flex flex-row fixed top-3 z-1 backdrop-blur-md justify-center items-center min-w-[200px] w-[25vw] h-(--topbar-height) bg-gray-900/60 border border-gray-500 rounded-xl"
    >
      <Input
        placeholder="Search..."
        style={{ "--input-height": TOPBAR_HEIGHT } as React.CSSProperties}
        autoComplete="off"
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        className="peer fixed top-0 right-0 z-3 justify-center items-center transition-[width] duration-[400ms] focus:delay-[0ms] not-focus:delay-[500ms] ease-in-out w-[10vw] max-w-[400px] focus:w-[25vw] focus:max-w-full h-[calc(var(--input-height)-0.125rem)] rounded-xl bg-gray-800/80 focus:bg-gray-800/70 text-[#f4f3f2] backdrop-blur-md"
      />
      <p className="fixed left-5 text-[#f4f3f2] transition-all duration-300 peer-not-focus:delay-[900ms] ease-in-out scale-100 peer-focus:scale-0">
        FormulaOS
      </p>
      <div
        style={{ "--input-height": TOPBAR_HEIGHT } as React.CSSProperties}
        className="fixed top-0 left-0 z-2 overflow-clip transition-[height,scale] duration-[500ms,0ms] peer-focus:delay-[400ms,400ms] peer-not-focus:delay-[0ms,400ms] ease-in-out h-[calc(var(--input-height)-0.125rem)] peer-focus:h-[20vh] peer-focus:max-h-[calc(5*(var(--input-height)-0.125rem))] w-full text-[#f4f3f2] scale-0 peer-focus:scale-100 rounded-xl bg-gray-800/80 peer-focus:bg-gray-800/70"
      >
        <div
          style={{ "--input-height": TOPBAR_HEIGHT } as React.CSSProperties}
          className="fixed top-[calc(var(--input-height)-0.125rem+0.5rem)] pl-4 pr-4"
        >
          {/* TODO: Replace placeholder text*/}
          No apps found
        </div>
      </div>

      {/* <ShaderGradientCanvas>
        <ShaderGradient control="query" urlString={gradientURL} />
      </ShaderGradientCanvas> */}
    </div>
  );
}
