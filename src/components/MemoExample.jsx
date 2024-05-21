import { useMemo, useState } from "react";

const MemoExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState(0);

  const sum = useMemo(() => {
    const n = parseInt(input);
    return (n * (n + 1)) / 2;
  }, [input]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      {input ? (
        <div>
          Sum from 1 to {input} is {sum}
        </div>
      ) : (
        <div>Enter a number to calculate sum</div>
      )}
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
};

export default MemoExample;
