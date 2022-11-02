import ListItem from "./ListItem";

const List = ({todos, rmTodo, updateTodo}) => {
        return (
        <div className=" rounded-md bg-white"> 
        {todos.map((todo) => (<ListItem key={todo.id} todo={todo} rmTodo={rmTodo} updateTodo={updateTodo}/>
        ))}</div>
        );
};

export default List;