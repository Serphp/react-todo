import ListItem from "./ListItem";

const List = ({todos}) => {
        return (
        <div className=" rounded-md bg-white [&>article]:text-gray-400:text-bold"> 
        {todos.map((todo) => (
            <ListItem key={todo.id} todo={todo} />
        ))}</div>
        );
};

export default List;