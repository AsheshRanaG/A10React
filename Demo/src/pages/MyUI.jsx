import { useState } from "react";

const MyUI = () => {
  //   const name = "techspire";
  const [name, setName] = useState("techspire");
  // const count=0
  const [count, setCount] = useState(0);
  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{name}</p>
      <p>{count}</p>
      <button onClick={handleClick}>Click me</button>
      <p> i am react</p>
    </div>
  );
};

export default MyUI;
