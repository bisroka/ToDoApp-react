import React from "react";

const Task = props => {
  const style = {
    color: "#ea5514",
    fontWeight: "solid",
    fontSize: "18px",
    textTransform: "uppercase"
  };
  const { text, date, id, active, important, finishDate } = props.task;
  if (active) {
    return (
      <div>
        <p>
          <strong style={important ? style : null}>{text}</strong>
          <br /> do <span>{date}</span>
          <button onClick={() => props.change(id)}>
            {active ? "Zrobione!" : "Do zrobienia"}
          </button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  } else {
    const finish = new Date(finishDate).toLocaleDateString();
    return (
      <div>
        <p>
          <strong>{text}</strong>
          <br />
          <em>
            <br />
            <span>Termin: {date}</span>
            <br />
            <span>Wykonano: {finish}</span>
          </em>
          <button onClick={() => props.change(id)}>
            {active ? "Zrobione!" : "Cofnij"}
          </button>
          <button onClick={() => props.delete(id)}>X</button>
        </p>
      </div>
    );
  }
};

export default Task;
