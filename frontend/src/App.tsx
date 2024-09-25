import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/card";
import DisplayCards from "./components/displayCards";

function App() {
  const [data, setData] = useState<any>();
  const fetchData = async () => {
    const req = await fetch("http://localhost:3100/");
    const res = await req.json();
    setData(res["todos"]);
  };
  useEffect(() => {
    fetchData();
  }, []);
  const display =
    data &&
    data.map(({ state, task, createdAt }: any, id: any) => {
      return <Card key={id} state={state} task={task} createdAt={createdAt} />;
    });
  return (
    <>
      {data.map(({ state, task, createdAt, _id }: any) => {
        return (
          <DisplayCards
            key={_id}
            id={_id}
            state={state}
            task={task}
            createdAt={createdAt}
          />
        );
      })}
    </>
  );
}

export default App;
