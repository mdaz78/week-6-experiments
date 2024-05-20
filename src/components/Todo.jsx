import { useState } from "react";
import TodoItem from "./TodoItem";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "learn react from kirat",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Learn Node",
      description: "learn node from kirat",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Learn Express",
      description: "learn express from kirat",
      isCompleted: false,
    },
  ]);

  const addTodo = () => {
    setTodoItems([
      {
        id: todoItems.length + 1,
        title: "some title",
        description: "some description",
        isCompleted: false,
      },
      ...todoItems,
    ]);
  };

  return (
    <div>
      <button onClick={addTodo}>Add New to do</button>
      {todoItems.map((item) => (
        <TodoItem key={item.id} {...item} />
      ))}
    </div>
  );
};

export default Todo;
