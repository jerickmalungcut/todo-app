import React from "react";
import { BiPencil } from "react-icons/bi";
import { BiTrash } from "react-icons/bi";
import { BiCheck } from "react-icons/bi";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  const completedTask = () => {
    let task = document.querySelector(".my-task");
    toggleComplete(task.id);
    task.classList.toggle("completed");
  };

  return (
    <div className="todo flex justify-between items-center w-[76%] mx-auto px-6 py-1 bg-[#302F4D] my-2 transition-all duration-500">
      {/* Task Name */}
      <p className="my-task">{task.task}</p>

      {/* Edit Icon */}
      <div className="flex items-center gap-3">
        {/* Done icon */}
        <div className="icon cursor-pointer" onClick={completedTask}>
          <BiCheck size={35} />
        </div>

        <div className="icon cursor-pointer" onClick={() => editTodo(task.id)}>
          <BiPencil size={25} />
        </div>

        {/* Delete Icon */}
        <div
          className="icon cursor-pointer"
          onClick={() => deleteTodo(task.id)}
        >
          <BiTrash size={25} />
        </div>
      </div>
    </div>
  );
};

export default Todo;
