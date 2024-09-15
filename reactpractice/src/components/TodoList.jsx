import Button from "./Button";
export function TodoList({todos,handledelete, handleedit,}) {
  return (
    <ul>
      {todos.map((todo, index) => {
        return (
          <li key={index}>
            {todo}{" "}
            <Button
              text="Delete"
              color="red"
              onClick={() => {
                handledelete(index);
              }}
            />
            <Button
              text="Edit"
              color="Green"
              onClick={() => {
                handleedit(index);
              }}
            />
          </li>
        );
      })}
    </ul>
  );
}
