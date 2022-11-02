const CountList = ({count, ClearList}) => {
    return (
        <section className="dark:bg-gray-800 transition-all duration-500 flex px-5 py-5 text-gray-500 bg-white rounded-b-md">
        <span className=" grow">{count} items left</span>
        <button className="flex-none" onClick={ClearList}>Clear Complete</button>
        </section>
    )
}

export default CountList;