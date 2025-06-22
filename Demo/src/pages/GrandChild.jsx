import React from "react";

const GrandChild = ({ sampati }) => {
  return (
    <div
      style={{
        backgroundColor: "lightgreen",
        padding: "20px",
        marginBotton: "10px",
      }}
    >
      I am GrandChildren. I got a {sampati} from Son
    </div>
  );
};

export default GrandChild;
