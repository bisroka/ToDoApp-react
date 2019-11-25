import React, { Component } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Img from "./Img";

import "../css/App.css";

class App extends Component {
  //how many tasks
  counter = 0;
  state = {
    tasks: []
  };
  //func which adding task to taskList
  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, //text from input
      date, //date from input
      important, //value from checkbox
      active: true,
      finishDate: null
    };
    this.counter++;
    //tasks must have min 3 letters
    if (text.length > 3) {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, task]
      }));
    } else {
      alert("Nazwa powinna mieć conajmniej 3 znaki");
    }
    return true;
  };

  //func which delete task
  deleteTask = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };
  //func which change status from done to TODO and reverse
  changeTaskStatus = id => {
    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks
    });
  };

  render() {
    return (
      <div className="App">
        <div className="Form">
          <h1>Lista zadań</h1>
          <h2>
            Dodaj zadanie do listy do wykonania. Pozycje, które znajdą się na
            liście możesz usunąć lub oznaczyć jako wykonane.
          </h2>
          <AddTask add={this.addTask} />
          <TaskList
            tasks={this.state.tasks}
            delete={this.deleteTask}
            change={this.changeTaskStatus}
          />
        </div>{" "}
        <Img class="img" />
      </div>
    );
  }
}

export default App;
