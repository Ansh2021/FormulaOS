import Window from "@/components/window";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

//TODO: have a last updated indicator
export default function Notes({
  startingPosition,
  id,
  windowOrder,
  setWindowOrder,
}: {
  startingPosition: { x: number; y: number };
  id: string;
  windowOrder: string[];
  setWindowOrder: React.Dispatch<React.SetStateAction<string[]>>;
}) {
  const [selectedNoteIndex, setSelectedNoteIndex] = useState<number>(0);
  const [noteContents, setNoteContents] = useState<
    { title: string; content: string }[]
  >([
    // { title: "test", content: "lorem" },
    // {
    //   title: "test2",
    //   content:
    //     "ehofiwae fpaioehfpaewoifh aewaeh fpioaewh fweihfa pfioawhefpaewihf aewphf pa fihaewpfiohaew p",
    // },
    // {
    //   title: "test2",
    //   content:
    //     "ehofiwae fpaioehfpaewoifh aewaeh fpioaewh fweihfa pfioawhefpaewihf aewphf pa fihaewpfiohaew p",
    // },
    // {
    //   title: "test2",
    //   content:
    //     "ehofiwae fpaioehfpaewoifh aewaeh fpioaewh fweihfa pfioawhefpaewihf aewphf pa fihaewpfiohaew p",
    // },
    // {
    //   title: "test2",
    //   content:
    //     "ehofiwae fpaioehfpaewoifh aewaeh fpioaewh fweihfa pfioawhefpaewihf aewphf pa fihaewpfiohaew p",
    // },
    // {
    //   title: "test2",
    //   content:
    //     "ehofiwae fpaioehfpaewoifh aewaeh fpioaewh fweihfa pfioawhefpaewihf aewphf pa fihaewpfiohaew p",
    // },
  ]);
  const [singleNoteContent, setSingleNoteContent] = useState<string>(
    noteContents[selectedNoteIndex]?.content || "",
  );

  // This should technically be set to true by default
  // but it only works with false as the default value for some reason (at least in dev)
  const [showAllNotesPanel, setShowAllNotesPanel] = useState(true);

  useEffect(() => {
    const title = !singleNoteContent.split("\n")[0].trim()
      ? "Untitled"
      : singleNoteContent.split("\n")[0];
    // const content = singleNoteContent.split("\n").slice(0).join("\n");
    setNoteContents((prev) =>
      prev.map((item, index) =>
        index === selectedNoteIndex
          ? {
              title: title,
              content: singleNoteContent,
            }
          : item,
      ),
    );
  }, [singleNoteContent]);

  useEffect(() => {
    setSelectedNoteIndex(noteContents.length - 1);
    // setShowAllNotesPanel(false);
  }, [noteContents.length]);

  return (
    <Window
      className="h-100 w-100"
      title="Notes"
      startingPosition={startingPosition}
      id={id}
      windowOrder={windowOrder}
      setWindowOrder={setWindowOrder}
    >
      <div className="flex flex-col w-full h-full justify-center items-center">
        {showAllNotesPanel && (
          <div className="absolute top-0 left-0 z-1 w-full h-full flex flex-col justify-center items-center">
            <div className="flex flex-row fixed top-0 justify-center items-center bg-[hsla(53,80%,71%,1)] w-full h-10">
              <p className="text-black font-semibold">All Notes</p>
              <Button
                className="fixed right-3 bg-transparent hover:bg-black/10"
                size="icon"
                onClick={() => {
                  setNoteContents([
                    ...noteContents,
                    { title: "Untitled", content: "" },
                  ]);
                  setShowAllNotesPanel(false);
                }}
              >
                <Plus className="text-black" />
              </Button>
            </div>
            {/* TODO: fix scrollbar margin from the right */}
            <div
              className="flex flex-col text-[#f4f3f2] w-full pl-3 pr-3 pt-2 pb-2 h-[calc(100%-40px)] fixed top-10 rounded-b-2xl overflow-y-auto custom-scrollbar [&::-webkit-scrollbar-track]:bg-gray-800/90 
     [&::-webkit-scrollbar-thumb]:bg-black/60"
            >
              {noteContents.map((item, index) => (
                <Button
                  key={index}
                  className="flex flex-col bg-transparent truncate hover:bg-black/30 w-full h-fit py-3 items-start text-lg"
                  onClick={() => {
                    setShowAllNotesPanel(false);
                    setSelectedNoteIndex(index);
                  }}
                >
                  <p className="font-semibold">{item.title}</p>
                  <p className="text-sm text-[#f4f3f2]/60">
                    {item.content.split("\n").slice(1).join("\n")}
                  </p>
                </Button>
              ))}
            </div>
          </div>
        )}
        {!showAllNotesPanel && (
          <div className="contents">
            <div className="flex flex-row fixed top-0 justify-center items-center bg-[hsla(53,80%,71%,1)] w-full h-10">
              <Button
                className="fixed left-3 bg-transparent hover:bg-black/10"
                size="icon"
                onClick={() => setShowAllNotesPanel((prev) => !prev)}
              >
                <ChevronLeft className="text-black" />
              </Button>
              <p className="text-black font-semibold">
                {noteContents[selectedNoteIndex]?.title}
              </p>
            </div>
            <div className="flex w-full pl-3 pr-3  pt-2 pb-2 h-[calc(100%-40px)] fixed top-10 rounded-b-2xl">
              <textarea
                value={noteContents[selectedNoteIndex]?.content}
                onChange={(e) => setSingleNoteContent(e.target.value)}
                className="text-[#f4f3f2] w-full h-full resize-none focus:outline-none focus:border-none focus:shadow-none overflow-y-auto custom-scrollbar  [&::-webkit-scrollbar-track]:bg-gray-800/90 
     [&::-webkit-scrollbar-thumb]:bg-black/60"
              />
            </div>
          </div>
        )}
      </div>
    </Window>
  );
}
