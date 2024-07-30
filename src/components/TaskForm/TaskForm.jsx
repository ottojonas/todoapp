/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "../Tag/Tag";
const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  console.log("Task Data :", taskData);

  const checkTag = (tag) => {
    return taskData.tags.some((item) => item === tag);
  };

  const selectTag = (tag) => {
    if (taskData.tags.some((item) => item === tag)) {
      const filterTags = taskData.tags.filter((item) => item !== tag);
      setTaskData((prev) => {
        return {
          ...prev,
          tags: filterTags,
        };
      });
    } else {
      setTaskData((prev) => {
        return {
          ...prev,
          tags: [...prev.tags, tag],
        };
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTaskData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData);
    setTasks((prev) => {
      return [...prev, taskData];
    });
    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={taskData.task}
          className="task_input"
          placeholder="enter your task"
          onChange={handleChange}
        />
        <div className="task_form_bottom_line">
          <div>
            <Tag
              tagName="html"
              selectTag={selectTag}
              selected={checkTag("html")}
            />
            <Tag
              tagName="css"
              selectTag={selectTag}
              selected={checkTag("css")}
            />
            <Tag
              tagName="javascript"
              selectTag={selectTag}
              selected={checkTag("javascript")}
            />
            <Tag
              tagName="react"
              selectTag={selectTag}
              selected={checkTag("react")}
            />
          </div>
          <div>
            <select
              name="status"
              value={taskData.status}
              className="task_status"
              onChange={handleChange}>
              <option value="todo">todo</option>
              <option value="doing">doing</option>
              <option value="done">done</option>
            </select>

            <button type="submit" className="task_submit">
              + add task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
