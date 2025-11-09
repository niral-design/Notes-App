import { useState } from "react";
import { CircleX } from "lucide-react";

import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState([]);

  const formSubmitHandler = (e) => {
    e.preventDefault();
    setNote([...note, { title, description }]);
    console.log(note);

    setTitle("");
    setDescription("");
  };

  const deleteNoteHandler = (idx) => {
    const copyNote = [...note];

    copyNote.splice(idx, 1);
    setNote(copyNote);
  };

  return (
    <>
      <div className="parentContainer">
        <div className="leftContainer">
          <h3>Add notes</h3>

          <form className="formContainer" onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="Enter title"
              className="inputTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
              name="description"
              placeholder="Enter description"
              className="inputDescription"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <button type="submit" className="addNoteButton">
              Add note
            </button>
          </form>
        </div>

        <div className="rightContainer">
          <h3>Notes</h3>
          <div className="notesContainer">
            {note.map((item, idx) => {
              return (
                <div key={idx} className="noteBox">
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                  <CircleX
                    className="deleteNoteButton"
                    size={24}
                    strokeWidth={1.5}
                    onClick={() => deleteNoteHandler(idx)}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
