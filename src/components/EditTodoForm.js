import React, { useState } from "react";

const EditTodoForm = ({ editTodo, task }) => {
  const [value, setValue] = useState(task.task);

  //To update the value on input
  function handleChange(e) {
    setValue(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();

    editTodo(value, task.id);

    setValue("");
  }

  return (
    <form
      className="flex justify-center items-stretch w-full mb-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        className="bg-transparent border border-[#302F4D] px-4 focus:border-blue-400 py-2 w-[60%] outline-none"
        placeholder="Update Task"
        onChange={handleChange}
        value={value}
        required
      />
      <button
        type="submit"
        className="font-semibold px-4 py-2 bg-[#302F4D] border-white/80 hover:border-blue-400 ml-[-10px] uppercase text-sm hover:bg-blue-500 transition-all duration-300 "
      >
        Update Task
      </button>
    </form>
  );
};

export default EditTodoForm;
