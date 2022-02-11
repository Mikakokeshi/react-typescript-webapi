import axios from "axios";
import { useState } from "react";
import "./styles.css";
import { Todo } from "./Todo";
import { TodoType } from "./types/todo";
import { Text } from "./Text";
import { UserProfile } from "./UserProfile";
import { User } from "./types/user";
export default function App() {
  const user: User = {
    name: "あああ",
    hobbies: ["ランニング　", "映画"]
  };
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
      <UserProfile user={user} />
      <Text color="red" fontSize="24px" />
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
