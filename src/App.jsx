import Header from "./componets/Header";
import Form from "./componets/TodoCreate";
import Selector from "./componets/selector";
import { useState } from "react";
import List from "./componets/List";
import CountList from "./componets/CountList";

const initialStateList = [
  { id: 1, title: "Darle comida a Saikou", completed: true },
  { id: 2, title: "Mimar a la princesa Minnie", completed: false },
  { id: 3, title: "Dar comida al novio de minnie", completed: false },
  { id: 4, title: "Gato cowboy", completed: false },
]

const App = () => {
  const [todos, setTodos] = useState(initialStateList);
  {/* Create Todo */}
  const createTodo = (title) => {
    const newTodo ={
      id: Date.now(),
      title,
      completed: false,
  } 

    setTodos([...todos, newTodo])
}
  
{/* Actualiza Todo */}
const updateTodo = (id) => {
  const updatedTodos = todos.map((todo) => {
    if (todo.id === id) {
      return {
        ...todo,
        completed: !todo.completed,
      }
    }
    return todo;
  })
  setTodos(updatedTodos);
}

  {/* Elimina Todo */}
  const rmTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    //setTodos(setTodos);
  }

  const count = todos.filter((todo) => !todo.completed).length;
  
  return (    
      <div className=" min-h-screen bg-gray-100 bg-[url(.\assets\images\bg-mobile-light.jpg)] bg-contain bg-no-repeat">
        
            <Header/>
            <Form createTodo={createTodo} />
          <main className="container mx-auto px-5 mt-8">
            <List todos={todos} 
            rmTodo={rmTodo} 
            updateTodo={updateTodo} />
            <CountList count={count}/>
            <Selector/>

            
          </main>

          
          <footer className="text-center mt-12 text-gray-500">
            Drag and drop to reorder list
          </footer>
          
      </div>
  );
};

export default App;