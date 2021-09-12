import NewTodo from './NewTodo'
import { Todo } from './todo.model'

interface TodoListProps {
  items: Todo[];
  onTaskDelete: (id: number) => void;
}

const TodoList: React.FC<TodoListProps> = (props) => {
  const taskDeleteHandler = (id: number) => {
    props.onTaskDelete(id);
  }

  return (<ul>
    {props.items.map(x => <li key={x.id}>
      <span>{x.text}</span>
      <button onClick={() => taskDeleteHandler(x.id)}>Delete</button>
    </li>)}
  </ul>)
}

export default TodoList