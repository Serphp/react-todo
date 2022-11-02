const Selector = ({ FilSelector, filter }) => {
    return (
      <section className="container mx-auto px-4 text-bold">
          <div className="px-5 py-5 bg-white mt-6 rounded-md">
            <span className=" flex justify-center gap-4 ">
              <button 
              className={` text-gray-500 ${filter === "all" && "text-blue-800"}`}
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
export default Selector;