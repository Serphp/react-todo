const Selector = () => {
    return (
        <section className="container mx-auto px-4 text-bold">
        <div className="px-5 py-5 bg-white mt-6 rounded-md">
        <span className=" flex justify-center gap-4">
          <button className="hover:text-blue-800">All</button>
          <button>Active</button>
          <button>Completed</button>
        </span>
        </div>
      </section>
    );
};

export default Selector;