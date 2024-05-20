import { useEffect, useState } from "react";
import TodoItem from "./TodoItem";

const API_URL = "https://sum-server.100xdevs.com/todo";

const SingleTodo = () => {
  const [todo, setTodo] = useState({});
  const [id, setId] = useState(null);

  const handleButtonClick = (id) => setId(id);

  useEffect(() => {
    (async () => {
      const response = await fetch(`${API_URL}?id=${id}`);
      const data = await response.json();
      setTodo(data.todo);
    })();
  }, [id]);

  return (
    <div>
      <button onClick={() => handleButtonClick(1)}>Go to 1</button>
      <button onClick={() => handleButtonClick(2)}>Go to 2</button>
      <button onClick={() => handleButtonClick(3)}>Go to 3</button>
      <button onClick={() => handleButtonClick(4)}>Go to 4</button>
      <button onClick={() => handleButtonClick(5)}>Go to 5</button>
      {id && <TodoItem {...todo} />}
    </div>
  );
};

export default SingleTodo;
