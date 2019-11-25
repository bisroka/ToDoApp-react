import React, { Component } from "react";

import AddTask from "./AddTask";
import TaskList from "./TaskList";
import Img from "./Img";

import "../css/App.css";

class App extends Component {
  counter = 0;
  state = {
    tasks: []
  };

  addTask = (text, date, important) => {
    const task = {
      id: this.counter,
      text, //tekst z inputa
      date, //tekst z inputa
      important, //wartość z inputa z inputa
      active: true,
      finishDate: null
    };
    this.counter++;
    if (text.length > 3) {
      this.setState(prevState => ({
        tasks: [...prevState.tasks, task]
      }));
    } else {
      alert("Nazwa powinna mieć conajmniej 3 znaki");
    }
    return true;
  };

  deleteTask = id => {
    console.log("delete w komponencie App" + id);

    // const tasks = [...this.state.tasks];
    // const index = tasks.findIndex(task => task.id === id);
    // tasks.splice(index, 1);
    // this.setState({
    //   tasks
    // });

    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);
    this.setState({
      tasks
    });
  };
  changeTaskStatus = id => {
    console.log("change w komponencie App" + id);

    let tasks = [...this.state.tasks];
    tasks.forEach(task => {
      if (task.id === id) {
        task.active = !task.active;
        task.finishDate = new Date().getTime();
        console.log(task.active);
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
