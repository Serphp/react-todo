import { useState } from "react";

const TodoCreate = ({createTodo}) => {
    const [title, setTitle] = useState("");

    const handleSubmitAddTodo = (e) => 
        {
            e.preventDefault();
            console.log(title)

            if (title.trim().length > 0)
            {
                createTodo(title);
                return setTitle("");
            }
        }
    return (
        <div className="container mx-auto mt-8 px-4 md:max-w-xl">
            <form onSubmit={handleSubmitAddTodo} 
            className="dark:bg-gray-800 transition-all duration-500 bg-white rounded-md overflow-hidden py-5 px-5 flex gap-6 items-center mt-12">
            <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
            <input 
            type="text" 
            placeholder="Write..." 
            className="dark:bg-gray-800 transition-all duration-500 w-full text-gray-600 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </form>
        </div>
    );
};

export default TodoCreate;