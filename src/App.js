import React, { useEffect, useState } from "react";
import Notelist from "./components/Notelist";
import NewNote from "./components/NewNote";
import Notes from "./components/Notes";
import "./styles/App.css";

function App() {
  const [noteBtnClick, setNoteBtnClick] = useState(false);
  const [noteGroups, setNoteGroups] = useState(
    localStorage.getItem("noteGroups")
      ? JSON.parse(localStorage.getItem("noteGroups"))
      : []
  );

  const [selectedNote, setSelectedNote] = useState({});
  const [newNoteGroup, setNewNoteGroup] = useState({
    id: "",
    name: "",
    notes: [],
    color: ""
  });
  const [display, setDisplay] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <React.Fragment>
      <div className=" App flex flex-row">
        <Notelist
          display={display}
          setDisplay={setDisplay}
          setNoteBtnClick={setNoteBtnClick}
          noteGroups={noteGroups}
          setSelectedNote={setSelectedNote}
          selectedNote={selectedNote}
          isMobile={isMobile}
        />

        <Notes
          display={display}
          setDisplay={setDisplay}
          selectedNote={selectedNote}
          isMobile={isMobile}
          noteBtnClick={noteBtnClick}
        />
      </div>

      <NewNote
        noteBtnClick={noteBtnClick}
        setNoteBtnClick={setNoteBtnClick}
        noteGroups={noteGroups}
        setNewNoteGroup={setNewNoteGroup}
        setNoteGroups={setNoteGroups}
      />
    </React.Fragment>
  );
}

export default App;
