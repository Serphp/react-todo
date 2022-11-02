import List from "./List";
import IconCross from "./IconCross";
import IconStatus from "./IconStatus";


const ListItem = ({todo, rmTodo, updateTodo}) => {
        const { id, title, completed } = todo;
        return (
        <div className=" rounded-md bg-white [&>article]:text-gray-400:text-bold"> 
        <article className=" flex gap-4 border-b border-b-gray-200 py-5 px-5 dark:bg-gray-800">
                {/*<button className=" flex-none inline-block h-5 w-5 rounded-full border-4">
                <IconStatus />
                </button>*/}
                <button className={`grid h-5 w-5  place-items-center rounded-full border-2 ${completed ? 
                          "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 justify-center" 
                        : "lex-none inline-block h-5 w-5 rounded-full border-4"}`}
                        onClick={() => updateTodo(id)}>
                <IconStatus />
                </button>
                <p className={`grow text-gray-500 ${completed && " line-through"}`}> {title} </p>
                <button className=" flex-none" onClick={() => rmTodo(id)}><IconCross/></button>
        </article></div>
    );
};

export default ListItem;

                {/*<article className=" flex gap-4 border-b border-b-gray-200 py-5 px-5">
                        <button className=" flex-none inline-block h-5 w-5 rounded-full border-4"></button>
                        <p className=" grow">Complete online JavaScript course</p>
                        <button className=" flex-none"><IconCross/></button>
                </article>
                <article className=" flex gap-4 border-b border-b-gray-200 py-5 px-5">
                        <button className=" flex-none inline-block h-5 w-5 rounded-full border-4"></button>
                        <p className=" grow">Complete online JavaScript course</p>
                        <button className=" flex-none"><IconCross/></button>
                </article>
                <article className=" flex gap-4 border-b border-b-gray-200 py-4 px-4">
                        <button className=" flex-none inline-block h-5 w-5 rounded-full border-4"></button>
                        <p className=" grow">Complete online JavaScript course</p>
                        <button className=" flex-none"><IconCross/></button>
                </article>
 */}