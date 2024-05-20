// eslint-disable-next-line react/prop-types
const TodoItem = ({ title, description, isCompleted }) => {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{isCompleted ? "Completed" : "Do it quick"}</p>
    </div>
  );
};

export default TodoItem;
