import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const API_URL = "https://sum-server.100xdevs.com/todos";

const Todo = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const getTodoItems = async () => {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTodoItems(data.todos);
    };

    const intervalId = setInterval(getTodoItems, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <div className="space-y-2 space-x-2">
        {console.log(todoItems)}
        {todoItems.map((item) => (
          <TodoItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Todo;
