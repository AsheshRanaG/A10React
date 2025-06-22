import React from "react";

const Daughter = ({ sampati, changeSampatti }) => {
  const changePokhara = () => {
    changeSampatti("Pokhara");
  };
  return (
    <div
      style={{
        backgroundColor: "lightpink",
        padding: "20px",
        marginBottom: "10px",
      }}
    >
      I am daughter component. I got {sampati} from App
      <button onClick={changePokhara}>Click Here</button>
    </div>
  );
};

export default Daughter;
