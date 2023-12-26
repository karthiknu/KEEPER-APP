import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Fade from "@material-ui/core/Fade";

function Note(props) {
  return (
    <div className="notes">
      <div className="notes-body">
        <h3>{props.title}</h3>
        <p>{props.content}</p>
        <hr className="hr-line" />
        <div className="center">
          <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            title="Delete Note 👀"
          >
            <button
              className="delete"
              onClick={() => {
                props.onDelete(props.id);
              }}
            >
              <i className="fas fa-trash-alt"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}

export default Note;
