import React from "react";

export const MyButton = (props) => {
  return (
    <button style={{ backgroundColor: props.bgcolor || "blue" ,color:props.color || "white"}}>
      {props.name || "TEST"}
    </button>
  );
};
