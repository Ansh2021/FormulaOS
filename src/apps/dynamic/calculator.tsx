import { Button } from "@/components/ui/button";
import Window from "@/components/window";
import {
  Calculator as CalculatorIcon,
  Delete,
  Divide,
  X,
  Minus,
  Plus,
  Equal,
} from "lucide-react";
import { useRef, useState } from "react";

export default function Calculator({
  startingPosition,
  calculatorOpen,
  setCalculatorOpen,
  id,
  windowOrder,
  setWindowOrder,
  setCalculatorOrder,
}: {
  startingPosition: { x: number; y: number };
  calculatorOpen: boolean;
  setCalculatorOpen: React.Dispatch<React.SetStateAction<boolean>>;
  id: string;
  windowOrder: string[];
  setWindowOrder: React.Dispatch<React.SetStateAction<string[]>>;
  setCalculatorOrder: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [input, setInput] = useState<string>("0");
  const justCalculatedRef = useRef(false);

  return (
    <Window
      className="h-100 w-100"
      title="Calculator"
      startingPosition={startingPosition}
      open={calculatorOpen}
      setOpen={setCalculatorOpen}
      id={id}
      windowOrder={windowOrder}
      setWindowOrder={setWindowOrder}
      setOrder={setCalculatorOrder}
    >
      <div className="flex flex-col w-full h-full justify-center items-center">
        <div className="flex flex-row-reverse w-full h-fit pr-3 overflow-x-auto no-scrollbar">
          {/* Make this an input later */}
          <p className="font-semibold text-xl px-3 py-5 text-[#f4f3f2]">
            {input}
          </p>
        </div>
        <div className="flex w-full max-w-150 h-full rounded-b-2xl mx-3 justify-center items-center px-3">
          <div className="flex flex-col w-full min-w-10 max-w-20 h-full py-3 items-center justify-center gap-0.5">
            <Button
              onClick={() =>
                setInput((prev) =>
                  input === "Error" || input.length === 1
                    ? "0"
                    : prev.slice(0, -1),
                )
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              <Delete />
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "7";
                  } else {
                    append = "7";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              7
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "4";
                  } else {
                    append = "4";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              4
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "1";
                  } else {
                    append = "1";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              1
            </Button>
            <Button
              onClick={() =>
                window.alert(
                  "Currently doesn't work. Will eventually let you switch between four/five function, scientific, and potentially graphing calculators.",
                )
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              <CalculatorIcon />
            </Button>
          </div>
          <div className="flex flex-col w-full min-w-10 max-w-20 h-full py-3 items-center justify-center gap-0.5">
            <Button
              onClick={() => setInput("0")}
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              AC
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "8";
                  } else {
                    append = "8";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              8
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "5";
                  } else {
                    append = "5";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              5
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "2";
                  } else {
                    append = "2";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              2
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "0";
                  } else {
                    append = "0";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              0
            </Button>
          </div>
          <div className="flex flex-col w-full min-w-10 max-w-20 h-full py-3 items-center justify-center gap-0.5">
            <Button
              onClick={() => {
                justCalculatedRef.current = false;
                setInput((prev) => prev + "%");
              }}
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              %
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "9";
                  } else {
                    append = "9";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              9
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "6";
                  } else {
                    append = "6";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              6
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current
                  ) {
                    append = prev + "3";
                  } else {
                    append = "3";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              3
            </Button>
            <Button
              onClick={() =>
                setInput((prev) => {
                  let append;
                  const numbers = prev.split(/[+\-*/%]/);
                  if (
                    prev !== "0" &&
                    input !== "Error" &&
                    !justCalculatedRef.current &&
                    numbers[numbers.length - 1].split(".").length < 2
                  ) {
                    // console.log(numbers);
                    append = prev + ".";
                  } else if (
                    !(numbers[numbers.length - 1].split(".").length < 2)
                  ) {
                    append = prev;
                  } else {
                    append = "0.";
                  }
                  justCalculatedRef.current = false;
                  return append;
                })
              }
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              .
            </Button>
          </div>
          <div className="flex flex-col w-full min-w-10 max-w-20 h-full py-3 items-center justify-center gap-0.5">
            <Button
              onClick={() => {
                justCalculatedRef.current = false;
                setInput((prev) =>
                  !prev.endsWith("x") ? prev + "÷" : prev.slice(0, -1) + "÷",
                );
              }}
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              <Divide />
            </Button>
            <Button
              onClick={() => {
                justCalculatedRef.current = false;
                setInput((prev) =>
                  !prev.endsWith("÷") ? prev + "x" : prev.slice(0, -1) + "x",
                );
              }}
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              <X />
            </Button>
            <Button
              onClick={() => {
                justCalculatedRef.current = false;
                setInput((prev) =>
                  prev !== "0"
                    ? !prev.endsWith("+")
                      ? prev + "-"
                      : prev.slice(0, -1) + "-"
                    : "-",
                );
              }}
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              <Minus />
            </Button>
            <Button
              onClick={() => {
                justCalculatedRef.current = false;
                setInput((prev) =>
                  !prev.endsWith("-") ? prev + "+" : prev.slice(0, -1) + "+",
                );
              }}
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              <Plus />
            </Button>
            <Button
              onClick={() => {
                try {
                  setInput((prev) =>
                    eval(
                      prev
                        .replaceAll("x", "*")
                        .replaceAll("÷", "/")
                        .replaceAll(
                          /(\d+)%([+\-*/])?/g,
                          (_match, nums: string, symbol: string) => {
                            const number = Number(nums);

                            return symbol
                              ? String(number * 0.01) + symbol
                              : String(number) + "%";
                          },
                        ),
                    ).toString(),
                  );
                } catch (err: any) {
                  console.error(err);
                  setInput("Error");
                }

                justCalculatedRef.current = true;
              }}
              className="w-[10vh] bg-gray-800/80 backdrop-blur-md"
            >
              <Equal />
            </Button>
          </div>
        </div>
      </div>
    </Window>
  );
}
