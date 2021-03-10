import React from "react";
import { useState } from "react";

const AddTask = ({ onAdd }) => {
  const [text, SetText] = useState("");
  const [day, SetDay] = useState("");
  const [reminder, SetReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert("Please add Task");
      return;
    }
    onAdd({ text, day, reminder });
    SetText("");
    SetDay("");
    SetReminder(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="input"
          placeholder="Add Task"
          value={text}
          onChange={(e) => SetText(e.target.value)}
        ></input>
      </div>
      <div className="form-control">
        <label>Day & Time</label>
        <input
          type="input"
          placeholder="Add Day & Time"
          value={day}
          onChange={(e) => SetDay(e.target.value)}
        ></input>
      </div>
      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          placeholder="Add Task"
          value={reminder}
          checked={reminder}
          onChange={(e) => SetReminder(e.currentTarget.checked)}
        ></input>
      </div>
      <input className="btn btn-block" type="submit" value="Save Task"></input>
    </form>
  );
};

export default AddTask;
