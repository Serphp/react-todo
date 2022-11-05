import List from "./List";
import IconCross from "./IconCross";
import IconStatus from "./IconStatus";
import React from "react";

const ListItem = React.forwardRef(({todo, rmTodo, updateTodo, ...props}, ref) => {
        const { id, title, completed } = todo;

        return (
        <article {...props} ref={ref} className="dark:bg-gray-800 transition-all duration-500 flex gap-4 border-b border-b-gray-700 py-5 px-5 ">
                <button className={`grid h-5 w-5  place-items-center rounded-full border-2 ${completed ? 
                          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center" 
                        : "lex-none inline-block h-5 w-5 rounded-full border-4"}`}
                        onClick={() => updateTodo(id)}>
                <IconStatus />
                </button>
                <p className={`grow text-gray-500 ${completed && " line-through"}`}> {title} </p>
                <button className=" flex-none" onClick={() => rmTodo(id)}><IconCross/></button>
        </article>
    );
})

export default ListItem;