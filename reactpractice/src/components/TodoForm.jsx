export function TodoForm({handlesubmit,todo,setTodo,indexToBeEdited}) {
  return(
  <form onSubmit={handlesubmit}>
    <input
      type="text"
      required
      value={todo}
      onChange={(e) => {
        setTodo(e.target.value);
      }}
    />
    
    <input
      type="submit"
      value={indexToBeEdited === null ? "Add" : "Update"}
    />
  </form>
  )
}