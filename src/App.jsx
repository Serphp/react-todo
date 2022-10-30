import Header from "./componets/Header";
import Form from "./componets/Form";
import Selector from "./componets/selector";
import { useState } from "react";
import List from "./componets/List";

const initialStateList = [
  { id: 1, title: "Saikou", completed: true },
  { id: 2, title: "Minnie", completed: false },
  { id: 3, title: "Gato programador", completed: false },
  { id: 4, title: "Gato cowboy", completed: false },
]

const App = () => {
  const [todos, setTodos] = useState(initialStateList);
  
  return (    
      <div className=" min-h-screen bg-gray-100 bg-[url(.\assets\images\bg-mobile-light.jpg)] bg-contain bg-no-repeat">
            <Header/>
            <Form />
          <main className="container mx-auto px-5 mt-8">
            <List todos={todos} />
            <Selector/>
          </main>

          <footer className="text-center mt-12 text-gray-500">
            Drag and drop to reorder list
          </footer>
      </div>
  );
};

export default App;