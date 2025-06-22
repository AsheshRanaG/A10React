import React from "react";
import GrandChild from "./GrandChild";

const Son = ({ property, changeJagga }) => {
  const handleClick = () => {
    changeJagga("Thamel");
  };
  return (
    <div
      style={{
        backgroundColor: "lightblue",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      I am son Component. I got {property} from App
      <button onClick={handleClick}>Click Me</button>
      <GrandChild sampati={property} changeJagga={changeJagga} />
    </div>
  );
};

export default Son;
