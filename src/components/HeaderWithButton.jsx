import { useState } from "react";

/* eslint-disable react/prop-types */
const HeaderWithButton = () => {
  const [title, setTitle] = useState("I am a header");

  const updateTitle = () => {
    const n = Math.random();
    setTitle(n);
  };

  return (
    <div>
      <button onClick={updateTitle}>Update Title</button>
      <div>Header = {title}</div>
    </div>
  );
};

export default HeaderWithButton;
