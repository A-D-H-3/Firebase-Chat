import React from "react";

const Button = (props) => {
  console.log(props);
  return <div>{props.children}</div>;
};

export default Button;
