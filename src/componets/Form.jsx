const TodoCreate = () => {
    return (
        <div className=" container mx-auto px-5 pt-8">
            <form className=" bg-white rounded-md overflow-hidden py-5 px-5 flex gap-6 items-center mt-12">
            <span className=" inline-block h-5 w-5 rounded-full border-2"></span>
            <input type="text" placeholder="Create a new todo..." className=" w-full text-gray-600 outline-none"/>
            </form>
        </div>
    );
};

export default TodoCreate;