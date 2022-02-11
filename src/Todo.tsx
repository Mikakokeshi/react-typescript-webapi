type TodoType = {
  userId: number; //typeの場合は,（カンマ）ではなくセミコロンで区切る
  title: string;
  completed: boolean;
};
export const Todo = (props: TodoType) => {
  const { title, userId, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${completeMark}${title}（ユーザー： ${userId}）`}</p>;
};
