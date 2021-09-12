import React, { useState } from 'react';
import type { NextPage } from 'next'
import NewTodo from '../components/NewTodo'
import TodoList from '../components/TodoList'
import styles from '../styles/Home.module.css'
import { Todo } from '../components/todo.model';

const Home: NextPage = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const addTaskHandler = (newTaskValue: string) => {
    setTodoList(prevState => [
      ...prevState,
      {id: prevState.length + 1, text: newTaskValue.toString()}
    ])
  }

  const deleteTaskHandler = (id: number) => {
    setTodoList(prevState => prevState.filter(x => x.id !== id))
  }

  return (
    <div className={styles.container}>
      <NewTodo onTaskAdded={addTaskHandler}/>
      <TodoList items={todoList} onTaskDelete={deleteTaskHandler}/>
    </div>
  )
}

export default Home
