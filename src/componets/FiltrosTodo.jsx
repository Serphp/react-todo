const FiltrosTodo = ({ FilSelector, filter }) => {
    return (
      <section>
          <div className="dark:bg-gray-800 transition-all duration-500 px-5 py-5 bg-white mt-6 rounded-md ">
            <span className=" flex justify-center gap-4 ">
              <button 
              className={` text-gray-500 ${filter === "all" && "hover:text-blue-600"}`}
              onClick={() => FilSelector("all")}>
                All
              </button>

              <button 
              className={` text-gray-500 ${filter === "active" && "text-blue-800"}`}
              onClick={() => FilSelector("active")}>
                Active
              </button>

              <button 
              className={` text-gray-500 ${filter === "completed" && "text-blue-800"}`}
              onClick={() => FilSelector("completed")}>
                Completed
              </button>
            </span>
          </div>
      </section>
    );
};

export default FiltrosTodo;