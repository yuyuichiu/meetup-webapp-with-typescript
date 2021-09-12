import React, { useRef } from "react";

interface NewTodoProps {
  onTaskAdded: (newTaskValue: string) => void
}

const NewTodo: React.FC<NewTodoProps> = (props) => {
  const textInputRef = useRef<HTMLInputElement>(null);

  const taskFormSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    props.onTaskAdded(textInputRef.current!.value);
  }

  return (<form onSubmit={taskFormSubmitHandler}>
    <div>
      <label htmlFor='todo'>Todo: </label>
      <input id='todo' type='text' ref={textInputRef}/>
    </div>
    <button type='submit'>Add Task</button>
  </form>)
}

export default NewTodo