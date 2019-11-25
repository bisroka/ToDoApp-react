import React from "react";
import Task from "./Task";

import "../css/TaskList.css";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);
  if (done.length >= 2) {
    done.sort((a, b) => b.finishDate - a.finishDate);
  }

  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();
      return a - b;
    });
  }
  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));
  return (
    <div className="TaskList">
      <div className="active">
        <h1>Zadania do zrobienia</h1>
        {activeTasks.length > 0 ? activeTasks : "Brak zadań do zrobienia"}
      </div>
      <br />
      <div className="done">
        <h3>
          Zadania wykonane: <em>{doneTasks.length}</em>
        </h3>
        {doneTasks.length > 5 && (
          <span
            style={{
              fontSize: 10
            }}
          >
            Wyświetlonych jest jedynie 5 ostatnich elementów
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </div>
  );
};

export default TaskList;
