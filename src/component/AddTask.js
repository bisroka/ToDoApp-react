import React, { Component } from "react";
import "../css/AddTask.css";

class AddTask extends Component {
  //minDate is always 'today'
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate
  };
  //handler text in input
  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };
  //handler the 'important' checkbox
  handleCheckbox = e => {
    this.setState({
      checked: e.target.checked
    });
  };
  //handler the date input
  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };
  //handler the submit button
  handleClick = () => {
    //destructuring
    const { text, checked, date } = this.state;
    const add = this.props.add(text, date, checked);
    //
    if (add) {
      this.setState({
        text: "",
        checked: false,
        date: this.minDate
      });
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="from">
        <input
          type="text"
          placeholder="Dodaj zadanie"
          value={this.state.text}
          onChange={this.handleText}
        />
        <input
          id="important"
          type="checkbox"
          onChange={this.handleCheckbox}
          checked={this.state.checked}
        />
        <label htmlFor="important" className="priority">
          Priorytet
        </label>
        <br />
        <label htmlFor="date">Termin:</label>
        <input
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
          onChange={this.handleDate}
        />
        <br />
        <button onClick={this.handleClick}>Dodaj</button>
      </div>
    );
  }
}

export default AddTask;
