/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */
import { memo, useCallback, useState } from "react";

function UseCallbackExample() {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    console.log("child clicked");
  }, []);

  return (
    <div>
      <Child onClick={onClick} />
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
}

const Child = memo(({ onClick }) => {
  console.log("child render");

  return (
    <div>
      <button onClick={onClick}>Button clicked</button>
    </div>
  );
});

export default UseCallbackExample;
