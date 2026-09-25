import { Calculator as CalculatorIcon, Notebook, Terminal } from "lucide-react";
import { Button } from "./ui/button";

const BOTTOMBAR_HEIGHT = "3.5rem";

export default function Bottombar({
  setCalculatorVisible,
  setNotesVisible,
  setTerminalVisible,
}: {
  setCalculatorVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setNotesVisible: React.Dispatch<React.SetStateAction<boolean>>;
  setTerminalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  return (
    <div
      style={{ "--bottombar-height": BOTTOMBAR_HEIGHT } as React.CSSProperties}
      className="flex flex-row z-top justify-center items-center fixed bottom-2 bg-gray-900/80 backdrop-blur-md w-[90vw] min-w-[400px] h-(--bottombar-height) rounded-full gap-6"
    >
      <button
        className="rounded-xl"
        onClick={() => setNotesVisible((prev) => !prev)}
      >
        <div className="flex h-[calc(var(--bottombar-height)-0.5rem)] w-[calc(var(--bottombar-height)-0.5rem)] transition-colors duration-250 ease-in-out bg-[#3671c6]/50 justify-center items-center rounded-xl hover:bg-[#2b5a9e]/50">
          <Notebook className="text-[#f4f3f2]" />
        </div>
      </button>
      <button
        className="rounded-xl"
        onClick={() => setCalculatorVisible((prev) => !prev)}
      >
        <div className="flex h-[calc(var(--bottombar-height)-0.5rem)] w-[calc(var(--bottombar-height)-0.5rem)] transition-colors duration-250 ease-in-out bg-[#ed1c24]/50 justify-center items-center rounded-xl hover:bg-[#be161d]/50">
          <CalculatorIcon className="text-[#f4f3f2]" />
        </div>
      </button>
      <button
        className="rounded-xl"
        onClick={() => setTerminalVisible((prev) => !prev)}
      >
        <div className="flex h-[calc(var(--bottombar-height)-0.5rem)] w-[calc(var(--bottombar-height)-0.5rem)] transition-colors duration-250 ease-in-out bg-[#ff8000]/50 justify-center items-center rounded-xl hover:bg-[#cc6000]/50">
          <Terminal className="text-[#f4f3f2]" />
        </div>
      </button>
    </div>
  );
}
