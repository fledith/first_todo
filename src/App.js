import { useCallback, useState } from 'react';
import ToDo from './ToDo';
import ToDoForm from './ToDoForm';

function App () {
  const [todos, setTodos] = useState([]);
  
  const addTask = useCallback((userInput) => {
    if (userInput) {
        const newItem = {
            id: Math.random().toString(36).substr(2,9),
            task: userInput,
            complete: false
        }
        setTodos([...todos, newItem]);
    }
  }, [todos]);
  
  const removeTask = useCallback((id) => {
    setTodos([...todos.filter(todo => todo.id !== id)])
  }, [todos]);
  
  const handleToggle = useCallback((id) => {
    setTodos([...todos.map(todo => todo.id === id ? {...todo, complete: !todo.complete} : {...todo})])
  }, [todos]);

  return (
    <div className="App">
      <header>
        <h1>Task list: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
        {todos.map((todo) => {
          return <ToDo
                    todo={todo}
                    key={todo.id}
                    toggleTask={handleToggle}
                    removeTask={removeTask}
                />
        })}
    </div>
  );
}

export default App;
