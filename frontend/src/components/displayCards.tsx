import React from "react";

const DisplayCards = ({ state, task, createdAt, _id }: any) => {
  const handleDelete = async (id: any) => {
    const req = await fetch(`http://localhost:3100/${id}`);
    const res = req.json();
    console.log(res);
  };
  return (
    <div>
      <p>{state}</p>
      <p>{task}</p>
      <p>{createdAt}</p>
      <button onClick={() => handleDelete(_id)}>Delete</button>
    </div>
  );
};

export default DisplayCards;
