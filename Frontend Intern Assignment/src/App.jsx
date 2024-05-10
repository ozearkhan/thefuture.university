import { useRef, useState } from 'react';
import TodoRow from './components/TodoRow';
import './App.css';
import Button from "./components/Button.jsx";

function App() {
  const [todos, setTodos] = useState([]);
  const ref = useRef();

  const todoTraversal = (id) => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed} : todo));
  };

  const todoRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const newTodo = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), todoDescription: ref.current.value, completed: false };
    setTodos([...todos, newTodo]);
    ref.current.value = '';
  };

  return (
      <div className="card">
        <h1>TODO</h1>
        {todos.map((todo) => (
            <TodoRow key={todo.id} todo={todo} onTodoTrav={todoTraversal} onTodoRemoval={todoRemove} />
        ))}
        <form onSubmit={newTodo}>
          <input ref={ref} type="text" placeholder="Input task here" />

          <Button size={"large"} type="submit">Add</Button>
        </form>
      </div>
  );
}

export default App;
