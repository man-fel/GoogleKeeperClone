import React, { useState } from "react";
import AddBoxIcon from '@mui/icons-material/AddBox';

function CreateArea(props) {

  const [isExpanded, setExpanded] = useState(false);

  const[note, setnote] = useState({title: "", content: ""});
  
  function handleChange(event){
    const {name, value} = event.target;

    setnote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      }
    })
  }

  function submitNote(event){
    props.onAdd(note);
    setnote({
      title: "", 
      content: ""
    })
    event.preventDefault();
  }

  function expand(){
    setExpanded(true);
  }
  return (
    <div>
      <form>
        {isExpanded ? <input name="title" value={note.title} placeholder="Title"  onChange={handleChange}/> : null}
        <textarea onClick={expand} name="content" value={note.content} placeholder="Take a note..." rows={isExpanded ? 3 : 1} onChange={handleChange}/>
        <button onClick={submitNote} ><AddBoxIcon/></button>
      </form>
    </div>
  );
}

export default CreateArea;
