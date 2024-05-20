import CardWrapper from "./CardWrapper";

// eslint-disable-next-line react/prop-types
const TodoItem = ({ title, description, isCompleted }) => {
  const comp = (
    <div className="p-2">
      <h1>{title}</h1>
      <p>{description}</p>
      <p>{isCompleted ? "Completed" : "Do it quick"}</p>
    </div>
  );
  return <CardWrapper comp={comp} />;
};

export default TodoItem;
