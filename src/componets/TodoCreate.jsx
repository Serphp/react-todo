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
        <div className=" container mx-auto px-5 pt-8">
            <form onSubmit={handleSubmitAddTodo} className=" bg-white rounded-md overflow-hidden py-5 px-5 flex gap-6 items-center mt-12">
            <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
            <input 
            type="text" 
            placeholder="Write..." 
            className=" w-full text-gray-600 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            </form>
        </div>
    );
};

export default TodoCreate;