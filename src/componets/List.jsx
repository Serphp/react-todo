import { Draggable, Droppable } from "@hello-pangea/dnd";
import ListItem from "./ListItem";

const List = ({todos, rmTodo, updateTodo}) => {
        return (
        <Droppable droppableId="todos">
        {(droppableProvided) => (
        <div ref={droppableProvided.innerRef} {...droppableProvided.droppableProps} 
        className="dark:bg-gray-800 transition-all duration-500 overflow-hidden 
        rounded-t-md bg-white"> 
        {todos.map((todo, index) => (
        <Draggable index={index} key={todo.id} draggableId={`${todo.id}`}>
                {
                        (draggableProvided) => (
                                <ListItem 
                                key={todo.id}
                                todo={todo} 
                                rmTodo={rmTodo} 
                                updateTodo={updateTodo}
                                ref={draggableProvided.innerRef}
                                {...draggableProvided.dragHandleProps}
                                {...draggableProvided.draggableProps}
                                />
                        )
                }
        </Draggable>
        ))}
        {droppableProvided.placeholder}
        </div>
        )}
        </Droppable> 
        );
};

export default List;

