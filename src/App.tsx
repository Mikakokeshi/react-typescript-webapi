import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
type TodoType = {
  userId: number; //typeの場合は,（カンマ）ではなくセミコロンで区切る
  id: number;
  title: string;
  completed: boolean;
};
export default function App() {
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        res.data.map((todo) => todo.title);
        setTodos(res.data);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchData}>
        {" "}
        jsonplaceholde88888811r　データ取得
      </button>
      {todos.map((todo) => (
        // <p>{todo.title }</p>
        <Todo
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}