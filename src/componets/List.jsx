import ListItem from "./ListItem";

const List = ({todos, rmTodo, updateTodo}) => {
        return (
        <div className="dark:bg-gray-800 transition-all duration-500 overflow-hidden rounded-t-md bg-white"> 
        {todos.map((todo) => (
        <ListItem key={todo.id} 
        todo={todo} 
        rmTodo={rmTodo} 
        updateTodo={updateTodo}/>
        ))}
        </div>
        );
};

export default List;