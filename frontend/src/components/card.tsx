import React from "react";

const Card = ({ state, task, createdAt }: any) => {
  return <div>{state + " this is from card" + task + " " + createdAt}</div>;
};

export default Card;
