import React, { useEffect, useState } from "react";
import "./styles.css";
import { countItems } from "shared/adapters";

const parameterToBeDone = 'checked'

const TodoResults = ({ todos }) => {
  const [countDoneTasks, setCountDoneTasks] = useState(0)

  useEffect(() => {
    if (!!todos.length) {
      const count = countItems(todos, parameterToBeDone)
      setCountDoneTasks(count)
    }
  }, [todos])


  return <div className="todo-results">Done:{countDoneTasks}</div>;
};

export default TodoResults;
