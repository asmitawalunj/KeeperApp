import React, { useState } from "react";
import Note from "./Note";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
    const [isExpanded,setExpanded]=useState(false);


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function inputNote(e) {
    const { name, value } = e.target;
    console.log(name);

    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value
      };
    });



  }

  function expanded(){
      setExpanded(true);
  }
  return (
    <div>
      <form className="create-note">
    {isExpanded && <input
        onChange={inputNote}
        name="title"
        value={note.title}
        placeholder="Title"
        autoComplete="off"
    />
    }


    <textarea
        onChange={inputNote}
        name="content"
        onClick={expanded}
        value={note.content}
        placeholder="Take a note..."
        rows= {isExpanded ? "3" : "1"}
        />



        <Zoom in={isExpanded}>
          <Fab onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
