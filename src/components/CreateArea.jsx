import React, { useState } from "react";
import Note from "./Note";
import Zoom from "@material-ui/core/Zoom";
import AddIcon from "@material-ui/icons/Add";
import Fab from "@material-ui/core/Fab";
import Tooltip from '@material-ui/core/Tooltip';
import Fade from '@material-ui/core/Fade';

function CreateArea() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    title: "",
    content: "",
  });
  const [expand, setExpand] = useState(false);

  function handleChange(event) {
    const { value, name } = event.target;
    setInput((prevItem) => {
      return {
        ...prevItem,
        [name]: value,
      };
    });
  }

  function handleClick() {
    setExpand(false);
    setInput({
      title: "",
      content: "",
    });
    setList((prevItem) => {
      return [input, ...prevItem];
    });
  }
  function deleteItem(id) {
    setList((prevItem) => {
      return prevItem.filter((item, index) => {
        return index !== id;
      });
    });
  }
  function handleExpansion(event) {
    setExpand(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleSubmit} className="create-note">
        {expand === true ? (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={input.heading}
          />
        ) : null}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={expand === true ? "4" : "1"}
          onClick={handleExpansion}
          onChange={handleChange}
          value={input.content}
        />
        {expand === true ? (
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Add Note 😵"
          >
            <Zoom in="true">
              <Fab onClick={handleClick}>
                <AddIcon />
              </Fab>
            </Zoom>
          </Tooltip>
        ) : null}
      </form>
      <div>
        {list.map((list, index) => {
          return (
            <Note
              title={list.title}
              content={list.content}
              key={index}
              id={index}
              onDelete={deleteItem}
            />
          );
        })}
      </div>
    </div>
  );
}

export default CreateArea;
