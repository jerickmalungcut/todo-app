import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");

  //To update the value on input
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    addTodo(value);

    setValue("");
  }

  return (
    <form
      className="flex justify-center items-stretch w-full mb-4 h-auto"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="bg-transparent border-2 border-[#302F4D] focus:border-blue-500 px-4 py-2 w-[60%] outline-none"
        placeholder="What is the task today?"
        onChange={handleChange}
        value={value}
        required
      />
      <button
        type="submit"
        className="font-semibold px-4 py-2 bg-[#302F4D] border-white/80 hover:border-blue-400 ml-[-10px] uppercase text-sm hover:bg-blue-500 transition-all duration-300 "
      >
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
