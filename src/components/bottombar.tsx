const BOTTOMBAR_HEIGHT = "3.5rem";

export default function Bottombar({}: {}) {
  return (
    <div
      style={{ "--bottombar-height": BOTTOMBAR_HEIGHT } as React.CSSProperties}
      className="flex flex-row z-top justify-center items-center fixed bottom-2 bg-gray-900/80 backdrop-blur-md w-[90vw] min-w-[400px] h-(--bottombar-height) rounded-full"
    >
      <div>hi</div>
    </div>
  );
}
