import ListItem from "./ListItem";

const List = ({todos}) => {
        //const todos = { id, title, completed };
        return (
        <div className=" rounded-md bg-white [&>article]:text-gray-400:text-bold"> 
        {todos.map((todo) => (
            <ListItem key={todo.id} todo={todo} />
        ))}</div>
        );
};

export default List;